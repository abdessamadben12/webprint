import { jsxs, jsx } from "react/jsx-runtime";
import { FlashMessage } from "./flash-message-CailxFxt.js";
import { AppLayout } from "./app-layout-C3STRvhP.js";
import { formatArticleDate, paginationLabel } from "./article-WTwTEEpA.js";
import { Head, Link, router } from "@inertiajs/react";
import { Newspaper, Send, FileText, Plus, Search, X, ImageOff, Pencil, Eye, EyeOff, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "./button-BKLYmSbv.js";
import "clsx";
import "tailwind-merge";
import "./input-DbNPaXod.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
const breadcrumbs = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Articles", href: "/admin/articles" }
];
function isScheduled(article) {
  return article.status === "published" && article.published_at !== null && new Date(article.published_at) > /* @__PURE__ */ new Date();
}
function AdminArticlesIndex({ articles, filters, counts }) {
  const [search, setSearch] = useState(filters.search);
  const applyFilters = (next) => {
    const merged = { ...filters, ...next };
    const params = Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== ""));
    router.get("/admin/articles", params, { preserveState: true, preserveScroll: true, replace: true });
  };
  useEffect(() => {
    if (search === filters.search) return;
    const timer = setTimeout(() => applyFilters({ search }), 350);
    return () => clearTimeout(timer);
  }, [search]);
  const toggleStatus = (article) => {
    router.patch(`/admin/articles/${article.id}/toggle-status`, {}, { preserveScroll: true });
  };
  const deleteArticle = (article) => {
    if (confirm(`Supprimer définitivement l'article « ${article.title} » ?`)) {
      router.delete(`/admin/articles/${article.id}`, { preserveScroll: true });
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Articles" }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6", children: [
      /* @__PURE__ */ jsx(FlashMessage, {}),
      /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-4 sm:grid-cols-3 sm:gap-6", children: [
        /* @__PURE__ */ jsx(StatCard, { label: "Articles", value: counts.total, icon: /* @__PURE__ */ jsx(Newspaper, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx(StatCard, { label: "Publiés", value: counts.published, icon: /* @__PURE__ */ jsx(Send, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx(StatCard, { label: "Brouillons", value: counts.draft, icon: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex min-h-[50vh] flex-1 flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3 border-b border-neutral-300 pb-4 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold tracking-wide text-neutral-900", children: "Articles" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-neutral-500", children: "Rédigez et publiez les articles affichés sur la page /articles du site." })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/admin/articles/create",
              className: "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af]",
              children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
                "Ajouter un article"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex min-w-[200px] flex-1 flex-col gap-1.5 sm:max-w-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold tracking-wider text-neutral-500 uppercase", children: "Rechercher" }),
            /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-neutral-500" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "search",
                  value: search,
                  onChange: (event) => setSearch(event.target.value),
                  placeholder: "Titre de l'article",
                  className: "w-full rounded-lg border border-neutral-300 bg-white py-2 pr-3 pl-9 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold tracking-wider text-neutral-500 uppercase", children: "Statut" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: filters.status,
                onChange: (event) => applyFilters({ status: event.target.value }),
                className: "rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Tous" }),
                  /* @__PURE__ */ jsx("option", { value: "published", children: "Publiés" }),
                  /* @__PURE__ */ jsx("option", { value: "draft", children: "Brouillons" })
                ]
              }
            )
          ] }),
          (filters.status || filters.search) && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                setSearch("");
                applyFilters({ status: "", search: "" });
              },
              className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-2 text-xs text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-900",
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
                "Réinitialiser"
              ]
            }
          )
        ] }),
        articles.data.length > 0 ? /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[820px] border-collapse text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-neutral-300 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase", children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Image" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Titre" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Statut" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Publication" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Création" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-neutral-200 text-xs text-neutral-700", children: articles.data.map((article) => {
            const published = article.status === "published";
            const scheduled = isScheduled(article);
            return /* @__PURE__ */ jsxs("tr", { className: "transition-colors hover:bg-neutral-50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: article.featured_image_url ? /* @__PURE__ */ jsx("img", { src: article.featured_image_url, alt: "", className: "h-14 w-20 rounded-md object-cover", loading: "lazy" }) : /* @__PURE__ */ jsx("div", { className: "flex h-14 w-20 items-center justify-center rounded-md bg-neutral-100 text-neutral-500", children: /* @__PURE__ */ jsx(ImageOff, { className: "h-5 w-5" }) }) }),
              /* @__PURE__ */ jsxs("td", { className: "max-w-sm px-4 py-3", children: [
                /* @__PURE__ */ jsx(Link, { href: `/admin/articles/${article.id}/edit`, className: "text-sm font-semibold text-neutral-900 hover:text-brand-blue", children: article.title }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 truncate text-neutral-500", children: [
                  "/articles/",
                  article.slug
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap uppercase ${scheduled ? "bg-blue-50 text-blue-700" : published ? "bg-emerald-50 text-emerald-700" : "bg-neutral-200 text-neutral-700"}`,
                  children: scheduled ? "Programmé" : published ? "Publié" : "Brouillon"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-neutral-500", children: formatArticleDate(article.published_at, true) }),
              /* @__PURE__ */ jsx("td", { className: "px-4 py-3 whitespace-nowrap text-neutral-500", children: formatArticleDate(article.created_at) }),
              /* @__PURE__ */ jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ActionLink, { href: `/admin/articles/${article.id}/edit`, title: "Modifier", children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `/articles/${article.slug}`,
                    target: "_blank",
                    rel: "noreferrer",
                    title: published && !scheduled ? "Voir l'article" : "Prévisualiser",
                    "aria-label": published && !scheduled ? "Voir l'article" : "Prévisualiser",
                    className: "rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-brand-blue hover:text-brand-blue",
                    children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => toggleStatus(article),
                    title: published ? "Dépublier" : "Publier",
                    className: `inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[11px] font-semibold transition-colors ${published ? "border-neutral-300 text-neutral-700 hover:border-amber-500 hover:text-amber-600" : "border-emerald-300 text-emerald-700 hover:border-emerald-500"}`,
                    children: [
                      published ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
                      published ? "Dépublier" : "Publier"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => deleteArticle(article),
                    title: "Supprimer",
                    "aria-label": "Supprimer",
                    className: "rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-red-500 hover:text-red-600",
                    children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                  }
                )
              ] }) })
            ] }, article.id);
          }) })
        ] }) }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-16 text-center", children: [
          /* @__PURE__ */ jsx(Newspaper, { className: "h-12 w-12 text-neutral-400", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold text-neutral-500", children: "Aucun article" }),
          /* @__PURE__ */ jsx("p", { className: "max-w-xs text-xs leading-relaxed text-neutral-500", children: filters.status || filters.search ? "Aucun article ne correspond aux filtres sélectionnés." : "Créez votre premier article pour alimenter la page /articles." })
        ] }),
        articles.last_page > 1 && /* @__PURE__ */ jsx("nav", { "aria-label": "Pagination", className: "mt-auto flex flex-wrap items-center justify-center gap-2 pt-4", children: articles.links.map(
          (link, index) => link.url ? /* @__PURE__ */ jsx(
            Link,
            {
              href: link.url,
              preserveScroll: true,
              className: `rounded-lg border px-3 py-1.5 text-xs ${link.active ? "border-brand-blue bg-brand-blue font-bold text-white" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
              children: paginationLabel(link.label)
            },
            index
          ) : /* @__PURE__ */ jsx("span", { className: "rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-400", children: paginationLabel(link.label) }, index)
        ) })
      ] })
    ] })
  ] });
}
function ActionLink({ href, title, children }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      title,
      "aria-label": title,
      className: "rounded-lg border border-neutral-300 p-2 text-neutral-700 transition-colors hover:border-brand-blue hover:text-brand-blue",
      children
    }
  );
}
function StatCard({ label, value, icon }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-wider text-neutral-500 uppercase", children: label }),
      /* @__PURE__ */ jsx("span", { className: "mt-1 text-3xl font-bold text-neutral-900", children: value })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-brand-blue/10 p-3 text-brand-blue", children: icon })
  ] });
}
export {
  AdminArticlesIndex as default
};
