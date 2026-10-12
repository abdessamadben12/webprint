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

        return Inertia::render('articles/show', [
            'article' => $article,
            'related' => $related,
            'isPreview' => $isPreview,
        ]);
    }
}
