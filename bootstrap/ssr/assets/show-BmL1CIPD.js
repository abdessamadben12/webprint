import { jsxs, jsx } from "react/jsx-runtime";
import { ArticleCard } from "./article-card-fT3HT1Uq.js";
import { absoluteUrl, SeoHead, Navbar, Reveal, Footer } from "./seo-head-5-JxKdYM.js";
import { formatArticleDate } from "./article-WTwTEEpA.js";
import { usePage, Link } from "@inertiajs/react";
import { EyeOff, Pencil, ChevronRight, Calendar, ArrowUpRight, ArrowLeft } from "lucide-react";
import "framer-motion";
import "./services-BP0CemjA.js";
import "react";
function plainText(html) {
  return (html ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function ArticleShow({ article, related, isPreview }) {
  const { appUrl } = usePage().props;
  const baseUrl = appUrl.endsWith("/") ? appUrl : `${appUrl}/`;
  const pageUrl = absoluteUrl(`/articles/${article.slug}`, baseUrl);
  const text = plainText(article.content);
  const description = article.meta_description || article.excerpt || text.slice(0, 160);
  const readingMinutes = Math.max(1, Math.round(text.split(" ").length / 200));
  const image = article.featured_image_url ?? void 0;
  const imageAlt = article.featured_image_alt || article.title;
  const keywords = [article.focus_keyword, ...(article.meta_keywords ?? "").split(",")].map((keyword) => (keyword == null ? void 0 : keyword.trim()) ?? "").filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]", children: [
    /* @__PURE__ */ jsx(
      SeoHead,
      {
        title: article.meta_title || `${article.title} | webprint.ma`,
        description,
        keywords,
        image,
        type: "article",
        noIndex: isPreview || article.noindex,
        canonical: article.canonical_url ?? void 0,
        publishedTime: article.published_at ?? void 0,
        modifiedTime: article.updated_at,
        extraSchema: [
          {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#article`,
            headline: article.title,
            description,
            url: pageUrl,
            mainEntityOfPage: pageUrl,
            ...keywords.length ? { keywords: keywords.join(", ") } : {},
            inLanguage: "fr-MA",
            ...image ? { image: absoluteUrl(image, baseUrl) } : {},
            datePublished: article.published_at,
            dateModified: article.updated_at,
            author: { "@type": "Organization", name: "webprint.ma", url: absoluteUrl("/", baseUrl) },
            publisher: { "@id": `${absoluteUrl("/", baseUrl)}#business` },
            wordCount: text ? text.split(" ").length : 0
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/", baseUrl) },
              { "@type": "ListItem", position: 2, name: "Articles", item: absoluteUrl("/articles", baseUrl) },
              { "@type": "ListItem", position: 3, name: article.title, item: pageUrl }
            ]
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    isPreview && /* @__PURE__ */ jsx("div", { className: "border-b border-amber-200 bg-amber-50 px-4 py-3 text-amber-900", children: /* @__PURE__ */ jsxs("div", { className: "site-container mx-auto flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-sm font-semibold", children: [
        /* @__PURE__ */ jsx(EyeOff, { size: 16, "aria-hidden": "true" }),
        "Aperçu administrateur : cet article n'est pas visible par le public."
      ] }),
      /* @__PURE__ */ jsxs(Link, { href: `/admin/articles/${article.id}/edit`, className: "inline-flex items-center gap-1.5 text-sm font-semibold underline", children: [
        /* @__PURE__ */ jsx(Pencil, { size: 14, "aria-hidden": "true" }),
        "Modifier l'article"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsxs("header", { className: "mx-auto max-w-4xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8", children: [
          /* @__PURE__ */ jsx("nav", { "aria-label": "Fil d'Ariane", className: "mb-6", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-brand-blue", children: "Accueil" }) }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 14, "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/articles", className: "hover:text-brand-blue", children: "Articles" }) }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 14, "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("li", { "aria-current": "page", className: "line-clamp-1 text-gray-700", children: article.title })
          ] }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-alidade-navy text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl", children: article.title }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500", children: [
            article.published_at && /* @__PURE__ */ jsxs("time", { dateTime: article.published_at, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 16, className: "text-brand-blue", "aria-hidden": "true" }),
              "Publié le ",
              formatArticleDate(article.published_at)
            ] }),
            /* @__PURE__ */ jsxs("span", { children: [
              readingMinutes,
              " min de lecture"
            ] })
          ] }),
          article.excerpt && /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl", children: article.excerpt })
        ] }),
        image && /* @__PURE__ */ jsx("div", { className: "mx-auto mt-8 max-w-5xl px-4 sm:mt-10 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: imageAlt,
            className: "aspect-[16/9] w-full rounded-2xl object-cover shadow-lg",
            loading: "eager",
            fetchPriority: "high",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8", children: [
          /* @__PURE__ */ jsx("div", { className: "article-content", dangerouslySetInnerHTML: { __html: article.content ?? "" } }),
          /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-alidade-navy p-8 text-white sm:flex-row sm:items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-alidade-gold text-sm font-bold tracking-[0.2em] uppercase", children: "Un projet d'impression ?" }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-xl font-bold", children: "Notre équipe vous répond sous 24 h." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { href: "/devis", className: "brand-button shrink-0", children: [
              /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander un devis" }),
              /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Link, { href: "/articles", className: "text-brand-blue mt-10 inline-flex items-center gap-2 font-semibold hover:underline", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 16, "aria-hidden": "true" }),
            "Tous les articles"
          ] })
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsx("section", { className: "border-t border-gray-100 bg-[#F9F7F3]", children: /* @__PURE__ */ jsxs(Reveal, { className: "site-container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy mb-10 font-bold", children: "À lire aussi" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: related.map((item) => /* @__PURE__ */ jsx(ArticleCard, { article: item, headingLevel: "h3" }, item.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ArticleShow as default
};
