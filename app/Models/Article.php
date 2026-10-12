<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;

    public const STATUS_DRAFT = 'draft';

    public const STATUS_PUBLISHED = 'published';

    protected $table = 'blog_articles';

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'featured_image',
        'content',
        'status',
        'published_at',
        'meta_title',
        'meta_description',
        'focus_keyword',
        'meta_keywords',
        'featured_image_alt',
        'canonical_url',
        'noindex',
    ];

    protected $appends = ['featured_image_url'];

    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
            'noindex' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::saving(function (Article $article) {
            $article->slug = static::uniqueSlug($article->slug ?: $article->title, $article->id);

            if ($article->status === self::STATUS_PUBLISHED && ! $article->published_at) {
                $article->published_at = now();
            }
        });

        static::deleted(function (Article $article) {
            if ($article->featured_image) {
                Storage::disk('public')->delete($article->featured_image);
            }
        });
    }

    /**
     * Articles visibles sur le site public : publies et dont la date de publication est passee.
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', self::STATUS_PUBLISHED)
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }

    public function isPublished(): bool
    {
        return $this->status === self::STATUS_PUBLISHED && $this->published_at && $this->published_at->lte(now());
    }

    public function getFeaturedImageUrlAttribute(): ?string
    {
        // URL relative : independante de APP_URL (local, preprod, production).
        return $this->featured_image ? '/storage/'.ltrim($this->featured_image, '/') : null;
    }

    public static function uniqueSlug(string $value, ?int $ignoreId = null): string
    {
        $base = Str::slug($value) ?: 'article';
        $base = Str::limit($base, 180, '');
        $slug = $base;
        $suffix = 2;

        while (static::where('slug', $slug)->when($ignoreId, fn ($q) => $q->whereKeyNot($ignoreId))->exists()) {
            $slug = "{$base}-{$suffix}";
            $suffix++;
        }

        return $slug;
    }
}
