import ArticleCard from '@/components/articles/article-card';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/navbar';
import SeoHead, { pageSeo } from '@/components/seo-head';
import { paginationLabel, type ArticleSummary, type Paginated } from '@/types/article';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Newspaper } from 'lucide-react';

export default function ArticlesIndex({ articles }: { articles: Paginated<ArticleSummary> }) {
    const page = articles.current_page;

    return (
        <div className="text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]">
            <SeoHead
                {...pageSeo['articles.index']}
                title={page > 1 ? `Articles et conseils impression - page ${page} | webprint.ma` : pageSeo['articles.index'].title}
            />
            <Navbar />

            <main className="flex-grow">
                <section className="relative overflow-hidden bg-[url('/images/backround-print.png')] bg-cover bg-center py-14 text-white sm:py-20">
                    <Stagger className="site-container relative mx-auto space-y-5 px-4 text-center sm:px-6 lg:px-8" amount={0.3}>
                        <StaggerItem>
                            <span className="text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl">Le blog</span>
                        </StaggerItem>
                        <StaggerItem>
                            <h1 className="site-title serif-display font-bold">Articles & conseils</h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="site-text-lead mx-auto max-w-2xl text-white/80">
                                Guides pratiques, tendances et retours d'expérience pour réussir vos supports imprimés et votre communication visuelle.
                            </p>
                        </StaggerItem>
                    </Stagger>
                </section>

                <section className="site-container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                    {articles.data.length > 0 ? (
                        <>
                            <Stagger stagger={0.08} amount={0.05} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {articles.data.map((article) => (
                                    <StaggerItem key={article.id} className="h-full">
                                        <ArticleCard article={article} />
                                    </StaggerItem>
                                ))}
                            </Stagger>

                            {articles.last_page > 1 && (
                                <nav aria-label="Pagination des articles" className="mt-14 flex flex-wrap items-center justify-center gap-2">
                                    {articles.links.map((link, index) =>
                                        link.url ? (
                                            <Link
                                                key={index}
                                                href={link.url}
                                                preserveScroll={false}
                                                aria-current={link.active ? 'page' : undefined}
                                                className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition-colors ${
                                                    link.active
                                                        ? 'border-brand-blue bg-brand-blue text-white'
                                                        : 'hover:border-brand-blue hover:text-brand-blue border-gray-200 bg-white text-gray-600'
                                                }`}
                                            >
                                                {paginationLabel(link.label)}
                                            </Link>
                                        ) : (
                                            <span
                                                key={index}
                                                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-300"
                                            >
                                                {paginationLabel(link.label)}
                                            </span>
                                        ),
                                    )}
                                </nav>
                            )}
                        </>
                    ) : (
                        <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-4 py-16 text-center">
                            <Newspaper className="h-14 w-14 text-gray-300" strokeWidth={1.25} aria-hidden="true" />
                            <h2 className="site-label text-alidade-navy font-bold">Aucun article pour le moment</h2>
                            <p className="site-text-small text-gray-500">Nos premiers articles arrivent bientôt. En attendant, découvrez nos services.</p>
                            <Link href="/services" className="brand-button mt-2">
                                <span className="brand-button-label">Voir nos services</span>
                                <span className="brand-button-icon" aria-hidden="true">
                                    <ArrowUpRight />
                                </span>
                            </Link>
                        </Reveal>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
