import seo from '@/data/seo.json';
import { site } from '@/data/site';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

interface SeoHeadProps {
    title: string;
    description: string;
    keywords: string[];
    image?: string;
    imageAlt?: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
    structuredData?: Record<string, unknown>;
    /** Schemas supplementaires ajoutes au graphe par defaut (Service, BlogPosting, BreadcrumbList...). */
    extraSchema?: Record<string, unknown>[];
    publishedTime?: string;
    modifiedTime?: string;
    /** URL canonique personnalisee (sinon : l'URL de la page). */
    canonical?: string;
}

const siteName = seo.siteName;
const defaultImage = seo.defaultImage;
const defaultKeywords = seo.defaultKeywords;

/** Titre, description et mots-cles d'une page, definis dans data/seo.json (aussi lu par Laravel). */
export const pageSeo = seo.pages;

export function absoluteUrl(path: string, baseUrl: string) {
    return new URL(path.replace(/^\//, ''), baseUrl).toString();
}

function imageMimeType(url: string) {
    const extension = url.split('?')[0].split('.').pop()?.toLowerCase();
    if (extension === 'png') return 'image/png';
    if (extension === 'webp') return 'image/webp';
    if (extension === 'gif') return 'image/gif';
    return 'image/jpeg';
}

function uniqueKeywords(keywords: string[]) {
    return Array.from(new Set([...keywords, ...defaultKeywords])).filter(Boolean);
}

export default function SeoHead({
    title,
    description,
    keywords,
    image = defaultImage,
    imageAlt,
    type = 'website',
    noIndex = false,
    structuredData,
    extraSchema = [],
    publishedTime,
    modifiedTime,
    canonical,
}: SeoHeadProps) {
    const { url } = usePage<SharedData>();
    // Adresse officielle unique (sans www) : evite que www et sans-www soient indexes comme deux sites.
    const baseUrl = `${seo.siteUrl}/`;
    const canonicalUrl = canonical || absoluteUrl(url.split('?')[0], baseUrl);
    const imageUrl = absoluteUrl(image, baseUrl);
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const allKeywords = uniqueKeywords(keywords);
    const schema = structuredData ?? {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${absoluteUrl('/', baseUrl)}#website`,
                name: siteName,
                url: absoluteUrl('/', baseUrl),
                inLanguage: 'fr-MA',
            },
            {
                '@type': 'LocalBusiness',
                '@id': `${absoluteUrl('/', baseUrl)}#business`,
                name: site.name,
                url: absoluteUrl('/', baseUrl),
                image: imageUrl,
                logo: absoluteUrl('/logo.svg', baseUrl),
                telephone: site.phone,
                email: site.email,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: site.address,
                    addressLocality: 'Casablanca',
                    addressCountry: 'MA',
                },
                areaServed: ['Casablanca', 'Maroc'],
                priceRange: '$$',
                sameAs: Object.values(site.socials).filter(Boolean),
            },
            {
                '@type': 'WebPage',
                '@id': `${canonicalUrl}#webpage`,
                name: title,
                description,
                url: canonicalUrl,
                inLanguage: 'fr-MA',
                isPartOf: { '@id': `${absoluteUrl('/', baseUrl)}#website` },
                about: { '@id': `${absoluteUrl('/', baseUrl)}#business` },
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: imageUrl,
                },
            },
            ...extraSchema,
        ],
    };

    return (
        <Head title={title}>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords.join(', ')} />
            <meta name="robots" content={robots} />
            <meta name="author" content={siteName} />
            <meta name="publisher" content={siteName} />
            <meta name="geo.region" content="MA-CAS" />
            <meta name="geo.placename" content="Casablanca" />
            <meta name="language" content="fr-MA" />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content={imageAlt ?? `${siteName} - ${title}`} />
            <meta property="og:image:type" content={imageMimeType(imageUrl)} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@webprint_ma" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={imageAlt ?? `${siteName} - ${title}`} />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Head>
    );
}
