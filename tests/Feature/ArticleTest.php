<?php

use App\Models\Article;
use App\Models\User;
use App\Support\HtmlSanitizer;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

test('public listing only shows published articles', function () {
    $published = Article::factory()->published()->create(['title' => 'Article visible']);
    Article::factory()->create(['title' => 'Brouillon cache']);
    Article::factory()->create(['title' => 'Programme futur', 'status' => 'published', 'published_at' => now()->addWeek()]);

    $this->get('/articles')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('articles/index')
            ->has('articles.data', 1)
            ->where('articles.data.0.slug', $published->slug));
});

test('draft articles return 404 to guests but can be previewed by admins', function () {
    $draft = Article::factory()->create();

    $this->get("/articles/{$draft->slug}")->assertNotFound();

    $this->actingAs(User::factory()->create())
        ->get("/articles/{$draft->slug}")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('articles/show')->where('isPreview', true));
});

test('published article page renders', function () {
    $article = Article::factory()->published()->create();

    $this->get("/articles/{$article->slug}")
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('articles/show')->where('article.id', $article->id)->where('isPreview', false));
});

test('slug is generated from the title and kept unique', function () {
    $first = Article::factory()->create(['title' => 'Impression de bâches à Casablanca']);
    $second = Article::factory()->create(['title' => 'Impression de bâches à Casablanca']);

    expect($first->slug)->toBe('impression-de-baches-a-casablanca')
        ->and($second->slug)->toBe('impression-de-baches-a-casablanca-2');
});

test('admin pages require authentication', function () {
    $this->get('/admin/articles')->assertRedirect('/login');
    $this->post('/admin/articles', [])->assertRedirect('/login');
});

test('admin can create, update, toggle and delete an article', function () {
    Storage::fake('public');
    $this->actingAs(User::factory()->create());

    $this->get('/admin/articles')->assertOk();
    $this->get('/admin/articles/create')->assertOk();

    $this->post('/admin/articles', [
        'title' => 'Mon premier article',
        'excerpt' => 'Résumé',
        'content' => '<h2>Titre</h2><p style="color: #0876ce" onclick="alert(1)">Texte</p><script>alert(1)</script>',
        'status' => 'draft',
        'featured_image' => UploadedFile::fake()->image('cover.jpg', 1600, 900),
    ])->assertRedirect();

    $article = Article::firstOrFail();
    expect($article->slug)->toBe('mon-premier-article')
        ->and($article->content)->toBe('<h2>Titre</h2><p style="color: #0876ce">Texte</p>')
        ->and($article->published_at)->toBeNull();
    Storage::disk('public')->assertExists($article->featured_image);

    $this->get("/admin/articles/{$article->id}/edit")->assertOk();

    $this->put("/admin/articles/{$article->id}", [
        'title' => 'Titre modifié',
        'slug' => 'mon-slug-perso',
        'content' => '<p>Nouveau</p>',
        'status' => 'published',
        'meta_title' => 'Meta',
        'meta_description' => 'Description',
    ])->assertRedirect();

    $article->refresh();
    expect($article->slug)->toBe('mon-slug-perso')
        ->and($article->status)->toBe('published')
        ->and($article->published_at)->not->toBeNull()
        ->and($article->meta_title)->toBe('Meta');

    $this->patch("/admin/articles/{$article->id}/toggle-status")->assertRedirect();
    expect($article->refresh()->status)->toBe('draft');

    $image = $article->featured_image;
    $this->delete("/admin/articles/{$article->id}")->assertRedirect('/admin/articles');
    expect(Article::count())->toBe(0);
    Storage::disk('public')->assertMissing($image);
});

test('admin can upload images from the editor', function () {
    Storage::fake('public');
    $this->actingAs(User::factory()->create());

    $response = $this->postJson('/admin/articles/upload-image', [
        'image' => UploadedFile::fake()->image('photo.png', 800, 600),
    ])->assertOk();

    $path = str_replace('/storage/', '', $response->json('url'));
    Storage::disk('public')->assertExists($path);

    $this->postJson('/admin/articles/upload-image', [
        'image' => UploadedFile::fake()->create('script.php', 1, 'text/x-php'),
    ])->assertUnprocessable();
});

test('sanitizer keeps formatting and strips dangerous markup', function () {
    $html = '<h1>T</h1><p style="text-align: center; position: fixed">a <a href="javascript:alert(1)">x</a> <a href="https://webprint.ma" target="_blank">y</a></p>'
        .'<img src="/storage/articles/a.jpg" alt="A" onerror="alert(1)"><iframe src="https://evil.test"></iframe><div data-spacer="" data-size="lg"></div>';

    expect(HtmlSanitizer::clean($html))->toBe(
        '<h1>T</h1><p style="text-align: center">a <a>x</a> <a href="https://webprint.ma" target="_blank" rel="noopener noreferrer">y</a></p>'
        .'<img src="/storage/articles/a.jpg" alt="A" loading="lazy"><div data-spacer="" data-size="lg"></div>'
    );
});

test('service pages and legacy redirects work', function () {
    $this->get('/impression-numerique')->assertOk()->assertInertia(fn (Assert $page) => $page->component('services/show')->where('slug', 'impression-numerique'));
    $this->get('/habillage-vehicule')->assertOk();
    $this->get('/services')->assertOk();
    $this->get('/services/grand-format')->assertRedirect('/impression-grand-format')->assertStatus(301);
    $this->get('/savoir-faire')->assertRedirect('/services');
});

test('sitemap lists services and published articles only', function () {
    $published = Article::factory()->published()->create();
    $draft = Article::factory()->create();

    $this->get('/sitemap.xml')
        ->assertOk()
        ->assertSee('/impression-vitrine', false)
        ->assertSee('/articles</loc>', false)
        ->assertSee("/articles/{$published->slug}", false)
        ->assertDontSee("/articles/{$draft->slug}", false);
});

test('admin can save SEO fields and keywords are normalized', function () {
    $this->actingAs(User::factory()->create());

    $this->post('/admin/articles', [
        'title' => 'Bâche publicitaire : le guide',
        'status' => 'published',
        'focus_keyword' => 'bâche publicitaire',
        'meta_keywords' => ' bâche ,Casablanca,  bâche, impression   grand format ,',
        'featured_image_alt' => 'Bâche imprimée',
        'canonical_url' => 'https://webprint.ma/articles/original',
        'noindex' => '1',
    ])->assertRedirect();

    $article = Article::firstOrFail();
    expect($article->meta_keywords)->toBe('bâche, Casablanca, impression grand format')
        ->and($article->focus_keyword)->toBe('bâche publicitaire')
        ->and($article->featured_image_alt)->toBe('Bâche imprimée')
        ->and($article->canonical_url)->toBe('https://webprint.ma/articles/original')
        ->and($article->noindex)->toBeTrue();

    $this->get('/sitemap.xml')->assertDontSee("/articles/{$article->slug}", false);

    $this->post('/admin/articles', ['title' => 'X', 'status' => 'draft', 'canonical_url' => 'javascript:alert(1)'])
        ->assertSessionHasErrors('canonical_url');
});
