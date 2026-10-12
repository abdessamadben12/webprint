import FlashMessage from '@/components/admin/flash-message';
import KeywordsInput from '@/components/admin/keywords-input';
import RichTextEditor from '@/components/admin/rich-text-editor';
import SeoChecklist from '@/components/admin/seo-checklist';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { type Article, type ArticleStatus } from '@/types/article';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft, ChevronDown, ExternalLink, ImagePlus, Loader2, RefreshCw, Save, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';

type ArticleFormData = {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    status: ArticleStatus;
    published_at: string;
    meta_title: string;
    meta_description: string;
    focus_keyword: string;
    meta_keywords: string;
    featured_image_alt: string;
    canonical_url: string;
    noindex: boolean;
    featured_image: File | null;
    remove_featured_image: boolean;
};

function slugify(value: string): string {
    return value
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/['’]/g, '-')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 180);
}

/** ISO (UTC) -> valeur d'un champ datetime-local dans le fuseau du navigateur. */
function toLocalInput(iso: string | null): string {
    if (!iso) return '';
    const date = new Date(iso);
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

const inputClass =
    'w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 focus:outline-none';

export default function ArticleFormPage({ article }: { article: Article | null }) {
    // Nouvelle instance du formulaire quand on passe de la creation a l'edition.
    return <ArticleForm key={article?.id ?? 'new'} article={article} />;
}

function ArticleForm({ article }: { article: Article | null }) {
    const isEdit = article !== null;
    const [slugTouched, setSlugTouched] = useState(isEdit);
    const [previewUrl, setPreviewUrl] = useState<string | null>(article?.featured_image_url ?? null);
    const [advancedOpen, setAdvancedOpen] = useState(Boolean(article?.canonical_url || article?.noindex));

    const { data, setData, setDefaults, post, processing, errors, transform, isDirty } = useForm<ArticleFormData>({
        title: article?.title ?? '',
        slug: article?.slug ?? '',
        excerpt: article?.excerpt ?? '',
        content: article?.content ?? '',
        status: article?.status ?? 'draft',
        published_at: toLocalInput(article?.published_at ?? null),
        meta_title: article?.meta_title ?? '',
        meta_description: article?.meta_description ?? '',
        focus_keyword: article?.focus_keyword ?? '',
        meta_keywords: article?.meta_keywords ?? '',
        featured_image_alt: article?.featured_image_alt ?? '',
        canonical_url: article?.canonical_url ?? '',
        noindex: article?.noindex ?? false,
        featured_image: null,
        remove_featured_image: false,
    });

    // Apres enregistrement : reprendre les valeurs calculees par le serveur (slug unique, date de publication, image).
    useEffect(() => {
        if (!article) return;
        const synced = {
            ...data,
            slug: article.slug,
            status: article.status,
            published_at: toLocalInput(article.published_at),
            meta_keywords: article.meta_keywords ?? '',
            featured_image: null,
            remove_featured_image: false,
        };
        setData(synced);
        setDefaults(synced);
        setPreviewUrl(article.featured_image_url ?? null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article?.updated_at]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Articles', href: '/admin/articles' },
        { title: isEdit ? 'Modifier' : 'Nouvel article', href: isEdit ? `/admin/articles/${article.id}/edit` : '/admin/articles/create' },
    ];

    const submit = (status: ArticleStatus) => (event?: FormEvent) => {
        event?.preventDefault();
        transform((current) => ({
            ...current,
            status,
            noindex: current.noindex ? 1 : 0,
            published_at: current.published_at ? new Date(current.published_at).toISOString() : '',
            ...(isEdit ? { _method: 'put' } : {}),
        }));
        post(isEdit ? `/admin/articles/${article.id}` : '/admin/articles', { forceFormData: true, preserveScroll: true });
    };

    const onTitleChange = (title: string) => {
        setData((current) => ({ ...current, title, slug: slugTouched ? current.slug : slugify(title) }));
    };

    const onImageChange = (file: File | null) => {
        setData((current) => ({ ...current, featured_image: file, remove_featured_image: false }));
        setPreviewUrl(file ? URL.createObjectURL(file) : (article?.featured_image_url ?? null));
    };

    const removeImage = () => {
        setData((current) => ({ ...current, featured_image: null, remove_featured_image: true }));
        setPreviewUrl(null);
    };

    const deleteArticle = () => {
        if (article && confirm(`Supprimer définitivement l'article « ${article.title} » ?`)) {
            router.delete(`/admin/articles/${article.id}`);
        }
    };

    const seoTitle = data.meta_title || `${data.title || "Titre de l'article"} | webprint.ma`;
    const seoDescription = data.meta_description || data.excerpt || 'La meta description apparaît ici. Rédigez 120 à 160 caractères.';
    const publicPath = `/articles/${data.slug || slugify(data.title) || 'nom-de-l-article'}`;
    const isPublished = article?.status === 'published';
    const scheduled = useMemo(() => data.published_at !== '' && new Date(data.published_at) > new Date(), [data.published_at]);

    const seoInput = useMemo(
        () => ({
            title: data.title,
            slug: data.slug || slugify(data.title),
            excerpt: data.excerpt,
            content: data.content,
            metaTitle: data.meta_title,
            metaDescription: data.meta_description,
            focusKeyword: data.focus_keyword,
            hasFeaturedImage: previewUrl !== null,
            featuredImageAlt: data.featured_image_alt,
        }),
        [data.title, data.slug, data.excerpt, data.content, data.meta_title, data.meta_description, data.focus_keyword, data.featured_image_alt, previewUrl],
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEdit ? `Modifier : ${article.title}` : 'Nouvel article'} />
            <form onSubmit={submit(data.status)} className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/articles"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Retour
                        </Link>
                        <h1 className="text-lg font-bold tracking-wide">{isEdit ? "Modifier l'article" : 'Nouvel article'}</h1>
                        {isEdit && (
                            <span
                                className={cn(
                                    'rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase',
                                    isPublished ? 'bg-emerald-50 text-emerald-700' : 'bg-neutral-200 text-neutral-700',
                                )}
                            >
                                {isPublished ? 'Publié' : 'Brouillon'}
                            </span>
                        )}
                    </div>
                    {isEdit && (
                        <a
                            href={`/articles/${article.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:border-brand-blue hover:text-brand-blue inline-flex items-center gap-1.5 self-start rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 transition-colors sm:self-auto"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            {isPublished ? "Voir l'article" : 'Prévisualiser'}
                        </a>
                    )}
                </div>

                <FlashMessage />

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
                    {/* Colonne principale */}
                    <div className="flex min-w-0 flex-col gap-6">
                        <Panel>
                            <Field label="Titre" htmlFor="title" error={errors.title} required>
                                <input
                                    id="title"
                                    value={data.title}
                                    onChange={(event) => onTitleChange(event.target.value)}
                                    className={cn(inputClass, 'text-base font-semibold')}
                                    placeholder="Ex. Comment choisir le bon support pour votre bâche publicitaire"
                                    maxLength={255}
                                    required
                                />
                            </Field>

                            <Field label="Slug (URL)" htmlFor="slug" error={errors.slug} hint={`webprint.ma${publicPath}`}>
                                <div className="flex gap-2">
                                    <input
                                        id="slug"
                                        value={data.slug}
                                        onChange={(event) => {
                                            setSlugTouched(true);
                                            setData('slug', slugify(event.target.value.replace(/\s/g, '-')) + (event.target.value.endsWith('-') ? '-' : ''));
                                        }}
                                        onBlur={() => setData('slug', slugify(data.slug))}
                                        className={inputClass}
                                        placeholder="genere-automatiquement-depuis-le-titre"
                                    />
                                    <button
                                        type="button"
                                        title="Régénérer depuis le titre"
                                        onClick={() => {
                                            setSlugTouched(false);
                                            setData('slug', slugify(data.title));
                                        }}
                                        className="hover:border-brand-blue hover:text-brand-blue inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 text-xs text-neutral-700"
                                    >
                                        <RefreshCw className="h-3.5 w-3.5" />
                                        <span className="hidden sm:inline">Régénérer</span>
                                    </button>
                                </div>
                            </Field>

                            <Field label="Résumé" htmlFor="excerpt" error={errors.excerpt} hint={`${data.excerpt.length}/500 - affiché sur la carte de l'article et en introduction.`}>
                                <textarea
                                    id="excerpt"
                                    value={data.excerpt}
                                    onChange={(event) => setData('excerpt', event.target.value)}
                                    rows={3}
                                    maxLength={500}
                                    className={inputClass}
                                    placeholder="Deux ou trois phrases qui donnent envie de lire l'article."
                                />
                            </Field>
                        </Panel>

                        <div className="flex flex-col gap-2">
                            <span className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">Contenu</span>
                            <RichTextEditor
                                value={data.content}
                                onChange={(html) => setData('content', html)}
                                uploadUrl="/admin/articles/upload-image"
                                placeholder="Commencez à rédiger votre article..."
                                invalid={Boolean(errors.content)}
                            />
                            <InputError message={errors.content} />
                        </div>

                        <Panel title="Référencement (SEO)">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                <Field
                                    label="Mot-clé principal"
                                    htmlFor="focus_keyword"
                                    error={errors.focus_keyword}
                                    hint="L'expression principale visée sur Google (ex. bâche publicitaire Casablanca)."
                                >
                                    <input
                                        id="focus_keyword"
                                        value={data.focus_keyword}
                                        onChange={(event) => setData('focus_keyword', event.target.value)}
                                        className={inputClass}
                                        maxLength={100}
                                        placeholder="Ex. bâche publicitaire"
                                    />
                                </Field>
                                <Field
                                    label="Mots-clés secondaires"
                                    htmlFor="meta_keywords"
                                    error={errors.meta_keywords}
                                    hint="Entrée ou virgule pour ajouter. 15 maximum : synonymes, villes, variantes."
                                >
                                    <KeywordsInput id="meta_keywords" value={data.meta_keywords} onChange={(value) => setData('meta_keywords', value)} />
                                </Field>
                            </div>

                            <Field
                                label="Meta title"
                                htmlFor="meta_title"
                                error={errors.meta_title}
                                hint={<Counter value={data.meta_title.length} min={30} ideal={60} fallback="Vide = titre de l'article + « | webprint.ma »" />}
                            >
                                <input
                                    id="meta_title"
                                    value={data.meta_title}
                                    onChange={(event) => setData('meta_title', event.target.value)}
                                    className={inputClass}
                                    maxLength={255}
                                    placeholder={`${data.title || "Titre de l'article"} | webprint.ma`}
                                />
                            </Field>
                            <Field
                                label="Meta description"
                                htmlFor="meta_description"
                                error={errors.meta_description}
                                hint={<Counter value={data.meta_description.length} min={120} ideal={160} fallback="Vide = résumé de l'article" />}
                            >
                                <textarea
                                    id="meta_description"
                                    value={data.meta_description}
                                    onChange={(event) => setData('meta_description', event.target.value)}
                                    rows={3}
                                    maxLength={500}
                                    className={inputClass}
                                    placeholder="Résumé incitatif affiché sous le titre dans les résultats Google."
                                />
                            </Field>

                            <div className="rounded-lg border border-neutral-200 bg-white p-4 text-left">
                                <p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">Aperçu Google</p>
                                <p className="mt-2 truncate text-xs text-neutral-600">webprint.ma › articles › {data.slug || '...'}</p>
                                <p className="mt-0.5 line-clamp-1 text-lg text-[#1a0dab]">{seoTitle}</p>
                                <p className="mt-0.5 line-clamp-2 text-sm text-neutral-600">{seoDescription}</p>
                            </div>

                            <div className="border-t border-neutral-200 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setAdvancedOpen((open) => !open)}
                                    aria-expanded={advancedOpen}
                                    className="flex w-full items-center justify-between text-xs font-semibold tracking-wider text-neutral-600 uppercase"
                                >
                                    Options avancées
                                    <ChevronDown className={cn('h-4 w-4 transition-transform', advancedOpen && 'rotate-180')} />
                                </button>
                                {advancedOpen && (
                                    <div className="mt-4 flex flex-col gap-4">
                                        <Field
                                            label="URL canonique"
                                            htmlFor="canonical_url"
                                            error={errors.canonical_url}
                                            hint="À remplir uniquement si cet article reprend un contenu publié ailleurs. Vide = URL de l'article."
                                        >
                                            <input
                                                id="canonical_url"
                                                type="url"
                                                value={data.canonical_url}
                                                onChange={(event) => setData('canonical_url', event.target.value)}
                                                className={inputClass}
                                                placeholder="https://..."
                                            />
                                        </Field>
                                        <label className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                                            <input
                                                type="checkbox"
                                                checked={data.noindex}
                                                onChange={(event) => setData('noindex', event.target.checked)}
                                                className="accent-brand-blue mt-0.5 h-4 w-4"
                                            />
                                            <span className="text-sm">
                                                <span className="font-semibold text-neutral-900">Ne pas indexer dans Google (noindex)</span>
                                                <span className="block text-xs text-neutral-500">
                                                    L'article reste visible sur le site mais n'apparaît ni dans Google ni dans le sitemap.
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </Panel>
                    </div>

                    {/* Colonne laterale */}
                    <div className="flex flex-col gap-6">
                        <Panel title="Publication">
                            <Field label="Statut" htmlFor="status">
                                <select
                                    id="status"
                                    value={data.status}
                                    onChange={(event) => setData('status', event.target.value as ArticleStatus)}
                                    className={inputClass}
                                >
                                    <option value="draft">Brouillon (non visible)</option>
                                    <option value="published">Publié</option>
                                </select>
                            </Field>
                            <Field
                                label="Date de publication"
                                htmlFor="published_at"
                                error={errors.published_at}
                                hint={
                                    scheduled
                                        ? "Date future : l'article sera visible à partir de cette date."
                                        : 'Laisser vide pour utiliser la date de publication effective.'
                                }
                            >
                                <input
                                    id="published_at"
                                    type="datetime-local"
                                    value={data.published_at}
                                    onChange={(event) => setData('published_at', event.target.value)}
                                    className={inputClass}
                                />
                            </Field>

                            <div className="flex flex-col gap-2 border-t border-neutral-200 pt-4">
                                <button
                                    type="button"
                                    onClick={submit('published')}
                                    disabled={processing}
                                    className="bg-brand-blue inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af] disabled:opacity-60"
                                >
                                    {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                                    {isPublished ? 'Mettre à jour' : 'Publier'}
                                </button>
                                <button
                                    type="button"
                                    onClick={submit('draft')}
                                    disabled={processing}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-400 disabled:opacity-60"
                                >
                                    {isPublished ? 'Dépublier (brouillon)' : 'Enregistrer le brouillon'}
                                </button>
                                {isDirty && <p className="text-center text-[11px] text-amber-600">Modifications non enregistrées</p>}
                            </div>
                        </Panel>

                        <Panel title="Image principale">
                            {previewUrl ? (
                                <div className="relative overflow-hidden rounded-lg">
                                    <img src={previewUrl} alt={data.featured_image_alt || "Aperçu de l'image principale"} className="aspect-[16/10] w-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[11px] font-semibold text-red-600 shadow-sm hover:text-red-700"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                        Retirer
                                    </button>
                                </div>
                            ) : null}
                            <label
                                className={cn(
                                    'hover:border-brand-blue hover:text-brand-blue flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-white px-4 text-center text-xs text-neutral-500 transition-colors',
                                    previewUrl ? 'py-3' : 'py-10',
                                )}
                            >
                                <ImagePlus className="h-5 w-5" />
                                {previewUrl ? "Remplacer l'image" : 'Choisir une image (JPG, PNG, WebP - 5 Mo max)'}
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    className="hidden"
                                    onChange={(event) => onImageChange(event.target.files?.[0] ?? null)}
                                />
                            </label>
                            <InputError message={errors.featured_image} />
                            <Field
                                label="Texte alternatif (alt)"
                                htmlFor="featured_image_alt"
                                error={errors.featured_image_alt}
                                hint="Décrivez l'image pour Google Images et l'accessibilité."
                            >
                                <input
                                    id="featured_image_alt"
                                    value={data.featured_image_alt}
                                    onChange={(event) => setData('featured_image_alt', event.target.value)}
                                    className={inputClass}
                                    maxLength={255}
                                    placeholder="Ex. Bâche publicitaire imprimée pour un magasin à Casablanca"
                                />
                            </Field>
                            <p className="text-[11px] text-neutral-500">Format conseillé : 1600 × 900 px. Utilisée sur la carte, en haut de l'article et pour le partage sur les réseaux.</p>
                        </Panel>

                        <Panel title="Analyse SEO">
                            <SeoChecklist input={seoInput} />
                        </Panel>

                        {isEdit && (
                            <button
                                type="button"
                                onClick={deleteArticle}
                                className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm text-red-600 transition-colors hover:border-red-400 hover:text-red-700"
                            >
                                <Trash2 className="h-4 w-4" />
                                Supprimer l'article
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </AppLayout>
    );
}

function Panel({ title, children }: { title?: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
            {title && <h2 className="text-xs font-bold tracking-[0.15em] text-neutral-700 uppercase">{title}</h2>}
            {children}
        </section>
    );
}

function Field({
    label,
    htmlFor,
    error,
    hint,
    required,
    children,
}: {
    label: string;
    htmlFor: string;
    error?: string;
    hint?: ReactNode;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={htmlFor} className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                {label}
                {required && <span className="text-brand-blue"> *</span>}
            </label>
            {children}
            {hint && <div className="text-[11px] text-neutral-500">{hint}</div>}
            <InputError message={error} />
        </div>
    );
}

function Counter({ value, min, ideal, fallback }: { value: number; min: number; ideal: number; fallback: string }) {
    if (value === 0) return <span>{fallback}</span>;
    const tooLong = value > ideal;
    const tooShort = value < min;
    return (
        <span className={tooLong || tooShort ? 'text-amber-600' : 'text-emerald-600'}>
            {value}/{ideal} caractères
            {tooLong ? ' - risque d’être tronqué par Google' : tooShort ? ` - visez au moins ${min}` : ' - longueur idéale'}
        </span>
    );
}
