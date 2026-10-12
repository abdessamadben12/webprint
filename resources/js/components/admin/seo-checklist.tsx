import { cn } from '@/lib/utils';
import { CheckCircle2, Circle, XCircle } from 'lucide-react';
import { useMemo } from 'react';

export interface SeoInput {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
    hasFeaturedImage: boolean;
    featuredImageAlt: string;
}

interface Check {
    label: string;
    passed: boolean;
    /** Conseil affiche quand le critere n'est pas rempli. */
    tip: string;
}

/** Minuscules sans accents, pour comparer « bâche » et « bache ». */
export function normalize(value: string): string {
    return value
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .trim();
}

function analyze(input: SeoInput): Check[] {
    const doc = new DOMParser().parseFromString(input.content || '', 'text/html');
    const text = (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
    const words = text ? text.split(' ').length : 0;
    const keyword = normalize(input.focusKeyword);
    const has = (value: string) => keyword !== '' && normalize(value).includes(keyword);
    const keywordSlug = keyword.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    const effectiveTitle = input.metaTitle || `${input.title} | webprint.ma`;
    const effectiveDescription = input.metaDescription || input.excerpt;
    const firstParagraph = doc.body.querySelector('p')?.textContent ?? '';
    const images = Array.from(doc.body.querySelectorAll('img'));
    const links = Array.from(doc.body.querySelectorAll('a[href]')).map((link) => link.getAttribute('href') ?? '');
    const internalLinks = links.filter((href) => href.startsWith('/') || href.includes('webprint.ma'));

    return [
        { label: 'Mot-clé principal défini', passed: keyword !== '', tip: 'Choisissez l’expression que les clients tapent dans Google.' },
        { label: 'Mot-clé dans le titre', passed: has(input.title), tip: 'Placez le mot-clé principal dans le titre (H1).' },
        { label: 'Mot-clé dans le meta title', passed: has(effectiveTitle), tip: 'Ajoutez le mot-clé au meta title, idéalement au début.' },
        { label: 'Mot-clé dans la meta description', passed: has(effectiveDescription), tip: 'Reprenez le mot-clé dans la meta description.' },
        { label: 'Mot-clé dans l’URL', passed: keywordSlug !== '' && input.slug.includes(keywordSlug), tip: 'Le slug doit contenir le mot-clé.' },
        { label: 'Mot-clé dans le premier paragraphe', passed: has(firstParagraph), tip: 'Citez le mot-clé dès l’introduction.' },
        {
            label: `Meta title de 30 à 60 caractères (${effectiveTitle.length})`,
            passed: effectiveTitle.length >= 30 && effectiveTitle.length <= 60,
            tip: 'Un titre trop long est coupé par Google, trop court il est peu attractif.',
        },
        {
            label: `Meta description de 120 à 160 caractères (${effectiveDescription.length})`,
            passed: effectiveDescription.length >= 120 && effectiveDescription.length <= 160,
            tip: 'Rédigez une description incitative de 120 à 160 caractères.',
        },
        { label: `Au moins 300 mots (${words})`, passed: words >= 300, tip: 'Un contenu plus complet se positionne mieux.' },
        { label: 'Au moins un sous-titre H2', passed: doc.body.querySelector('h2') !== null, tip: 'Structurez le texte avec des sous-titres H2 et H3.' },
        { label: 'Pas de H1 dans le contenu', passed: doc.body.querySelector('h1') === null, tip: 'Le titre de l’article est déjà le H1 : utilisez H2 dans le contenu.' },
        { label: 'Image principale ajoutée', passed: input.hasFeaturedImage, tip: 'Elle sert aussi d’aperçu sur Facebook, WhatsApp et LinkedIn.' },
        {
            label: 'Texte alternatif de l’image principale',
            passed: !input.hasFeaturedImage || input.featuredImageAlt.trim() !== '',
            tip: 'Décrivez l’image en quelques mots (aide Google Images).',
        },
        {
            label: 'Toutes les images du contenu ont un texte alternatif',
            passed: images.every((image) => (image.getAttribute('alt') ?? '').trim() !== ''),
            tip: 'Cliquez sur une image dans l’éditeur puis sur « Texte alternatif ».',
        },
        { label: 'Au moins un lien interne', passed: internalLinks.length > 0, tip: 'Ajoutez un lien vers un service (ex. /impression-baches) ou un autre article.' },
    ];
}

export default function SeoChecklist({ input }: { input: SeoInput }) {
    const checks = useMemo(() => analyze(input), [input]);
    const passed = checks.filter((check) => check.passed).length;
    const score = Math.round((passed / checks.length) * 100);
    const tone = score >= 80 ? 'emerald' : score >= 50 ? 'amber' : 'red';

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <div
                    className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 text-sm font-bold',
                        tone === 'emerald' && 'border-emerald-500 text-emerald-700',
                        tone === 'amber' && 'border-amber-400 text-amber-700',
                        tone === 'red' && 'border-red-400 text-red-600',
                    )}
                >
                    {score}
                </div>
                <div>
                    <p className="text-sm font-semibold text-neutral-900">Score SEO</p>
                    <p className="text-xs text-neutral-500">
                        {passed}/{checks.length} critères remplis
                    </p>
                </div>
            </div>
            <ul className="flex flex-col gap-2">
                {checks.map((check) => (
                    <li key={check.label} className="flex items-start gap-2 text-xs">
                        {check.passed ? (
                            <CheckCircle2 className="mt-px h-4 w-4 shrink-0 text-emerald-600" />
                        ) : input.focusKeyword || !check.label.startsWith('Mot-clé') ? (
                            <XCircle className="mt-px h-4 w-4 shrink-0 text-red-500" />
                        ) : (
                            <Circle className="mt-px h-4 w-4 shrink-0 text-neutral-300" />
                        )}
                        <span>
                            <span className={check.passed ? 'text-neutral-700' : 'font-medium text-neutral-900'}>{check.label}</span>
                            {!check.passed && <span className="block text-neutral-500">{check.tip}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
