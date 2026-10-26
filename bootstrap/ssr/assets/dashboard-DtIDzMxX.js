import { jsxs, jsx } from "react/jsx-runtime";
import { AppLayout } from "./app-layout-C3STRvhP.js";
import { Head, Link, router } from "@inertiajs/react";
import { Mail, User, FileText, X, Paperclip, Calendar, Eye, Trash2 } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "react";
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
  {
    title: "Dashboard",
    href: "/dashboard"
  }
];
const emptyFilters = { type: "", date_from: "", date_to: "" };
function Dashboard({
  contactMessages = [],
  filters = emptyFilters
}) {
  const totalSubmissions = contactMessages.length;
  const uniqueSenders = new Set(contactMessages.map((m) => m.email)).size;
  const quoteCount = contactMessages.filter((m) => m.request_type === "quote").length;
  const hasActiveFilters = Boolean(filters.type || filters.date_from || filters.date_to);
  const applyFilters = (next) => {
    const merged = { ...filters, ...next };
    const params = Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== ""));
    router.get("/dashboard", params, { preserveState: true, preserveScroll: true, replace: true });
  };
  const deleteMessage = (msg) => {
    if (confirm(`Supprimer le message de ${msg.first_name} ${msg.last_name} ?`)) {
      router.delete(`/messages/${msg.id}`, { preserveScroll: true });
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-900 p-6 text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid auto-rows-min gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsx(StatCard, { label: "Messages recus", value: totalSubmissions, icon: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx(StatCard, { label: "Contacts uniques", value: uniqueSenders, icon: /* @__PURE__ */ jsx(User, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx(StatCard, { label: "Demandes de devis", value: quoteCount, icon: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex min-h-[50vh] flex-1 flex-col gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800 p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-2 border-b border-neutral-700 pb-4 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold tracking-wide text-white", children: "Messages et devis" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-neutral-400", children: "Derniers messages envoyes via contact et demande de devis" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "self-start rounded-full bg-neutral-700 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white uppercase sm:self-auto", children: [
            totalSubmissions,
            " message",
            totalSubmissions !== 1 ? "s" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end gap-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold tracking-wider text-neutral-400 uppercase", children: "Type" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: filters.type,
                onChange: (e) => applyFilters({ type: e.target.value }),
                className: "rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-xs text-white focus:border-[#c5a880] focus:outline-none",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Tous" }),
                  /* @__PURE__ */ jsx("option", { value: "contact", children: "Contact" }),
                  /* @__PURE__ */ jsx("option", { value: "quote", children: "Devis" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold tracking-wider text-neutral-400 uppercase", children: "Du" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                value: filters.date_from,
                onChange: (e) => applyFilters({ date_from: e.target.value }),
                className: "rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-white [color-scheme:dark] focus:border-[#c5a880] focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold tracking-wider text-neutral-400 uppercase", children: "Au" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                value: filters.date_to,
                min: filters.date_from || void 0,
                onChange: (e) => applyFilters({ date_to: e.target.value }),
                className: "rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs text-white [color-scheme:dark] focus:border-[#c5a880] focus:outline-none"
              }
            )
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => applyFilters(emptyFilters),
              className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-2 text-xs text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white",
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" }),
                "Reinitialiser"
              ]
            }
          )
        ] }),
        contactMessages.length > 0 ? /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-neutral-700 text-[10px] font-bold tracking-[0.15em] text-neutral-400 uppercase", children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Nom complet" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Type" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Contact" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Projet" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Message" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Fichier" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Date d'envoi" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-neutral-700/50 text-xs font-light text-neutral-300", children: contactMessages.map((msg) => /* @__PURE__ */ jsxs("tr", { className: "transition-colors hover:bg-neutral-700/20", children: [
            /* @__PURE__ */ jsxs("td", { className: "px-4 py-4 font-semibold text-white", children: [
              msg.first_name,
              " ",
              msg.last_name
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${msg.request_type === "quote" ? "bg-[#c5a880]/15 text-[#c5a880]" : "bg-blue-500/10 text-blue-300"}`,
                children: msg.request_type === "quote" ? "Devis" : "Contact"
              }
            ) }),
            /* @__PURE__ */ jsxs("td", { className: "px-4 py-4", children: [
              /* @__PURE__ */ jsx("a", { href: `mailto:${msg.email}`, className: "text-[#c5a880] hover:underline", children: msg.email }),
              msg.phone && /* @__PURE__ */ jsx("div", { className: "mt-1 text-neutral-500", children: msg.phone })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 text-neutral-400", children: msg.project_type || "-" }),
            /* @__PURE__ */ jsx("td", { className: "max-w-sm break-words px-4 py-4 pr-8 leading-relaxed whitespace-pre-wrap xl:max-w-md", children: msg.message }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4", children: msg.attachment_url ? /* @__PURE__ */ jsxs("a", { href: msg.attachment_url, className: "inline-flex max-w-[180px] items-center gap-2 text-[#c5a880] hover:underline", children: [
              /* @__PURE__ */ jsx(Paperclip, { className: "h-3.5 w-3.5 shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "truncate", children: msg.attachment_original_name || "Piece jointe" }),
              msg.attachment_size_label && /* @__PURE__ */ jsxs("span", { className: "shrink-0 text-neutral-500", children: [
                "(",
                msg.attachment_size_label,
                ")"
              ] })
            ] }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-600", children: "-" }) }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4 text-neutral-400", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-neutral-500" }),
              new Date(msg.created_at).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: `/messages/${msg.id}`,
                  title: "Voir le detail",
                  className: "rounded-lg border border-neutral-700 p-2 text-neutral-300 transition-colors hover:border-[#c5a880] hover:text-[#c5a880]",
                  children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: () => deleteMessage(msg),
                  title: "Supprimer",
                  className: "rounded-lg border border-neutral-700 p-2 text-neutral-300 transition-colors hover:border-red-500 hover:text-red-400",
                  children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                }
              )
            ] }) })
          ] }, msg.id)) })
        ] }) }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-16 text-center", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-12 w-12 text-neutral-600", strokeWidth: 1.5 }),
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-neutral-400", children: "Aucun message" }),
          /* @__PURE__ */ jsx("p", { className: "max-w-xs text-xs leading-relaxed text-neutral-500", children: hasActiveFilters ? "Aucun message ne correspond aux filtres selectionnes." : "Les contacts et demandes de devis s'afficheront ici." })
        ] })
      ] })
    ] })
  ] });
}
function StatCard({ label, value, icon }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-xl border border-neutral-700/50 bg-neutral-800 p-6 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium tracking-wider text-neutral-400 uppercase", children: label }),
      /* @__PURE__ */ jsx("span", { className: "mt-1 text-3xl font-bold text-white", children: value })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-[#c5a880]/10 p-3 text-[#c5a880]", children: icon })
  ] });
}
export {
  Dashboard as default
};
