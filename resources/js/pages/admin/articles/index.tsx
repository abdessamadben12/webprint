import FlashMessage from '@/components/admin/flash-message';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { formatArticleDate, paginationLabel, type Article, type Paginated } from '@/types/article';
import { Head, Link, router } from '@inertiajs/react';
import { Eye, EyeOff, FileText, ImageOff, Newspaper, Pencil, Plus, Search, Send, Trash2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Articles', href: '/admin/articles' },
];

type ArticleRow = Pick<Article, 'id' | 'title' | 'slug' | 'featured_image_url' | 'status' | 'published_at' | 'created_at'>;

interface Filters {
    status: string;
    search: string;
}

interface ArticlesIndexProps {
    articles: Paginated<ArticleRow>;
    filters: Filters;
    counts: { total: number; published: number; draft: number };
}

function isScheduled(article: ArticleRow) {
    return article.status === 'published' && article.published_at !== null && new Date(article.published_at) > new Date();
}

export default function AdminArticlesIndex({ articles, filters, counts }: ArticlesIndexProps) {
    const [search, setSearch] = useState(filters.search);

    const applyFilters = (next: Partial<Filters>) => {
        const merged = { ...filters, ...next };
        const params = Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== ''));
        router.get('/admin/articles', params, { preserveState: true, preserveScroll: true, replace: true });
    };

    // Recherche avec un court delai pour eviter une requete par frappe.
    useEffect(() => {
        if (search === filters.search) return;
        const timer = setTimeout(() => applyFilters({ search }), 350);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const toggleStatus = (article: ArticleRow) => {
        router.patch(`/admin/articles/${article.id}/toggle-status`, {}, { preserveScroll: true });
    };

    const deleteArticle = (article: ArticleRow) => {
        if (confirm(`Supprimer définitivement l'article « ${article.title} » ?`)) {
            router.delete(`/admin/articles/${article.id}`, { preserveScroll: true });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Articles" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6">
                <FlashMessage />

                <div className="grid auto-rows-min gap-4 sm:grid-cols-3 sm:gap-6">
                    <StatCard label="Articles" value={counts.total} icon={<Newspaper className="h-6 w-6" />} />
                    <StatCard label="Publiés" value={counts.published} icon={<Send className="h-6 w-6" />} />
                    <StatCard label="Brouillons" value={counts.draft} icon={<FileText className="h-6 w-6" />} />
                </div>

                <div className="flex min-h-[50vh] flex-1 flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
                    <div className="flex flex-col justify-between gap-3 border-b border-neutral-300 pb-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="text-lg font-bold tracking-wide text-neutral-900">Articles</h1>
                            <p className="mt-1 text-xs text-neutral-500">Rédigez et publiez les articles affichés sur la page /articles du site.</p>
                        </div>
                        <Link
                            href="/admin/articles/create"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af]"
                        >
                            <Plus className="h-4 w-4" />
                            Ajouter un article
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-end gap-3">
                        <label className="flex min-w-[200px] flex-1 flex-col gap-1.5 sm:max-w-xs">
                            <span className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">Rechercher</span>
                            <span className="relative">
                                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" />
                                <input
                                    type="search"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Titre de l'article"
                                    className="w-full rounded-lg border border-neutral-300 bg-white py-2 pr-3 pl-9 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none"
                                />
                            </span>
                        </label>
                        <label className="flex flex-col gap-1.5">
                            <span className="text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">Statut</span>
                            <select
                                value={filters.status}
                                onChange={(event) => applyFilters({ status: event.target.value })}
                                className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none"
                            >
                                <option value="">Tous</option>
                                <option value="published">Publiés</option>
                                <option value="draft">Brouillons</option>
                            </select>
                        </label>
                        {(filters.status || filters.search) && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch('');
                                    applyFilters({ status: '', search: '' });
                                }}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-900"
                            >
                                <X className="h-3.5 w-3.5" />
                                Réinitialiser
                            </button>
                        )}
                    </div>

                    {articles.data.length > 0 ? (
                        <div className="w-full overflow-x-auto">
                            <table className="w-full min-w-[820px] border-collapse text-left">
                                <thead>
                                    <tr className="border-b border-neutral-300 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
                                        <th className="px-4 py-4 font-semibold">Image</th>
                                        <th className="px-4 py-4 font-semibold">Titre</th>
                                        <th className="px-4 py-4 font-semibold">Statut</th>
                                        <th className="px-4 py-4 font-semibold">Publication</th>
                                        <th className="px-4 py-4 font-semibold">Création</th>
                                        <th className="px-4 py-4 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200 text-xs text-neutral-700">
                                    {articles.data.map((article) => {
                                        const published = article.status === 'published';
                                        const scheduled = isScheduled(article);
                                        return (
                                            <tr key={article.id} className="transition-colors hover:bg-neutral-50">
                                                <td className="px-4 py-3">
                                                    {article.featured_image_url ? (
                                                        <img src={article.featured_image_url} alt="" className="h-14 w-20 rounded-md object-cover" loading="lazy" />
                                                    ) : (
                                                        <div className="flex h-14 w-20 items-center justify-center rounded-md bg-neutral-100 text-neutral-500">
                                                            <ImageOff className="h-5 w-5" />
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="max-w-sm px-4 py-3">
                                                    <Link href={`/admin/articles/${article.id}/edit`} className="text-sm font-semibold text-neutral-900 hover:text-brand-blue">
                                                        {article.title}
                                                    </Link>
                                                    <div className="mt-1 truncate text-neutral-500">/articles/{article.slug}</div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span
                                                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap uppercase ${
                                                            scheduled
                                                                ? 'bg-blue-50 text-blue-700'
                                                                : published
                                                                  ? 'bg-emerald-50 text-emerald-700'
                                                                  : 'bg-neutral-200 text-neutral-700'
                                                        }`}
                                                    >
                                                        {scheduled ? 'Programmé' : published ? 'Publié' : 'Brouillon'}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 whitespace-nowrap text-neutral-500">{formatArticleDate(article.published_at, true)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-neutral-500">{formatArticleDate(article.created_at)}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <ActionLink href={`/admin/articles/${article.id}/edit`} title="Modifier">
                                                            <Pencil className="h-4 w-4" />
                                                        </ActionLink>
                                                        <a
                                                            href={`/articles/${article.slug}`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            title={published && !scheduled ? "Voir l'article" : 'Prévisualiser'}
                                                            aria-label={published && !scheduled ? "Voir l'article" : 'Prévisualiser'}
                                                            className="rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-brand-blue hover:text-brand-blue"
                                                        >
                                                            <Eye className="h-4 w-4" />
                                                        </a>
                                                        <button
                                                            type="button"
                                                            onClick={() => toggleStatus(article)}
                                                            title={published ? 'Dépublier' : 'Publier'}
                                                            className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[11px] font-semibold transition-colors ${
                                                                published
                                                                    ? 'border-neutral-300 text-neutral-700 hover:border-amber-500 hover:text-amber-600'
                                                                    : 'border-emerald-300 text-emerald-700 hover:border-emerald-500'
                                                            }`}
                                                        >
                                                            {published ? <EyeOff className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                                                            {published ? 'Dépublier' : 'Publier'}
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => deleteArticle(article)}
                                                            title="Supprimer"
                                                            aria-label="Supprimer"
                                                            className="rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-red-500 hover:text-red-600"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                            <Newspaper className="h-12 w-12 text-neutral-400" strokeWidth={1.5} />
                            <h2 className="text-sm font-semibold text-neutral-500">Aucun article</h2>
                            <p className="max-w-xs text-xs leading-relaxed text-neutral-500">
                                {filters.status || filters.search
                                    ? 'Aucun article ne correspond aux filtres sélectionnés.'
                                    : 'Créez votre premier article pour alimenter la page /articles.'}
                            </p>
                        </div>
                    )}

                    {articles.last_page > 1 && (
                        <nav aria-label="Pagination" className="mt-auto flex flex-wrap items-center justify-center gap-2 pt-4">
                            {articles.links.map((link, index) =>
                                link.url ? (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        preserveScroll
                                        className={`rounded-lg border px-3 py-1.5 text-xs ${
                                            link.active ? 'border-brand-blue bg-brand-blue font-bold text-white' : 'border-neutral-300 text-neutral-700 hover:border-neutral-500'
                                        }`}
                                    >
                                        {paginationLabel(link.label)}
                                    </Link>
                                ) : (
                                    <span key={index} className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-400">
                                        {paginationLabel(link.label)}
                                    </span>
                                ),
                            )}
                        </nav>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

function ActionLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            title={title}
            aria-label={title}
            className="rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-brand-blue hover:text-brand-blue"
        >
            {children}
        </Link>
    );
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase">{label}</span>
                <span className="mt-1 text-3xl font-bold text-neutral-900">{value}</span>
            </div>
            <div className="rounded-lg bg-brand-blue/10 p-3 text-brand-blue">{icon}</div>
        </div>
    );
}
