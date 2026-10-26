import { jsxs, jsx } from "react/jsx-runtime";
import { formatArticleDate } from "./article-WTwTEEpA.js";
import { Link } from "@inertiajs/react";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
function ArticleCard({ article, headingLevel = "h2" }) {
  const Heading = headingLevel;
  const href = `/articles/${article.slug}`;
  return /* @__PURE__ */ jsxs("article", { className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl", children: [
    /* @__PURE__ */ jsx(Link, { href, className: "relative block aspect-[16/10] overflow-hidden bg-gray-100", tabIndex: -1, "aria-hidden": "true", children: article.featured_image_url ? /* @__PURE__ */ jsx(
      "img",
      {
        src: article.featured_image_url,
        alt: "",
        className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
        loading: "lazy",
        decoding: "async"
      }
    ) : /* @__PURE__ */ jsx("div", { className: "from-alidade-navy to-brand-blue flex h-full w-full items-center justify-center bg-gradient-to-br", children: /* @__PURE__ */ jsx(Newspaper, { className: "h-12 w-12 text-white/60", strokeWidth: 1.25 }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-3 p-6", children: [
      article.published_at && /* @__PURE__ */ jsxs("time", { dateTime: article.published_at, className: "flex items-center gap-2 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx(Calendar, { size: 15, className: "text-brand-blue", "aria-hidden": "true" }),
        formatArticleDate(article.published_at)
      ] }),
      /* @__PURE__ */ jsx(Heading, { className: "text-alidade-navy text-xl leading-snug font-bold sm:text-2xl", children: /* @__PURE__ */ jsx(Link, { href, className: "group-hover:text-brand-blue transition-colors", children: article.title }) }),
      article.excerpt && /* @__PURE__ */ jsx("p", { className: "line-clamp-3 text-base leading-relaxed text-gray-600", children: article.excerpt }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          href,
          className: "text-brand-blue mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold tracking-wider uppercase",
          "aria-label": `Lire l'article : ${article.title}`,
          children: [
            "Lire l'article",
            /* @__PURE__ */ jsx(ArrowRight, { size: 15, className: "transition-transform duration-300 group-hover:translate-x-1", "aria-hidden": "true" })
          ]
        }
      )
    ] })
  ] });
}
export {
  ArticleCard
};
