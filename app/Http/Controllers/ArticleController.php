<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(): Response
    {
        $articles = Article::published()
            ->latest('published_at')
            ->select(['id', 'title', 'slug', 'excerpt', 'featured_image', 'published_at'])
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('articles/index', [
            'articles' => $articles,
        ]);
    }

    public function show(Request $request, string $slug): Response
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        // Les brouillons ne sont jamais visibles du public ; l'administrateur connecte peut les previsualiser.
        $isPreview = ! $article->isPublished();
        abort_if($isPreview && ! $request->user(), 404);

        $related = Article::published()
            ->whereKeyNot($article->id)
            ->latest('published_at')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'excerpt', 'featured_image', 'published_at']);

        $text = trim(preg_replace('/\s+/', ' ', strip_tags((string) $article->content)));

        return Inertia::render('articles/show', [
            'article' => $article,
            'related' => $related,
            'isPreview' => $isPreview,
        ])->withViewData(['seo' => [
            'title' => $article->meta_title ?: $article->title.' | webprint.ma',
            'description' => $article->meta_description ?: ($article->excerpt ?: mb_substr($text, 0, 160)),
            'keywords' => array_map('trim', array_filter([$article->focus_keyword, ...explode(',', (string) $article->meta_keywords)])),
            'image' => $article->featured_image_url,
            'canonical' => $article->canonical_url,
            'type' => 'article',
            'noindex' => $isPreview || $article->noindex,
        ]]);
    }
}
