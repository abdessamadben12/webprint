// Verifie que chaque page publique renvoie son contenu dans le HTML initial (rendu serveur).
// Usage : node scripts/check-ssr.mjs [baseUrl]   (defaut : http://127.0.0.1:8000)
// Les URLs viennent de /sitemap.xml ; le script echoue (code 1) si une page est vide
// ou si une balise SEO manque ou est en double.

const base = (process.argv[2] || 'http://127.0.0.1:8000').replace(/\/$/, '');
const siteUrl = 'https://webprint.ma';

const decode = (s) =>
    s.replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');

const count = (html, re) => (html.match(re) || []).length;

async function check(path) {
    const res = await fetch(base + path, { redirect: 'manual' });
    const html = await res.text();

    // Contenu rendu dans <div id="app" data-page="...">...</div>
    const appStart = html.indexOf('<div id="app"');
    const bodyHtml = appStart === -1 ? '' : html.slice(html.indexOf('>', html.indexOf('data-page=', appStart)) + 1, html.lastIndexOf('</body>'));
    const visible = bodyHtml.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ');
    const text = decode(visible.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
    const words = text ? text.split(' ').length : 0;

    const hrefs = [...visible.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => decode(m[1]));
    const internal = new Set(hrefs.filter((h) => h.startsWith('/') || h.startsWith(siteUrl) || h.startsWith(base)));

    const head = html.slice(0, html.indexOf('</head>'));
    const seo = {
        title: count(head, /<title\b/g),
        description: count(head, /<meta[^>]+name="description"/g),
        canonical: count(head, /<link[^>]+rel="canonical"/g),
        'og:title': count(head, /<meta[^>]+property="og:title"/g),
        'og:url': count(head, /<meta[^>]+property="og:url"/g),
    };

    const problems = [];
    if (res.status !== 200) problems.push(`HTTP ${res.status}`);
    if (words < 80) problems.push(`${words} mots`);
    if (count(visible, /<h1\b/g) < 1) problems.push('pas de <h1>');
    if (internal.size < 5) problems.push(`${internal.size} liens internes`);
    for (const [tag, n] of Object.entries(seo)) if (n !== 1) problems.push(`${tag} x${n}`);

    const titleText = decode((head.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || '');
    console.log(`${problems.length ? 'KO' : 'ok'}  ${path.padEnd(48)} ${String(words).padStart(5)} mots  ${String(internal.size).padStart(3)} liens  ${titleText}`);
    if (problems.length) console.log(`      -> ${problems.join(', ')}`);

    return problems.length === 0;
}

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(decode(m[1])).pathname);

let ok = true;
for (const path of paths) ok = (await check(path)) && ok;

console.log(ok ? `\n${paths.length} pages OK` : '\nCertaines pages ne sont pas completes dans le HTML initial.');
process.exit(ok ? 0 : 1);
