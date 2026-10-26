import { jsxs, jsx } from "react/jsx-runtime";
import { Stagger, StaggerItem, Reveal, SeoHead, pageSeo, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { ServiceImage } from "./service-image-DKjWxCC-.js";
import { services, serviceUrl } from "./services-BP0CemjA.js";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowRight, FileSignature, Shapes, Printer, PackageCheck } from "lucide-react";
import "react";
const MotionLink = motion.create(Link);
function Services() {
  return /* @__PURE__ */ jsxs("section", { className: "text-alidade-navy w-full bg-[#FDFCFA]", id: "services-section", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "\r\n        relative\r\n        overflow-hidden\r\n        bg-[url('/images/backround-print.png')]\r\n        bg-cover\r\n        bg-center\r\n        bg-no-repeat\r\n        py-10\r\n        text-white\r\n        sm:py-18\r\n    ",
        children: [
          /* @__PURE__ */ jsxs(
            Stagger,
            {
              className: "relative mx-auto site-container space-y-6 px-4 text-center sm:px-6 lg:px-8",
              amount: 0.3,
              children: [
                /* @__PURE__ */ jsx(StaggerItem, { className: "inline-block", children: /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl", children: "Services" }) }),
                /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("h1", { className: "site-title serif-display font-bold", children: "Impression, habillage et industrie publicitaire" }) }),
                /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("p", { className: "site-text-lead mx-auto max-w-2xl text-white/80", children: "webprint.ma accompagne les entreprises au Maroc : impression numérique et grand format, habillage de véhicules et de vitrines, palissades de chantier, vinyle, bâches et design graphique, adaptés à chaque budget." }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Stagger,
            {
              stagger: 0.15,
              delay: 0.2,
              className: "\r\n            relative\r\n            mx-auto\r\n            mt-16\r\n            grid\r\n            max-w-4xl\r\n            grid-cols-3\r\n            divide-x\r\n            divide-white/10\r\n            border-t\r\n            border-white/10\r\n            px-4\r\n            pt-8\r\n            sm:px-6\r\n            lg:px-8\r\n        ",
              children: [
                /* @__PURE__ */ jsxs(StaggerItem, { className: "px-2 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "serif-display text-alidade-gold text-3xl font-bold sm:text-4xl", children: services.length }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs", children: "Familles de services" })
                ] }),
                /* @__PURE__ */ jsxs(StaggerItem, { className: "px-2 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "serif-display text-alidade-gold text-3xl font-bold sm:text-4xl", children: "6+" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs", children: "Ans d'expérience" })
                ] }),
                /* @__PURE__ */ jsxs(StaggerItem, { className: "px-2 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "serif-display text-alidade-gold text-3xl font-bold sm:text-4xl", children: "1" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] tracking-[0.2em] text-white/60 uppercase sm:text-xs", children: "Partenaire print" })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "mb-16 space-y-3 text-center", children: /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Une gamme complete pour votre communication" }) }),
      /* @__PURE__ */ jsx(Stagger, { stagger: 0.1, amount: 0.05, className: "grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3", children: services.map((service, index) => {
        const IconComponent = service.icon;
        const number = String(index + 1).padStart(2, "0");
        return /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: serviceUrl(service.slug),
            className: "group bg-alidade-navy relative flex h-full flex-col rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative h-52 overflow-hidden rounded-t-2xl",
                  style: { clipPath: "polygon(0 0, 100% 0, 100% 78%, 0% 100%)" },
                  children: [
                    /* @__PURE__ */ jsx(
                      ServiceImage,
                      {
                        service,
                        className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "from-alidade-navy via-alidade-navy/10 absolute inset-0 bg-gradient-to-t to-black/20" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "serif-display pointer-events-none absolute top-3 right-5 text-6xl font-bold text-white/[0.06] select-none", children: number }),
              /* @__PURE__ */ jsx("div", { className: "relative -mt-7 pl-6", children: /* @__PURE__ */ jsx("div", { className: "border-alidade-navy text-alidade-navy group-hover:bg-alidade-navy group-hover:text-alidade-gold flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white shadow-lg transition-colors duration-300", children: /* @__PURE__ */ jsx(IconComponent, { size: 22 }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-col space-y-3 px-6 pt-4 pb-7", children: [
                /* @__PURE__ */ jsx("h3", { className: "site-subheading serif-display font-bold text-white", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "site-text text-white/80", children: service.description }),
                /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold mt-auto inline-flex items-center gap-2 pt-3 text-xs font-bold tracking-[0.2em] uppercase", children: [
                  /* @__PURE__ */ jsx("span", { children: "Decouvrir" }),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "transition-transform duration-300 group-hover:translate-x-1.5" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "group-hover:ring-alidade-gold/50 pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-all duration-500 ring-inset" })
            ]
          }
        ) }, service.slug);
      }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#F9F7F3]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8", children: [
      /* @__PURE__ */ jsx(Reveal, { className: "mb-16 space-y-3 text-center", children: /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Comment nous travaillons" }) }),
      /* @__PURE__ */ jsx(Stagger, { stagger: 0.18, className: "relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [
        { icon: FileSignature, step: "01", title: "Brief", desc: "Ecoute du besoin, formats, quantites, delais et budget." },
        { icon: Shapes, step: "02", title: "Creation", desc: "Maquette graphique, adaptation des fichiers et validation BAT." },
        { icon: Printer, step: "03", title: "Production", desc: "Impression, decoupe, finitions et controle qualite." },
        {
          icon: PackageCheck,
          step: "04",
          title: "Livraison",
          desc: "Preparation, emballage et remise de vos supports prets a diffuser."
        }
      ].map((item, idx, arr) => {
        const StepIcon = item.icon;
        return /* @__PURE__ */ jsxs(StaggerItem, { className: "relative space-y-4 text-center", children: [
          idx < arr.length - 1 && /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold absolute top-8 left-[60%] hidden h-px w-full lg:block" }),
          /* @__PURE__ */ jsx("div", { className: "border-alidade-navy/30 bg-alidade-navy text-alidade-gold relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border shadow-md", children: /* @__PURE__ */ jsx(StepIcon, { size: 26 }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-alidade-muted text-[11px] font-bold tracking-[0.3em] uppercase", children: [
            "Etape ",
            item.step
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "site-subheading text-alidade-navy font-bold", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted", children: item.desc })
        ] }, item.step);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-white", children: /* @__PURE__ */ jsxs(Stagger, { className: "mx-auto site-container space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8", amount: 0.3, children: [
      /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase sm:text-xl", children: "Un support a imprimer ?" }),
        /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display font-bold", children: "Parlons de votre prochaine campagne" })
      ] }),
      /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
        MotionLink,
        {
          href: `/devis?service=${encodeURIComponent("un projet d impression ou de communication visuelle")}`,
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.96 },
          transition: { type: "spring", stiffness: 400, damping: 20 },
          className: "brand-button",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Obtenir un devis gratuit" }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ]
        }
      ) })
    ] }) })
  ] });
}
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(SeoHead, { ...pageSeo.services }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(Services, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServicesPage as default
};
