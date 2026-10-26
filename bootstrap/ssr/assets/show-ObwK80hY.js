import { jsxs, jsx } from "react/jsx-runtime";
import { AppLayout } from "./app-layout-C3STRvhP.js";
import { Head, Link, router } from "@inertiajs/react";
import { ArrowLeft, Trash2, User, Mail, Phone, FileText, Calendar, Paperclip, CheckCircle2, Download, XCircle } from "lucide-react";
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
function MessageShow({ message }) {
  const breadcrumbs = [
    { title: "Dashboard", href: "/dashboard" },
    { title: `Message #${message.id}`, href: `/messages/${message.id}` }
  ];
  const deleteMessage = () => {
    if (confirm(`Supprimer le message de ${message.first_name} ${message.last_name} ?`)) {
      router.delete(`/messages/${message.id}`);
    }
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: `Message de ${message.first_name} ${message.last_name}` }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-900 p-6 text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/dashboard",
              className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 px-3 py-2 text-xs text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                "Retour"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("h1", { className: "text-lg font-bold tracking-wide", children: [
            message.first_name,
            " ",
            message.last_name
          ] }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${message.request_type === "quote" ? "bg-[#c5a880]/15 text-[#c5a880]" : "bg-blue-500/10 text-blue-300"}`,
              children: message.request_type === "quote" ? "Devis" : "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: deleteMessage,
            className: "inline-flex items-center gap-1.5 self-start rounded-lg border border-red-500/40 px-3 py-2 text-xs text-red-400 transition-colors hover:border-red-500 hover:bg-red-500/10 sm:self-auto",
            children: [
              /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }),
              "Supprimer"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800 p-6 shadow-sm lg:col-span-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "border-b border-neutral-700 pb-3 text-sm font-bold tracking-wide text-white", children: "Message" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed break-words whitespace-pre-wrap text-neutral-300", children: message.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800 p-6 shadow-sm", children: [
            /* @__PURE__ */ jsx("h2", { className: "border-b border-neutral-700 pb-3 text-sm font-bold tracking-wide text-white", children: "Informations" }),
            /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }), label: "Nom complet", value: `${message.first_name} ${message.last_name}` }),
            /* @__PURE__ */ jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
                label: "Email",
                value: /* @__PURE__ */ jsx("a", { href: `mailto:${message.email}`, className: "text-[#c5a880] hover:underline", children: message.email })
              }
            ),
            /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "Telephone", value: message.phone || "-" }),
            /* @__PURE__ */ jsx(InfoRow, { icon: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), label: "Type de projet", value: message.project_type || "-" }),
            /* @__PURE__ */ jsx(
              InfoRow,
              {
                icon: /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                label: "Date d'envoi",
                value: new Date(message.created_at).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 rounded-xl border border-neutral-700/50 bg-neutral-800 p-6 shadow-sm", children: [
            /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-2 border-b border-neutral-700 pb-3 text-sm font-bold tracking-wide text-white", children: [
              /* @__PURE__ */ jsx(Paperclip, { className: "h-4 w-4 text-[#c5a880]" }),
              "Document joint"
            ] }),
            message.attachment_path ? message.attachment_exists ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-emerald-400", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0" }),
                "Le document existe"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-neutral-700 bg-neutral-900 p-3 text-xs", children: [
                /* @__PURE__ */ jsx("div", { className: "truncate font-semibold text-white", children: message.attachment_original_name || "Piece jointe" }),
                message.attachment_size_label && /* @__PURE__ */ jsx("div", { className: "mt-1 text-neutral-500", children: message.attachment_size_label })
              ] }),
              message.attachment_url && /* @__PURE__ */ jsxs(
                "a",
                {
                  href: message.attachment_url,
                  className: "inline-flex items-center justify-center gap-2 rounded-lg bg-[#c5a880] px-4 py-2.5 text-xs font-bold tracking-wider text-neutral-900 uppercase transition-opacity hover:opacity-90",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                    "Telecharger"
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-red-400", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 shrink-0" }),
              "Le fichier « ",
              message.attachment_original_name || message.attachment_path,
              " » est introuvable sur le serveur."
            ] }) : /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500", children: "Aucun document joint a ce message." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function InfoRow({ icon, label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 rounded-lg bg-[#c5a880]/10 p-2 text-[#c5a880]", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-semibold tracking-wider text-neutral-400 uppercase", children: label }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-xs break-words text-neutral-200", children: value })
    ] })
  ] });
}
export {
  MessageShow as default
};
