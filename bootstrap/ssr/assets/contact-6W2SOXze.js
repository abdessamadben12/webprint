import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { EASE, Reveal, site, SeoHead, pageSeo, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { services } from "./services-BP0CemjA.js";
import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import { CheckCircle2, User, Mail, Phone, ChevronDown, PenLine, Paperclip, Send, MapPin, Clock } from "lucide-react";
import React__default from "react";
const Contact = () => {
  var _a;
  const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
    request_type: "contact",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
    attachment: null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contact.submit"), {
      forceFormData: true,
      onSuccess: () => reset()
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen ", children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "\n        relative flex min-h-[420px] w-full\n        items-center justify-center overflow-hidden\n        bg-[url('/images/backround-print.png')]\n        bg-cover bg-center bg-no-repeat\n        px-6 py-12 text-center text-white\n        md:min-h-[500px]\n    ",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: EASE },
            className: "\n            relative z-10\n            flex w-full max-w-3xl\n            flex-col items-center justify-center\n            text-center\n        ",
            children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "\n                text-alidade-gold\n                flex items-center justify-center gap-3\n                text-sm font-bold tracking-widest uppercase\n                sm:text-xl\n            ",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[2px] w-8" }),
                    "Nous sommes à votre écoute",
                    /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[2px] w-8" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h1", { className: "site-title mt-4 mb-6 text-center text-white", children: "Contactez-Nous" }),
              /* @__PURE__ */ jsxs("p", { className: "site-text-lead mx-auto max-w-xl text-center text-white/90", children: [
                "Une impression, une bâche, un covering ou une",
                /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
                "campagne à préparer ?",
                /* @__PURE__ */ jsx("br", {}),
                "Notre équipe vous accompagne."
              ] })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto grid site-container grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "rounded-xl border border-gray-100 bg-white p-8 shadow-sm lg:col-span-2", amount: 0.1, children: [
        /* @__PURE__ */ jsx("h2", { className: "site-subheading text-alidade-navy border-alidade-gold mb-8 border-l-4 pl-4 font-bold", children: "Envoyez-nous un message" }),
        wasSuccessful && /* @__PURE__ */ jsxs("div", { className: "border-alidade-gold bg-alidade-gold/10 text-alidade-navy mb-6 flex items-start gap-3 rounded-lg border p-4 text-sm font-medium", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "text-alidade-gold-dark mt-0.5 h-5 w-5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: "Votre message a été envoyé avec succès. Nous vous recontacterons bientôt." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: data.first_name,
                    onChange: (e) => setData("first_name", e.target.value),
                    placeholder: "Prénom",
                    className: "focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                  }
                ),
                /* @__PURE__ */ jsx(User, { className: "absolute top-4 right-4 h-5 w-5 text-gray-400" })
              ] }),
              errors.first_name && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.first_name })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    required: true,
                    value: data.last_name,
                    onChange: (e) => setData("last_name", e.target.value),
                    placeholder: "Nom",
                    className: "focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                  }
                ),
                /* @__PURE__ */ jsx(User, { className: "absolute top-4 right-4 h-5 w-5 text-gray-400" })
              ] }),
              errors.last_name && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.last_name })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    required: true,
                    value: data.email,
                    onChange: (e) => setData("email", e.target.value),
                    placeholder: "Email",
                    className: "focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                  }
                ),
                /* @__PURE__ */ jsx(Mail, { className: "absolute top-4 right-4 h-5 w-5 text-gray-400" })
              ] }),
              errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    value: data.phone,
                    onChange: (e) => setData("phone", e.target.value),
                    placeholder: "Téléphone",
                    className: "focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                  }
                ),
                /* @__PURE__ */ jsx(Phone, { className: "absolute top-4 right-4 h-5 w-5 text-gray-400" })
              ] }),
              errors.phone && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  value: data.project_type,
                  onChange: (e) => setData("project_type", e.target.value),
                  className: "focus:ring-alidade-gold/20 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 text-gray-600 transition focus:ring-2 focus:outline-none",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Sujet" }),
                    services.map((service) => /* @__PURE__ */ jsx("option", { value: service.title, children: service.title }, service.slug)),
                    /* @__PURE__ */ jsx("option", { value: "Autre", children: "Autre" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(ChevronDown, { className: "pointer-events-none absolute top-4 right-4 h-5 w-5 text-gray-400" })
            ] }),
            errors.project_type && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.project_type })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  rows: 4,
                  required: true,
                  value: data.message,
                  onChange: (e) => setData("message", e.target.value),
                  placeholder: "Votre message",
                  className: "focus:ring-alidade-gold/20 w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                }
              ),
              /* @__PURE__ */ jsx(PenLine, { className: "absolute top-4 right-4 h-5 w-5 text-gray-400" })
            ] }),
            errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { className: "hover:border-alidade-gold flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-500 transition-colors", children: [
              /* @__PURE__ */ jsxs("span", { className: "inline-flex min-w-0 items-center gap-2", children: [
                /* @__PURE__ */ jsx(Paperclip, { className: "text-alidade-gold-dark h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "truncate", children: ((_a = data.attachment) == null ? void 0 : _a.name) || "Pièce jointe (PDF, Word ou image, max 10 Mo)" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-alidade-navy shrink-0 text-xs font-bold tracking-widest uppercase", children: "Choisir" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  className: "sr-only",
                  accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp",
                  onChange: (e) => {
                    var _a2;
                    return setData("attachment", ((_a2 = e.target.files) == null ? void 0 : _a2[0]) ?? null);
                  }
                }
              )
            ] }),
            errors.attachment && /* @__PURE__ */ jsx("p", { className: "mt-1 site-text-small text-red-500", children: errors.attachment })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", disabled: processing, "aria-busy": processing, className: "brand-button w-full", children: [
            processing ? "Envoi..." : "Envoyer le message",
            " ",
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 rotate-[-45deg]" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { className: "flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-8 shadow-sm", delay: 0.15, amount: 0.1, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "site-subheading text-alidade-navy border-alidade-gold mb-8 border-l-4 pl-4 font-bold", children: "Nos Coordonnées" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsx(ContactInfoItem, { icon: /* @__PURE__ */ jsx(MapPin, {}), title: "Adresse", content: site.address }),
            /* @__PURE__ */ jsx(ContactInfoItem, { icon: /* @__PURE__ */ jsx(Phone, {}), title: "Téléphone", content: site.phone }),
            /* @__PURE__ */ jsx(ContactInfoItem, { icon: /* @__PURE__ */ jsx(Mail, {}), title: "Email", content: site.email }),
            /* @__PURE__ */ jsx(ContactInfoItem, { icon: /* @__PURE__ */ jsx(Clock, {}), title: "Horaires d'ouverture", content: /* @__PURE__ */ jsx(Fragment, { children: "Lundi - Vendredi : 8h30 - 18h30" }) })
          ] })
        ] }),
        site.socials.linkedin
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "bg-alidade-dark flex min-h-[400px] flex-col md:flex-row", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "flex w-full flex-col justify-center p-8 sm:p-12 md:w-2/5 md:pl-24", amount: 0.3, children: [
        /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold mb-4 flex items-center gap-2 text-sm font-bold sm:text-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[2px] w-8" }),
          "Où nous trouver ?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "site-text-lead max-w-xs text-white", children: [
          "Retrouvez webprint.ma au cœur de Casablanca. ",
          /* @__PURE__ */ jsx("br", {}),
          "Nous serons ravis de vous conseiller."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative min-h-[400px] w-full overflow-hidden md:w-3/5", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: site.mapEmbedUrl,
          title: "Localisation webprint.ma sur Google Maps",
          className: "absolute inset-0 h-full w-full border-0",
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "strict-origin-when-cross-origin"
        }
      ) })
    ] })
  ] });
};
const ContactInfoItem = ({ icon, title, content }) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
  /* @__PURE__ */ jsx("div", { className: "bg-brand-blue/5 text-brand-blue h-fit rounded-lg p-3", children: React__default.cloneElement(icon, { size: 18 }) }),
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h3", { className: "site-label text-alidade-navy font-bold", children: title }),
    /* @__PURE__ */ jsx("div", { className: "site-text text-gray-500", children: content })
  ] })
] });
function ContactPage() {
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(SeoHead, { ...pageSeo.contact }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ContactPage as default
};
