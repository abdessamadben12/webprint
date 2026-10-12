import { formatArticleDate, type ArticleSummary } from '@/types/article';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';

export default function ArticleCard({ article, headingLevel = 'h2' }: { article: ArticleSummary; headingLevel?: 'h2' | 'h3' }) {
    const Heading = headingLevel;
    const href = `/articles/${article.slug}`;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link href={href} className="relative block aspect-[16/10] overflow-hidden bg-gray-100" tabIndex={-1} aria-hidden="true">
                {article.featured_image_url ? (
                    <img
                        src={article.featured_image_url}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div className="from-alidade-navy to-brand-blue flex h-full w-full items-center justify-center bg-gradient-to-br">
                        <Newspaper className="h-12 w-12 text-white/60" strokeWidth={1.25} />
                    </div>
                )}
            </Link>

            <div className="flex flex-1 flex-col gap-3 p-6">
                {article.published_at && (
                    <time dateTime={article.published_at} className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={15} className="text-brand-blue" aria-hidden="true" />
                        {formatArticleDate(article.published_at)}
                    </time>
                )}
                <Heading className="text-alidade-navy text-xl leading-snug font-bold sm:text-2xl">
                    <Link href={href} className="group-hover:text-brand-blue transition-colors">
                        {article.title}
                    </Link>
                </Heading>
                {article.excerpt && <p className="line-clamp-3 text-base leading-relaxed text-gray-600">{article.excerpt}</p>}

                <Link
                    href={href}
                    className="text-brand-blue mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold tracking-wider uppercase"
                    aria-label={`Lire l'article : ${article.title}`}
                >
                    Lire l'article
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
}
