<?php

use App\Http\Controllers\Admin\ArticleController as AdminArticleController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
use App\Models\Article;
use App\Support\ServicePages;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('contact', [ContactController::class, 'show'])->name('contact');
Route::post('contact', [ContactController::class, 'submit'])->name('contact.submit');

Route::get('devis', function () {
    return Inertia::render('devis');
})->name('quote');

// Page galerie masquée temporairement — redirige vers l'accueil.
// Pour la réactiver : rétablir Inertia::render('galerie'), le lien navbar et l'entrée sitemap.
Route::get('galerie', function () {
    return redirect('/', 302);
})->name('galerie');

Route::get('configurateur', function () {
    return Inertia::render('configurateur');
})->name('configurateur');

Route::get('apropos', function () {
    return Inertia::render('propos');
})->name('apropos');

Route::get('services', function () {
    return Inertia::render('services/index');
})->name('services');

// Une page par service, a la racine du site : /impression-numerique, /habillage-vehicule, ...
foreach (ServicePages::SLUGS as $serviceSlug) {
    Route::get($serviceSlug, fn () => Inertia::render('services/show', ['slug' => $serviceSlug]))
        ->name('service.'.$serviceSlug);
}

// Anciennes URLs des services : redirection permanente vers les nouvelles pages.
Route::get('services/{service}', fn (string $service) => redirect(ServicePages::legacyTarget($service), 301))
    ->name('services.show');

Route::get('savoir-faire', fn () => redirect('/services', 301))->name('savoir-faire');

Route::get('savoir-faire/{service}', fn (string $service) => redirect(ServicePages::legacyTarget($service), 301))
    ->name('savoir-faire.show');

Route::get('articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('articles/{slug}', [ArticleController::class, 'show'])->name('articles.show');

Route::get('sitemap.xml', function () {
    $baseUrl = 'https://webprint.ma';

    $entries = collect([
        ['path' => '/', 'priority' => '1.0', 'changefreq' => 'weekly'],
        ['path' => '/apropos', 'priority' => '0.7', 'changefreq' => 'monthly'],
        ['path' => '/services', 'priority' => '0.9', 'changefreq' => 'weekly'],
        ...array_map(fn (string $slug) => ['path' => '/'.$slug, 'priority' => '0.8', 'changefreq' => 'monthly'], ServicePages::SLUGS),
        ['path' => '/articles', 'priority' => '0.8', 'changefreq' => 'daily'],
        ['path' => '/configurateur', 'priority' => '0.7', 'changefreq' => 'monthly'],
        ['path' => '/devis', 'priority' => '0.9', 'changefreq' => 'weekly'],
        ['path' => '/contact', 'priority' => '0.8', 'changefreq' => 'monthly'],
    ]);

    $articles = Article::published()
        ->where('noindex', false)
        ->latest('published_at')
        ->get(['slug', 'updated_at'])
        ->map(fn (Article $article) => [
            'path' => '/articles/'.$article->slug,
            'priority' => '0.7',
            'changefreq' => 'monthly',
            'lastmod' => $article->updated_at->toAtomString(),
        ]);

    $urls = $entries->concat($articles)
        ->map(fn (array $entry) => sprintf(
            '<url><loc>%s</loc>%s<changefreq>%s</changefreq><priority>%s</priority>%s</url>',
            e($baseUrl . $entry['path']),
            isset($entry['lastmod']) ? '<lastmod>'.e($entry['lastmod']).'</lastmod>' : '',
            $entry['changefreq'],
            $entry['priority'],
            isset(ServicePages::IMAGES[ltrim($entry['path'], '/')])
                ? '<image:image><image:loc>'.e($baseUrl.ServicePages::IMAGES[ltrim($entry['path'], '/')]).'</image:loc></image:image>'
                : ''
        ))
        ->implode('');

    return response(
        '<?xml version="1.0" encoding="UTF-8"?>'
        . '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
        . $urls
        . '</urlset>',
        200,
        ['Content-Type' => 'application/xml; charset=UTF-8']
    );
})->name('sitemap');


Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [ContactController::class, 'dashboard'])->name('dashboard');

    Route::get('messages/{contactMessage}', [ContactController::class, 'showMessage'])->name('messages.show');
    Route::delete('messages/{contactMessage}', [ContactController::class, 'destroyMessage'])->name('messages.destroy');
    Route::get('messages/{contactMessage}/attachment', [ContactController::class, 'attachment'])->name('messages.attachment');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::post('articles/upload-image', [AdminArticleController::class, 'uploadImage'])->name('articles.upload-image');
        Route::patch('articles/{article}/toggle-status', [AdminArticleController::class, 'toggleStatus'])->name('articles.toggle-status');
        Route::resource('articles', AdminArticleController::class)->except('show');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
