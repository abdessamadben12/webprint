export type ArticleStatus = 'draft' | 'published';

export interface ArticleSummary {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    featured_image_url: string | null;
    published_at: string | null;
}

export interface Article extends ArticleSummary {
    content: string | null;
    status: ArticleStatus;
    meta_title: string | null;
    meta_description: string | null;
    focus_keyword: string | null;
    meta_keywords: string | null;
    featured_image_alt: string | null;
    canonical_url: string | null;
    noindex: boolean;
    created_at: string;
    updated_at: string;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginated<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

export function formatArticleDate(value: string | null, withTime = false): string {
    if (!value) return '-';

    return new Date(value).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
    });
}

/** Libelles de pagination Laravel (« &laquo; Previous ») convertis en texte lisible. */
export function paginationLabel(label: string): string {
    if (label.includes('Previous') || label.includes('&laquo;')) return '‹ Précédent';
    if (label.includes('Next') || label.includes('&raquo;')) return 'Suivant ›';
    return label;
}
