import FlashMessage from '@/components/admin/flash-message';
import { services, serviceUrl } from '@/data/services';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Save } from 'lucide-react';
import { type FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Tarifs', href: '/admin/tarifs' },
];

// « type » et non « interface » : useForm d'Inertia exige des donnees indexables.
type PriceRow = {
    amount: string;
    unit: string;
    basis: string;
};

interface TarifsIndexProps {
    prices: Record<string, PriceRow>;
}

const inputClass =
    'w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none aria-[invalid=true]:border-red-500';

export default function AdminTarifsIndex({ prices }: TarifsIndexProps) {
    const { data, setData, put, processing, errors, isDirty } = useForm<{ prices: Record<string, PriceRow> }>({ prices });

    const update = (slug: string, field: keyof PriceRow, value: string) => {
        setData('prices', { ...data.prices, [slug]: { ...data.prices[slug], [field]: value } });
    };

    const submit = (event: FormEvent) => {
        event.preventDefault();
        put('/admin/tarifs', { preserveScroll: true });
    };

    const errorFor = (slug: string, field: keyof PriceRow) => (errors as Record<string, string | undefined>)[`prices.${slug}.${field}`];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tarifs" />
            <form onSubmit={submit} className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6">
                <FlashMessage />

                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6">
                    <div className="flex flex-col justify-between gap-3 border-b border-neutral-300 pb-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="text-lg font-bold tracking-wide text-neutral-900">Tarifs des services</h1>
                            <p className="mt-1 max-w-2xl text-xs text-neutral-500">
                                Le prix « à partir de » s'affiche sur la page du service et dans les résultats Google (prix en MAD). Laissez le
                                prix vide pour un service sur devis.
                            </p>
                        </div>
                        <button
                            type="submit"
                            disabled={processing || !isDirty}
                            className="bg-brand-blue inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Save className="h-4 w-4" />
                            {processing ? 'Enregistrement…' : 'Enregistrer les tarifs'}
                        </button>
                    </div>

                    <datalist id="tarif-units">
                        <option value="m²" />
                        <option value="ml" />
                        <option value="pièce" />
                        <option value="lot" />
                        <option value="100 ex." />
                        <option value="véhicule" />
                        <option value="projet" />
                    </datalist>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full min-w-[820px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-neutral-300 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
                                    <th className="px-4 py-4 font-semibold">Service</th>
                                    <th className="w-40 px-4 py-4 font-semibold">Prix à partir de (DH)</th>
                                    <th className="w-32 px-4 py-4 font-semibold">Unité</th>
                                    <th className="px-4 py-4 font-semibold">Précision affichée</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 text-xs text-neutral-700">
                                {services.map((service) => {
                                    const row = data.prices[service.slug] ?? { amount: '', unit: '', basis: '' };
                                    const fieldError = errorFor(service.slug, 'amount') ?? errorFor(service.slug, 'unit') ?? errorFor(service.slug, 'basis');

                                    return (
                                        <tr key={service.slug} className="align-top">
                                            <td className="px-4 py-4">
                                                <strong className="block text-sm text-neutral-900">{service.title}</strong>
                                                <Link href={serviceUrl(service.slug)} className="text-brand-blue hover:underline">
                                                    {serviceUrl(service.slug)}
                                                </Link>
                                                {fieldError && <p className="mt-1 text-red-600">{fieldError}</p>}
                                            </td>
                                            <td className="px-4 py-4">
                                                <label className="sr-only" htmlFor={`amount-${service.slug}`}>
                                                    Prix de {service.title}
                                                </label>
                                                <input
                                                    id={`amount-${service.slug}`}
                                                    inputMode="decimal"
                                                    placeholder="Sur devis"
                                                    value={row.amount}
                                                    onChange={(event) => update(service.slug, 'amount', event.target.value)}
                                                    aria-invalid={Boolean(errorFor(service.slug, 'amount'))}
                                                    className={inputClass}
                                                />
                                            </td>
                                            <td className="px-4 py-4">
                                                <label className="sr-only" htmlFor={`unit-${service.slug}`}>
                                                    Unité de {service.title}
                                                </label>
                                                <input
                                                    id={`unit-${service.slug}`}
                                                    list="tarif-units"
                                                    maxLength={20}
                                                    placeholder="m²"
                                                    value={row.unit}
                                                    onChange={(event) => update(service.slug, 'unit', event.target.value)}
                                                    aria-invalid={Boolean(errorFor(service.slug, 'unit'))}
                                                    className={inputClass}
                                                />
                                            </td>
                                            <td className="px-4 py-4">
                                                <label className="sr-only" htmlFor={`basis-${service.slug}`}>
                                                    Précision pour {service.title}
                                                </label>
                                                <input
                                                    id={`basis-${service.slug}`}
                                                    maxLength={160}
                                                    placeholder="Ex. : prix au m², hors pose."
                                                    value={row.basis}
                                                    onChange={(event) => update(service.slug, 'basis', event.target.value)}
                                                    aria-invalid={Boolean(errorFor(service.slug, 'basis'))}
                                                    className={inputClass}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </AppLayout>
    );
}
