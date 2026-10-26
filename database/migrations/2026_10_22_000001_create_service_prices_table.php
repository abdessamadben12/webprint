<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Prix « à partir de » des pages services, modifiables dans l'admin (/admin/tarifs).
        // Un service sans montant reste « sur devis ».
        Schema::create('service_prices', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 80)->unique();
            $table->decimal('amount', 10, 2)->nullable();
            $table->string('unit', 20)->nullable();
            $table->string('basis', 160)->nullable();
            $table->timestamps();
        });

        // Tarifs de depart, repris d'imprimerie.casa.
        $now = now();
        DB::table('service_prices')->insert(array_map(fn (array $row) => [...$row, 'created_at' => $now, 'updated_at' => $now], [
            ['slug' => 'impression-numerique', 'amount' => 239, 'unit' => 'lot', 'basis' => '1 000 cartes de visite imprimées recto.'],
            ['slug' => 'impression-grand-format', 'amount' => 45, 'unit' => 'm²', 'basis' => 'Affiche ou panneau imprimé, hors pose.'],
            ['slug' => 'industrie-publicitaire', 'amount' => 390, 'unit' => 'pièce', 'basis' => 'Roll-up 85 × 200 cm imprimé.'],
            ['slug' => 'habillage-vehicule', 'amount' => 3200, 'unit' => 'véhicule', 'basis' => 'Habillage partiel de véhicule.'],
            ['slug' => 'balisage-chantier', 'amount' => 45, 'unit' => 'm²', 'basis' => 'Bâche PVC 440 g pour palissade, avec œillets et renforts, hors pose.'],
            ['slug' => 'impression-vinyle', 'amount' => 39, 'unit' => 'm²', 'basis' => 'Prix au m² de vinyle adhésif imprimé, hors pose.'],
            ['slug' => 'design-graphique', 'amount' => null, 'unit' => null, 'basis' => null],
            ['slug' => 'impression-baches', 'amount' => 35, 'unit' => 'm²', 'basis' => 'Prix au m² de bâche imprimée, hors pose.'],
            ['slug' => 'impression-vitrine', 'amount' => 58, 'unit' => 'm²', 'basis' => 'Vinyle adhésif imprimé pour vitrine, hors pose.'],
        ]));
    }

    public function down(): void
    {
        Schema::dropIfExists('service_prices');
    }
};
