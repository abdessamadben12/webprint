<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Support\HtmlSanitizer;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(Request $request): Response
    {
        $filters = $request->validate([
            'status' => 'nullable|in:draft,published',
            'search' => 'nullable|string|max:100',
        ]);

        $articles = Article::query()
            ->when($filters['status'] ?? null, fn ($query, $status) => $query->where('status', $status))
            ->when($filters['search'] ?? null, fn ($query, $search) => $query->where('title', 'like', "%{$search}%"))
            ->latest()
            ->select(['id', 'title', 'slug', 'featured_image', 'status', 'published_at', 'created_at'])
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('admin/articles/index', [
            'articles' => $articles,
            'filters' => [
                'status' => $filters['status'] ?? '',
                'search' => $filters['search'] ?? '',
            ],
            'counts' => [
                'total' => Article::count(),
                'published' => Article::where('status', Article::STATUS_PUBLISHED)->count(),
                'draft' => Article::where('status', Article::STATUS_DRAFT)->count(),
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/articles/form', ['article' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        $article = new Article;
        $this->fillArticle($article, $request);
        $article->save();

        return redirect()->route('admin.articles.edit', $article)->with('success', 'Article créé avec succès.');
    }

    public function edit(Article $article): Response
    {
        return Inertia::render('admin/articles/form', ['article' => $article]);
    }

    public function update(Request $request, Article $article): RedirectResponse
    {
        $this->fillArticle($article, $request);
        $article->save();

        return back()->with('success', 'Article mis à jour.');
    }

    public function destroy(Article $article): RedirectResponse
    {
        $article->delete();

        return redirect()->route('admin.articles.index')->with('success', 'Article supprimé.');
    }

    public function toggleStatus(Article $article): RedirectResponse
    {
        $article->status = $article->status === Article::STATUS_PUBLISHED ? Article::STATUS_DRAFT : Article::STATUS_PUBLISHED;
        $article->save();

        return back()->with('success', $article->status === Article::STATUS_PUBLISHED ? 'Article publié.' : 'Article repassé en brouillon.');
    }

    /**
     * Upload d'une image inseree dans le contenu depuis l'editeur riche.
     */
    public function uploadImage(Request $request): JsonResponse
    {
        $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png,webp,gif|max:5120',
        ]);

        $path = $request->file('image')->store('articles/content/'.now()->format('Y/m'), 'public');

        return response()->json(['url' => '/storage/'.$path]);
    }

    /** « impression, Bâche ,impression » -> « impression, Bâche » */
    private static function normalizeKeywords(?string $keywords): ?string
    {
        $list = collect(explode(',', (string) $keywords))
            ->map(fn (string $keyword) => trim(preg_replace('/\s+/', ' ', $keyword)))
            ->filter()
            ->unique(fn (string $keyword) => mb_strtolower($keyword))
            ->take(15);

        return $list->isEmpty() ? null : $list->implode(', ');
    }

    private function fillArticle(Article $article, Request $request): void
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|max:200',
            'excerpt' => 'nullable|string|max:500',
            'content' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'focus_keyword' => 'nullable|string|max:100',
            'meta_keywords' => 'nullable|string|max:500',
            'featured_image_alt' => 'nullable|string|max:255',
            'canonical_url' => 'nullable|url:http,https|max:500',
            'noindex' => 'nullable|boolean',
            'featured_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
            'remove_featured_image' => 'nullable|boolean',
        ]);

        $article->fill([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['slug'] ?? '') ?: null,
            'excerpt' => $validated['excerpt'] ?? null,
            'content' => HtmlSanitizer::clean($validated['content'] ?? ''),
            'status' => $validated['status'],
            // Date envoyee en ISO (UTC) par le navigateur : conversion dans le fuseau de l'application.
            'published_at' => isset($validated['published_at']) ? Carbon::parse($validated['published_at'])->setTimezone(config('app.timezone')) : null,
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
            'focus_keyword' => $validated['focus_keyword'] ?? null,
            'meta_keywords' => static::normalizeKeywords($validated['meta_keywords'] ?? null),
            'featured_image_alt' => $validated['featured_image_alt'] ?? null,
            'canonical_url' => $validated['canonical_url'] ?? null,
            'noindex' => $request->boolean('noindex'),
        ]);

        $removeImage = $request->boolean('remove_featured_image') || $request->hasFile('featured_image');

        if ($removeImage && $article->featured_image) {
            Storage::disk('public')->delete($article->featured_image);
            $article->featured_image = null;
        }

        if ($request->hasFile('featured_image')) {
            $article->featured_image = $request->file('featured_image')->store('articles', 'public');
        }
    }
}
