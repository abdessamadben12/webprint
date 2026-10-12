import ArticleCard from '@/components/articles/article-card';
import { Reveal } from '@/components/motion';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { absoluteUrl } from '@/components/seo-head';
import { type SharedData } from '@/types';
import { formatArticleDate, type Article, type ArticleSummary } from '@/types/article';
import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight, Calendar, ChevronRight, EyeOff, Pencil } from 'lucide-react';

interface ArticleShowProps {
    article: Article;
    related: ArticleSummary[];
    isPreview: boolean;
}

function plainText(html: string | null): string {
    return (html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export default function ArticleShow({ article, related, isPreview }: ArticleShowProps) {
    const { appUrl } = usePage<SharedData>().props;
    const baseUrl = appUrl.endsWith('/') ? appUrl : `${appUrl}/`;
    const pageUrl = absoluteUrl(`/articles/${article.slug}`, baseUrl);
    const text = plainText(article.content);
    const description = article.meta_description || article.excerpt || text.slice(0, 160);
    const readingMinutes = Math.max(1, Math.round(text.split(' ').length / 200));
    const image = article.featured_image_url ?? undefined;
    const imageAlt = article.featured_image_alt || article.title;
    const keywords = [article.focus_keyword, ...(article.meta_keywords ?? '').split(',')]
        .map((keyword) => keyword?.trim() ?? '')
        .filter(Boolean);

    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]">
            <SeoHead
                title={article.meta_title || `${article.title} | webprint.ma`}
                description={description}
                keywords={keywords}
                image={image}
                type="article"
                noIndex={isPreview || article.noindex}
                canonical={article.canonical_url ?? undefined}
                publishedTime={article.published_at ?? undefined}
                modifiedTime={article.updated_at}
                extraSchema={[
                    {
                        '@type': 'BlogPosting',
                        '@id': `${pageUrl}#article`,
                        headline: article.title,
                        description,
                        url: pageUrl,
                        mainEntityOfPage: pageUrl,
                        ...(keywords.length ? { keywords: keywords.join(', ') } : {}),
                        inLanguage: 'fr-MA',
                        ...(image ? { image: absoluteUrl(image, baseUrl) } : {}),
                        datePublished: article.published_at,
                        dateModified: article.updated_at,
                        author: { '@type': 'Organization', name: 'webprint.ma', url: absoluteUrl('/', baseUrl) },
                        publisher: { '@id': `${absoluteUrl('/', baseUrl)}#business` },
                        wordCount: text ? text.split(' ').length : 0,
                    },
                    {
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Accueil', item: absoluteUrl('/', baseUrl) },
                            { '@type': 'ListItem', position: 2, name: 'Articles', item: absoluteUrl('/articles', baseUrl) },
                            { '@type': 'ListItem', position: 3, name: article.title, item: pageUrl },
                        ],
                    },
                ]}
            />
            <Navbar />

            {isPreview && (
                <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
                    <div className="site-container mx-auto flex flex-wrap items-center justify-between gap-3">
                        <span className="flex items-center gap-2 text-sm font-semibold">
                            <EyeOff size={16} aria-hidden="true" />
                            Aperçu administrateur : cet article n'est pas visible par le public.
                        </span>
                        <Link href={`/admin/articles/${article.id}/edit`} className="inline-flex items-center gap-1.5 text-sm font-semibold underline">
                            <Pencil size={14} aria-hidden="true" />
                            Modifier l'article
                        </Link>
                    </div>
                </div>
            )}

            <main className="flex-grow">
                <article>
                    <header className="mx-auto max-w-4xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
                        <nav aria-label="Fil d'Ariane" className="mb-6">
                            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
                                <li>
                                    <Link href="/" className="hover:text-brand-blue">
                                        Accueil
                                    </Link>
                                </li>
                                <ChevronRight size={14} aria-hidden="true" />
                                <li>
                                    <Link href="/articles" className="hover:text-brand-blue">
                                        Articles
                                    </Link>
                                </li>
                                <ChevronRight size={14} aria-hidden="true" />
                                <li aria-current="page" className="line-clamp-1 text-gray-700">
                                    {article.title}
                                </li>
                            </ol>
                        </nav>

                        <h1 className="text-alidade-navy text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl">{article.title}</h1>

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                            {article.published_at && (
                                <time dateTime={article.published_at} className="flex items-center gap-2">
                                    <Calendar size={16} className="text-brand-blue" aria-hidden="true" />
                                    Publié le {formatArticleDate(article.published_at)}
                                </time>
                            )}
                            <span>{readingMinutes} min de lecture</span>
                        </div>

                        {article.excerpt && <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">{article.excerpt}</p>}
                    </header>

                    {image && (
                        <div className="mx-auto mt-8 max-w-5xl px-4 sm:mt-10 sm:px-6 lg:px-8">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                            />
                        </div>
                    )}

                    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                        {/* Contenu nettoye cote serveur (App\Support\HtmlSanitizer) avant enregistrement. */}
                        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content ?? '' }} />

                        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-alidade-navy p-8 text-white sm:flex-row sm:items-center">
                            <div>
                                <p className="text-alidade-gold text-sm font-bold tracking-[0.2em] uppercase">Un projet d'impression ?</p>
                                <p className="mt-2 text-xl font-bold">Notre équipe vous répond sous 24 h.</p>
                            </div>
                            <Link href="/devis" className="brand-button shrink-0">
                                <span className="brand-button-label">Demander un devis</span>
                                <span className="brand-button-icon" aria-hidden="true">
                                    <ArrowUpRight />
                                </span>
                            </Link>
                        </div>

                        <Link href="/articles" className="text-brand-blue mt-10 inline-flex items-center gap-2 font-semibold hover:underline">
                            <ArrowLeft size={16} aria-hidden="true" />
                            Tous les articles
                        </Link>
                    </div>
                </article>

                {related.length > 0 && (
                    <section className="border-t border-gray-100 bg-[#F9F7F3]">
                        <Reveal className="site-container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                            <h2 className="site-heading serif-display text-alidade-navy mb-10 font-bold">À lire aussi</h2>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {related.map((item) => (
                                    <ArticleCard key={item.id} article={item} headingLevel="h3" />
                                ))}
                            </div>
                        </Reveal>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
