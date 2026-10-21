<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">

        <!-- Google tag (gtag.js) - Google Ads -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11394382189"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11394382189');
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="theme-color" content="#0d1a2d">
        <meta name="color-scheme" content="light">
        <meta name="author" content="webprint.ma">
        <meta name="publisher" content="webprint.ma">
        <meta name="application-name" content="webprint.ma">
        <meta name="format-detection" content="telephone=yes">
        <meta name="referrer" content="strict-origin-when-cross-origin">

        @php($seo = \App\Support\Seo::forRequest(request(), $seo ?? null))
        @if ($seo)
            @php($seoTitle = str_contains($seo['title'], $seo['siteName']) ? $seo['title'] : $seo['title'].' | '.$seo['siteName'])
            <title inertia>{{ $seoTitle }}</title>
            <meta inertia name="description" content="{{ $seo['description'] }}">
            <meta inertia name="keywords" content="{{ $seo['keywords'] }}">
            <meta inertia name="robots" content="{{ $seo['noindex'] ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }}">
            <link inertia rel="canonical" href="{{ $seo['canonical'] }}">
            <meta inertia property="og:locale" content="fr_FR">
            <meta inertia property="og:type" content="{{ $seo['type'] }}">
            <meta inertia property="og:site_name" content="{{ $seo['siteName'] }}">
            <meta inertia property="og:title" content="{{ $seo['title'] }}">
            <meta inertia property="og:description" content="{{ $seo['description'] }}">
            <meta inertia property="og:url" content="{{ $seo['canonical'] }}">
            <meta inertia property="og:image" content="{{ $seo['image'] }}">
            <meta inertia name="twitter:card" content="summary_large_image">
            <meta inertia name="twitter:title" content="{{ $seo['title'] }}">
            <meta inertia name="twitter:description" content="{{ $seo['description'] }}">
            <meta inertia name="twitter:image" content="{{ $seo['image'] }}">
        @else
            <title inertia>{{ config('app.name', 'webprint.ma') }}</title>
        @endif

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">
        <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link rel="manifest" href="/site.webmanifest">

        @routes
        @viteReactRefresh
        @vite('resources/js/app.tsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
