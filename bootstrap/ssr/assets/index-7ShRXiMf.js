import { jsxs, jsx } from "react/jsx-runtime";
import { FlashMessage } from "./flash-message-CailxFxt.js";
import { services, serviceUrl } from "./services-BP0CemjA.js";
import { AppLayout } from "./app-layout-C3STRvhP.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { Save } from "lucide-react";
import "react";
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
  { title: "Tarifs", href: "/admin/tarifs" }
];
const inputClass = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 focus:border-brand-blue focus:outline-none aria-[invalid=true]:border-red-500";
function AdminTarifsIndex({ prices }) {
  const { data, setData, put, processing, errors, isDirty } = useForm({ prices });
  const update = (slug, field, value) => {
    setData("prices", { ...data.prices, [slug]: { ...data.prices[slug], [field]: value } });
  };
  const submit = (event) => {
    event.preventDefault();
    put("/admin/tarifs", { preserveScroll: true });
  };
  const errorFor = (slug, field) => errors[`prices.${slug}.${field}`];
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Tarifs" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6", children: [
      /* @__PURE__ */ jsx(FlashMessage, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3 border-b border-neutral-300 pb-4 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold tracking-wide text-neutral-900", children: "Tarifs des services" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-2xl text-xs text-neutral-500", children: "Le prix « à partir de » s'affiche sur la page du service et dans les résultats Google (prix en MAD). Laissez le prix vide pour un service sur devis." })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              disabled: processing || !isDirty,
              className: "bg-brand-blue inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af] disabled:cursor-not-allowed disabled:opacity-50",
              children: [
                /* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }),
                processing ? "Enregistrement…" : "Enregistrer les tarifs"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("datalist", { id: "tarif-units", children: [
          /* @__PURE__ */ jsx("option", { value: "m²" }),
          /* @__PURE__ */ jsx("option", { value: "ml" }),
          /* @__PURE__ */ jsx("option", { value: "pièce" }),
          /* @__PURE__ */ jsx("option", { value: "lot" }),
          /* @__PURE__ */ jsx("option", { value: "100 ex." }),
          /* @__PURE__ */ jsx("option", { value: "véhicule" }),
          /* @__PURE__ */ jsx("option", { value: "projet" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[820px] border-collapse text-left", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-neutral-300 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase", children: [
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Service" }),
            /* @__PURE__ */ jsx("th", { className: "w-40 px-4 py-4 font-semibold", children: "Prix à partir de (DH)" }),
            /* @__PURE__ */ jsx("th", { className: "w-32 px-4 py-4 font-semibold", children: "Unité" }),
            /* @__PURE__ */ jsx("th", { className: "px-4 py-4 font-semibold", children: "Précision affichée" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-neutral-200 text-xs text-neutral-700", children: services.map((service) => {
            const row = data.prices[service.slug] ?? { amount: "", unit: "", basis: "" };
            const fieldError = errorFor(service.slug, "amount") ?? errorFor(service.slug, "unit") ?? errorFor(service.slug, "basis");
            return /* @__PURE__ */ jsxs("tr", { className: "align-top", children: [
              /* @__PURE__ */ jsxs("td", { className: "px-4 py-4", children: [
                /* @__PURE__ */ jsx("strong", { className: "block text-sm text-neutral-900", children: service.title }),
                /* @__PURE__ */ jsx(Link, { href: serviceUrl(service.slug), className: "text-brand-blue hover:underline", children: serviceUrl(service.slug) }),
                fieldError && /* @__PURE__ */ jsx("p", { className: "mt-1 text-red-600", children: fieldError })
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "px-4 py-4", children: [
                /* @__PURE__ */ jsxs("label", { className: "sr-only", htmlFor: `amount-${service.slug}`, children: [
                  "Prix de ",
                  service.title
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: `amount-${service.slug}`,
                    inputMode: "decimal",
                    placeholder: "Sur devis",
                    value: row.amount,
                    onChange: (event) => update(service.slug, "amount", event.target.value),
                    "aria-invalid": Boolean(errorFor(service.slug, "amount")),
                    className: inputClass
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "px-4 py-4", children: [
                /* @__PURE__ */ jsxs("label", { className: "sr-only", htmlFor: `unit-${service.slug}`, children: [
                  "Unité de ",
                  service.title
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: `unit-${service.slug}`,
                    list: "tarif-units",
                    maxLength: 20,
                    placeholder: "m²",
                    value: row.unit,
                    onChange: (event) => update(service.slug, "unit", event.target.value),
                    "aria-invalid": Boolean(errorFor(service.slug, "unit")),
                    className: inputClass
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "px-4 py-4", children: [
                /* @__PURE__ */ jsxs("label", { className: "sr-only", htmlFor: `basis-${service.slug}`, children: [
                  "Précision pour ",
                  service.title
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: `basis-${service.slug}`,
                    maxLength: 160,
                    placeholder: "Ex. : prix au m², hors pose.",
                    value: row.basis,
                    onChange: (event) => update(service.slug, "basis", event.target.value),
                    "aria-invalid": Boolean(errorFor(service.slug, "basis")),
                    className: inputClass
                  }
                )
              ] })
            ] }, service.slug);
          }) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  AdminTarifsIndex as default
};
