<?php

namespace App\Models;

use App\Support\ServicePages;
use Illuminate\Database\Eloquent\Model;

/**
 * Prix « à partir de » d'une page service (meme slug que App\Support\ServicePages).
 * Sans montant, le service est affiche « sur devis ».
 */
class ServicePrice extends Model
{
    protected $fillable = ['slug', 'amount', 'unit', 'basis'];

    protected function casts(): array
    {
        return ['amount' => 'float'];
    }

    /**
     * Tarifs publies de tous les services, dans l'ordre des pages (null = sur devis).
     *
     * @return array<string, array{amount: float, unit: string, basis: string, label: string}|null>
     */
    public static function allPublic(): array
    {
        $prices = static::whereIn('slug', ServicePages::SLUGS)->get()->keyBy('slug');

        return collect(ServicePages::SLUGS)
            ->mapWithKeys(fn (string $slug) => [$slug => static::present($prices->get($slug))])
            ->all();
    }

    /**
     * Tarif publie d'un service, pret pour l'affichage, ou null s'il est sur devis.
     *
     * @return array{amount: float, unit: string, basis: string, label: string}|null
     */
    public static function publicFor(string $slug): ?array
    {
        return static::present(static::where('slug', $slug)->first());
    }

    /** @return array{amount: float, unit: string, basis: string, label: string}|null */
    private static function present(?self $price): ?array
    {
        if (! $price || ! $price->amount || $price->amount <= 0) {
            return null;
        }

        $decimals = fmod($price->amount, 1.0) === 0.0 ? 0 : 2;
        $unit = trim((string) $price->unit);

        return [
            'amount' => $price->amount,
            'unit' => $unit,
            'basis' => trim((string) $price->basis),
            // Espace insecable entre les milliers : « 3 200 DH ».
            'label' => 'À partir de '.number_format($price->amount, $decimals, ',', "\u{202F}").' DH'.($unit !== '' ? ' / '.$unit : ''),
        ];
    }
}
