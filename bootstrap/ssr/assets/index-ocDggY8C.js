import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ArticleCard } from "./article-card-fT3HT1Uq.js";
import { SeoHead, pageSeo, Navbar, Stagger, StaggerItem, Reveal, Footer } from "./seo-head-5-JxKdYM.js";
import { paginationLabel } from "./article-WTwTEEpA.js";
import { Link } from "@inertiajs/react";
import { Newspaper, ArrowUpRight } from "lucide-react";
import "framer-motion";
import "./services-BP0CemjA.js";
import "react";
function ArticlesIndex({ articles }) {
  const page = articles.current_page;
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]", children: [
    /* @__PURE__ */ jsx(
      SeoHead,
      {
        ...pageSeo["articles.index"],
        title: page > 1 ? `Articles et conseils impression - page ${page} | webprint.ma` : pageSeo["articles.index"].title
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-[url('/images/backround-print.png')] bg-cover bg-center py-14 text-white sm:py-20", children: /* @__PURE__ */ jsxs(Stagger, { className: "site-container relative mx-auto space-y-5 px-4 text-center sm:px-6 lg:px-8", amount: 0.3, children: [
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl", children: "Le blog" }) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("h1", { className: "site-title serif-display font-bold", children: "Articles & conseils" }) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("p", { className: "site-text-lead mx-auto max-w-2xl text-white/80", children: "Guides pratiques, tendances et retours d'expérience pour réussir vos supports imprimés et votre communication visuelle." }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "site-container mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8", children: articles.data.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Stagger, { stagger: 0.08, amount: 0.05, className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: articles.data.map((article) => /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx(ArticleCard, { article }) }, article.id)) }),
        articles.last_page > 1 && /* @__PURE__ */ jsx("nav", { "aria-label": "Pagination des articles", className: "mt-14 flex flex-wrap items-center justify-center gap-2", children: articles.links.map(
          (link, index) => link.url ? /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url,
              preserveScroll: false,
              "aria-current": link.active ? "page" : void 0,
              className: `flex min-h-11 min-w-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition-colors ${link.active ? "border-brand-blue bg-brand-blue text-white" : "hover:border-brand-blue hover:text-brand-blue border-gray-200 bg-white text-gray-600"}`,
              children: paginationLabel(link.label)
            },
            index
          ) : /* @__PURE__ */ jsx(
            "span",
            {
              className: "flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-100 px-4 text-sm text-gray-300",
              children: paginationLabel(link.label)
            },
            index
          )
        ) })
      ] }) : /* @__PURE__ */ jsxs(Reveal, { className: "mx-auto flex max-w-lg flex-col items-center gap-4 py-16 text-center", children: [
        /* @__PURE__ */ jsx(Newspaper, { className: "h-14 w-14 text-gray-300", strokeWidth: 1.25, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("h2", { className: "site-label text-alidade-navy font-bold", children: "Aucun article pour le moment" }),
        /* @__PURE__ */ jsx("p", { className: "site-text-small text-gray-500", children: "Nos premiers articles arrivent bientôt. En attendant, découvrez nos services." }),
        /* @__PURE__ */ jsxs(Link, { href: "/services", className: "brand-button mt-2", children: [
          /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Voir nos services" }),
          /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ArticlesIndex as default
};
