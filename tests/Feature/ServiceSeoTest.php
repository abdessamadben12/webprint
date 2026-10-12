<?php

use App\Support\ServicePages;
use Inertia\Testing\AssertableInertia as Assert;

test('service pages and their legacy redirects remain accessible', function () {
    foreach (ServicePages::SLUGS as $slug) {
        $this->get('/'.$slug)->assertOk()->assertInertia(fn (Assert $page) => $page
            ->component('services/show')->where('slug', $slug));
        $this->get('/services/'.$slug)->assertStatus(301)->assertRedirect('/'.$slug);
    }
});

test('sitemap exposes existing service images without fabricated modification dates', function () {
    $response = $this->get('/sitemap.xml')->assertOk();
    $xml = simplexml_load_string($response->getContent());
    expect($xml)->not->toBeFalse();
    $xml->registerXPathNamespace('s', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    $xml->registerXPathNamespace('image', 'http://www.google.com/schemas/sitemap-image/1.1');

    foreach (ServicePages::IMAGES as $slug => $image) {
        $nodes = $xml->xpath('//s:url[s:loc="https://webprint.ma/'.$slug.'"]');
        expect($nodes)->toHaveCount(1);
        expect((string) $nodes[0]->children('http://www.google.com/schemas/sitemap-image/1.1')->image->loc)
            ->toBe('https://webprint.ma'.$image);
        expect(isset($nodes[0]->lastmod))->toBeFalse();
        expect(is_file(public_path($image)))->toBeTrue();
        expect(is_file(public_path(str_replace('.webp', '-640.webp', $image))))->toBeTrue();
    }
});
