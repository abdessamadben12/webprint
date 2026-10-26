import { jsxs, jsx } from "react/jsx-runtime";
import { Stagger, StaggerItem, Reveal, aboutCraftHero, SeoHead, pageSeo, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { Award, Printer, Brush, Flag, Shield, Users, CheckCircle, Compass } from "lucide-react";
import "framer-motion";
import "./services-BP0CemjA.js";
import "@inertiajs/react";
import "react";
function About() {
  const highlights = [
    {
      title: "Impression tous supports",
      description: "Numerique, petit format et grand format pour vos documents commerciaux et supports de marque.",
      icon: Printer
    },
    {
      title: "Creation graphique",
      description: "Logo, maquettes, habillage et preparation de fichiers prets a imprimer.",
      icon: Brush
    },
    {
      title: "Habillage et palissades",
      description: "Vehicules, vitrines, baches, adhesifs vinyle et palissades de chantier pour une visibilite maximale.",
      icon: Flag
    }
  ];
  const values = [
    {
      title: "Qualite",
      description: "Des supports adaptes, des couleurs maitrisees et un rendu professionnel.",
      icon: Shield
    },
    {
      title: "Conseil",
      description: "Une equipe qui vous oriente sur le format, le papier, la finition et le budget.",
      icon: Users
    },
    {
      title: "Reactivite",
      description: "Des solutions rapides pour les urgences commerciales et evenementielles.",
      icon: CheckCircle
    },
    {
      title: "Accompagnement",
      description: "Du brief initial a la livraison finale, un suivi clair et direct.",
      icon: Compass
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy relative w-full bg-[#FDFCFA]", children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "\r\n        relative flex min-h-[420px] w-full\r\n        items-center justify-center overflow-hidden\r\n        bg-[url('/images/backround-print.png')]\r\n        bg-cover bg-center bg-no-repeat\r\n        px-6 py-12 text-center text-white\r\n        md:min-h-[500px]\r\n    ",
        children: /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto w-full max-w-4xl", children: /* @__PURE__ */ jsxs(
          Stagger,
          {
            className: "flex flex-col items-center justify-center space-y-6 text-center",
            amount: 0.3,
            children: [
              /* @__PURE__ */ jsxs(StaggerItem, { className: "text-alidade-gold inline-flex items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-px w-8" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-bold tracking-[0.35em] uppercase sm:text-xl", children: "Notre imprimerie" }),
                /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-px w-8" })
              ] }),
              /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("h1", { className: "site-title serif-display text-center font-bold text-white", children: "Donner forme à votre communication" }) }),
              /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("p", { className: "site-text-lead mx-auto max-w-2xl text-center text-white/80", children: "webprint.ma accompagne les entreprises, commerçants et porteurs de projets avec des impressions, des supports publicitaires et des solutions visuelles conçues pour être vues, comprises et mémorisées." }) })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "relative z-10", children: /* @__PURE__ */ jsx("div", { className: "mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "relative overflow-hidden rounded-2xl shadow-lg", y: 36, children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: aboutCraftHero,
            alt: "Atelier webprint.ma",
            className: "aspect-[4/5] h-full w-full object-cover",
            loading: "lazy",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "from-alidade-navy/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-6 left-6 flex items-center gap-3 rounded-xl bg-white p-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(Award, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-alidade-navy text-xl font-bold", children: "6+" }),
            /* @__PURE__ */ jsx("div", { className: "text-alidade-muted text-[9px] font-semibold tracking-[0.2em] uppercase", children: "Ans d experience" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { className: "space-y-6", delay: 0.15, children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block", children: /* @__PURE__ */ jsx("span", { className: "text-alidade-navy text-sm font-bold tracking-[0.3em] uppercase sm:text-xl", children: "Qui sommes-nous" }) }),
          /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Une equipe print et conseil" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted", children: "webprint.ma propose une gamme complete de solutions pour creer, imprimer et installer vos supports de communication. Notre role est de vous aider a choisir le bon format, le bon support et la bonne finition pour obtenir un resultat efficace, propre et adapte a votre budget." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: highlights.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxs("div", { className: "group flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-alidade-gold flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors", children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted mt-1", children: item.description })
            ] })
          ] }, item.title);
        }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container px-4 py-10 sm:px-6 sm:py-18 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-alidade-navy text-sm font-bold tracking-[0.3em] uppercase sm:text-xl", children: "Nos valeurs" }),
        /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy mt-3 font-bold", children: "Ce qui guide notre travail" })
      ] }),
      /* @__PURE__ */ jsx(Stagger, { stagger: 0.12, className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: values.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxs(StaggerItem, { className: "h-full rounded-lg bg-[#ffffff] p-6 transition-colors hover:bg-[#F3EDE4]", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold mb-4 flex h-12 w-12 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted mt-3", children: item.description })
        ] }, item.title);
      }) })
    ] }) })
  ] });
}
function AproposPage() {
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(SeoHead, { ...pageSeo.apropos }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AproposPage as default
};
