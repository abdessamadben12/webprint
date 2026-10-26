<?php

use App\Models\ServicePrice;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('service pages receive their starting price, or null when on quote', function () {
    $this->get('/impression-baches')->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('services/show')
        ->where('price.amount', 35)
        ->where('price.unit', 'm²')
        ->where('price.label', 'À partir de 35 DH / m²'));

    $this->get('/habillage-vehicule')->assertInertia(fn (Assert $page) => $page
        ->where('price.label', "À partir de 3\u{202F}200 DH / véhicule"));

    $this->get('/design-graphique')->assertInertia(fn (Assert $page) => $page->where('price', null));
});

test('guests cannot open the price admin', function () {
    $this->get('/admin/tarifs')->assertRedirect('/login');
    $this->put('/admin/tarifs', ['prices' => []])->assertRedirect('/login');
});

test('an admin can update prices and clear one to switch it to quote', function () {
    $this->actingAs(User::factory()->create());

    $this->get('/admin/tarifs')->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('admin/tarifs/index')
        ->where('prices.impression-baches.amount', '35'));

    $this->put('/admin/tarifs', ['prices' => [
        'impression-baches' => ['amount' => '1 250,5', 'unit' => 'm²', 'basis' => 'Bâche 510 g.'],
        'impression-vinyle' => ['amount' => '', 'unit' => 'm²', 'basis' => ''],
    ]])->assertRedirect('/admin/tarifs');

    expect(ServicePrice::where('slug', 'impression-baches')->first())
        ->amount->toBe(1250.5)
        ->basis->toBe('Bâche 510 g.');
    expect(ServicePrice::publicFor('impression-baches')['label'])->toBe("À partir de 1\u{202F}250,50 DH / m²");
    expect(ServicePrice::publicFor('impression-vinyle'))->toBeNull();
});

test('invalid prices are rejected', function () {
    $this->actingAs(User::factory()->create());

    $this->put('/admin/tarifs', ['prices' => ['impression-baches' => ['amount' => 'abc']]])
        ->assertSessionHasErrors('prices.impression-baches.amount');
    $this->put('/admin/tarifs', ['prices' => ['impression-baches' => ['amount' => '-5']]])
        ->assertSessionHasErrors('prices.impression-baches.amount');

    expect(ServicePrice::publicFor('impression-baches')['amount'])->toBe(35.0);
});

test('the public price page lists every service price', function () {
    $this->get('/tarifs')->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('tarifs')
        ->where('prices.impression-baches.label', 'À partir de 35 DH / m²')
        ->where('prices.design-graphique', null));
});

test('llms.txt exposes the current prices to AI assistants', function () {
    ServicePrice::where('slug', 'impression-baches')->update(['amount' => 29]);

    $this->get('/llms.txt')
        ->assertOk()
        ->assertHeader('Content-Type', 'text/plain; charset=UTF-8')
        ->assertSee('[Impression de bâches](https://webprint.ma/impression-baches) : À partir de 29 DH / m²', false)
        ->assertSee('[Design graphique](https://webprint.ma/design-graphique) : Sur devis', false);
});
