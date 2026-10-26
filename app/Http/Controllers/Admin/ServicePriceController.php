<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServicePrice;
use App\Support\ServicePages;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServicePriceController extends Controller
{
    public function index(): Response
    {
        $prices = ServicePrice::whereIn('slug', ServicePages::SLUGS)->get()->keyBy('slug');

        return Inertia::render('admin/tarifs/index', [
            'prices' => collect(ServicePages::SLUGS)->mapWithKeys(function (string $slug) use ($prices) {
                $price = $prices->get($slug);

                return [$slug => [
                    // « 45 » ou « 12,5 » : format saisi a la main dans le formulaire.
                    'amount' => $price?->amount ? rtrim(rtrim(number_format($price->amount, 2, ',', ''), '0'), ',') : '',
                    'unit' => $price->unit ?? '',
                    'basis' => $price->basis ?? '',
                ]];
            }),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        // Le prix accepte la virgule et les espaces (« 3 200,50 ») ; vide = sur devis.
        $rows = collect($request->input('prices', []))
            ->only(ServicePages::SLUGS)
            ->map(fn ($row) => [
                'amount' => str_replace([' ', "\u{202F}", "\u{00A0}", ','], ['', '', '', '.'], trim((string) ($row['amount'] ?? ''))),
                'unit' => trim((string) ($row['unit'] ?? '')),
                'basis' => trim((string) ($row['basis'] ?? '')),
            ]);

        validator(['prices' => $rows->all()], [
            'prices.*.amount' => 'nullable|numeric|gt:0|max:1000000',
            'prices.*.unit' => 'nullable|string|max:20',
            'prices.*.basis' => 'nullable|string|max:160',
        ], [
            'prices.*.amount.numeric' => 'Indiquez un prix valide (nombre supérieur à 0) ou laissez vide.',
            'prices.*.amount.gt' => 'Indiquez un prix valide (nombre supérieur à 0) ou laissez vide.',
            'prices.*.amount.max' => 'Le prix ne peut pas dépasser 1 000 000 DH.',
            'prices.*.unit.max' => "L'unité doit faire 20 caractères au maximum.",
            'prices.*.basis.max' => 'La précision doit faire 160 caractères au maximum.',
        ])->validate();

        foreach ($rows as $slug => $row) {
            ServicePrice::updateOrCreate(['slug' => $slug], [
                'amount' => $row['amount'] === '' ? null : round((float) $row['amount'], 2),
                'unit' => $row['unit'] ?: null,
                'basis' => $row['basis'] ?: null,
            ]);
        }

        return redirect()->route('admin.tarifs.index')->with('success', 'Les tarifs ont été enregistrés. Ils sont visibles sur le site.');
    }
}
