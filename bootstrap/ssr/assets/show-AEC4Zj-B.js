import { jsxs, jsx } from "react/jsx-runtime";
import { SeoHead, Navbar, Footer, absoluteUrl, Stagger, StaggerItem, EASE, Reveal, site } from "./seo-head-5-JxKdYM.js";
import { getServiceBySlug, serviceUrl, services } from "./services-BP0CemjA.js";
import { usePage, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, ArrowUpRight, Sparkles, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import "react";
function ServiceShowPage({ slug, price }) {
  var _a, _b;
  const service = getServiceBySlug(slug);
  const { appUrl } = usePage().props;
  const baseUrl = appUrl.endsWith("/") ? appUrl : `${appUrl}/`;
  if (!service) {
    return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]", children: [
      /* @__PURE__ */ jsx(SeoHead, { title: "Service introuvable | webprint.ma", description: "Ce service n'existe pas ou a été déplacé.", keywords: [], noIndex: true }),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-3xl px-4 py-28 text-center sm:px-6", children: [
        /* @__PURE__ */ jsx("span", { className: "text-alidade-gold-dark text-xs font-bold tracking-[0.3em] uppercase", children: "Page introuvable" }),
        /* @__PURE__ */ jsx("h1", { className: "site-title serif-display text-alidade-navy mt-4 font-bold", children: "Ce service n'existe pas." }),
        /* @__PURE__ */ jsx("p", { className: "site-text mt-4 text-gray-500", children: "Retrouvez l'ensemble de nos prestations sur la page services." }),
        /* @__PURE__ */ jsxs(Link, { href: "/services", className: "brand-button mt-8", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "Voir tous nos services" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  const quoteHref = `/devis?service=${encodeURIComponent(service.title)}`;
  const pageUrl = absoluteUrl(serviceUrl(service.slug), baseUrl);
  const Icon = service.icon;
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#FDFCFA]", children: [
    /* @__PURE__ */ jsx(
      SeoHead,
      {
        title: service.metaTitle,
        description: service.metaDescription,
        keywords: service.keywords,
        image: service.imageUrl,
        imageAlt: service.imageAlt,
        extraSchema: [
          {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: service.title,
            description: service.metaDescription,
            serviceType: service.title,
            url: pageUrl,
            image: absoluteUrl(service.imageUrl, baseUrl),
            provider: { "@id": `${absoluteUrl("/", baseUrl)}#business` },
            areaServed: [
              { "@type": "City", name: "Casablanca" },
              { "@type": "Country", name: "Maroc" }
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: service.title,
              itemListElement: service.prestations.map((prestation) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: prestation }
              }))
            }
          },
          ...price ? [
            {
              "@type": "Product",
              "@id": `${pageUrl}#product`,
              name: `${service.title} à Casablanca`,
              description: service.metaDescription,
              image: absoluteUrl(service.imageUrl, baseUrl),
              brand: { "@type": "Brand", name: "webprint.ma" },
              offers: {
                "@type": "Offer",
                url: pageUrl,
                price: price.amount.toFixed(2),
                priceCurrency: "MAD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                seller: { "@id": `${absoluteUrl("/", baseUrl)}#business` },
                ...price.unit ? {
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: price.amount.toFixed(2),
                    priceCurrency: "MAD",
                    referenceQuantity: {
                      "@type": "QuantitativeValue",
                      value: 1,
                      unitText: price.unit,
                      ...["m²", "m2"].includes(price.unit) ? { unitCode: "MTK" } : {}
                    }
                  }
                } : {}
              }
            }
          ] : [],
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/", baseUrl) },
              { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services", baseUrl) },
              { "@type": "ListItem", position: 3, name: service.title, item: pageUrl }
            ]
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-alidade-navy relative overflow-hidden py-14 text-white sm:py-20", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/backround-print.png')] bg-cover bg-center opacity-20", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "from-alidade-navy/40 via-alidade-navy/80 to-alidade-navy absolute inset-0 bg-gradient-to-b", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "site-container relative mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx("nav", { "aria-label": "Fil d'Ariane", className: "mb-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex flex-wrap items-center gap-1.5 text-sm text-white/60", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/", className: "hover:text-white", children: "Accueil" }) }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 14, "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/services", className: "hover:text-white", children: "Services" }) }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 14, "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("li", { "aria-current": "page", className: "text-white", children: service.title })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-2", children: [
            /* @__PURE__ */ jsxs(Stagger, { className: "space-y-6", amount: 0.3, children: [
              /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold inline-flex items-center gap-2 text-sm font-bold tracking-[0.25em] uppercase", children: [
                /* @__PURE__ */ jsx(Icon, { size: 18, "aria-hidden": "true" }),
                service.tagline
              ] }) }),
              /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("h1", { className: "site-title serif-display font-bold", children: service.title }) }),
              /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("p", { className: "site-text-lead max-w-xl text-white/80", children: service.description }) }),
              /* @__PURE__ */ jsxs(StaggerItem, { className: "flex flex-wrap gap-4 pt-2", children: [
                /* @__PURE__ */ jsxs(Link, { href: quoteHref, className: "brand-button", children: [
                  /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander un devis gratuit" }),
                  /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: "/contact",
                    className: "inline-flex min-h-[3.25rem] items-center gap-2 rounded-lg border border-white/30 px-5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10",
                    children: "Nous contacter"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.25, ease: EASE },
                className: "group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: service.imageUrl,
                      srcSet: service.imageUrl.endsWith(".webp") ? `${service.imageUrl.replace(".webp", "-640.webp")} 640w, ${service.imageUrl} 1280w` : void 0,
                      sizes: "(min-width: 1024px) 50vw, 100vw",
                      alt: service.imageAlt,
                      className: "aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      width: 800,
                      height: 600,
                      loading: "eager",
                      fetchPriority: "high",
                      decoding: "async"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "from-alidade-navy/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "site-container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "space-y-6 lg:col-span-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase", children: "Présentation" }),
          /* @__PURE__ */ jsxs("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: [
            service.title,
            " à Casablanca"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "site-prose space-y-4", children: service.intro.map((paragraph) => /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-text", children: paragraph }, paragraph.slice(0, 32))) }),
          /* @__PURE__ */ jsxs("div", { className: "border-brand-blue/15 rounded-2xl border bg-[#F9F7F3] p-6 sm:p-8", children: [
            /* @__PURE__ */ jsx("span", { className: "text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase", children: "Votre projet, votre budget" }),
            price && /* @__PURE__ */ jsx("p", { className: "text-alidade-navy mt-3 text-2xl font-bold sm:text-3xl", children: price.label }),
            /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-text mt-2", children: (price == null ? void 0 : price.basis) || "Le tarif dépend du format, de la quantité et des finitions." }),
            /* @__PURE__ */ jsx("p", { className: "site-text-small mt-3 text-gray-500", children: "Tarif indicatif. Le prix final dépend du format, de la quantité, du support et des finitions choisies. Tous les détails sont confirmés dans votre devis." }),
            /* @__PURE__ */ jsxs(Link, { href: quoteHref, className: "brand-button mt-6", children: [
              /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander mon devis" }),
              /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-2", delay: 0.15, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-brand-cyan absolute -right-3 -bottom-3 h-full w-full rounded-2xl", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: ((_a = service.gallery[1]) == null ? void 0 : _a.src) ?? service.imageUrl,
              alt: ((_b = service.gallery[1]) == null ? void 0 : _b.caption) ?? service.imageAlt,
              className: "relative aspect-[4/5] w-full rounded-2xl object-cover shadow-lg",
              width: 600,
              height: 750,
              loading: "lazy",
              decoding: "async"
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-[#F9F7F3]", children: /* @__PURE__ */ jsxs("div", { className: "site-container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "mb-12 space-y-3 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase", children: "Avantages" }),
          /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Pourquoi choisir webprint.ma" })
        ] }),
        /* @__PURE__ */ jsx(Stagger, { stagger: 0.1, amount: 0.1, className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: service.advantages.map((advantage) => /* @__PURE__ */ jsxs(StaggerItem, { className: "h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-brand-blue/10 text-brand-blue mb-5 flex h-12 w-12 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx(Sparkles, { size: 22, "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("h3", { className: "site-label text-alidade-navy font-bold", children: advantage.title }),
          /* @__PURE__ */ jsx("p", { className: "site-text-small mt-2 text-gray-500", children: advantage.text })
        ] }, advantage.title)) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "site-container mx-auto grid grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase", children: "Nos prestations" }),
            /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Ce que nous réalisons" })
          ] }),
          /* @__PURE__ */ jsx(Stagger, { stagger: 0.06, className: "space-y-4", amount: 0.1, children: service.prestations.map((prestation) => /* @__PURE__ */ jsxs(StaggerItem, { y: 16, className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 22, className: "text-brand-blue mt-1 shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "site-text text-alidade-text", children: prestation })
          ] }, prestation)) })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { className: "h-fit space-y-6", delay: 0.15, children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-[#F9F7F3] p-8 sm:p-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-alidade-gold-dark text-sm font-bold tracking-[0.3em] uppercase", children: "Matériaux & finitions" }),
            /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-4", children: service.materials.map((material) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "site-text border-alidade-navy/10 text-alidade-navy border-b pb-4 last:border-0 last:pb-0",
                children: material
              },
              material
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: service.gallery.map((photo) => /* @__PURE__ */ jsxs("figure", { className: "group relative aspect-square overflow-hidden rounded-2xl shadow-md", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: photo.src,
                alt: photo.caption,
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsx("figcaption", { className: "from-alidade-navy/80 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-4 text-sm font-semibold text-white", children: photo.caption })
          ] }, photo.src)) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-alidade-navy text-white", children: /* @__PURE__ */ jsxs(Stagger, { className: "site-container mx-auto space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8", amount: 0.3, children: [
        /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold text-sm font-bold tracking-[0.3em] uppercase", children: [
            "Un projet de ",
            service.title.toLowerCase(),
            " ?"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display font-bold", children: "Recevez votre devis gratuit sous 24 h" }),
          /* @__PURE__ */ jsx("p", { className: "site-text-lead mx-auto max-w-2xl text-white/75", children: "Décrivez votre besoin : formats, quantités, délais. Notre équipe vous conseille et vous répond rapidement." })
        ] }),
        /* @__PURE__ */ jsxs(StaggerItem, { className: "flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { href: quoteHref, className: "brand-button", children: [
            /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander un devis" }),
            /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: site.phoneHref,
              className: "inline-flex min-h-[3.25rem] items-center gap-2 rounded-lg border border-white/30 px-5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 18, "aria-hidden": "true" }),
                site.phone
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "border-t border-gray-100 bg-white", children: /* @__PURE__ */ jsxs(Reveal, { className: "site-container mx-auto px-4 py-16 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "site-heading serif-display text-alidade-navy font-bold", children: "Nos autres services" }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4", children: services.filter((s) => s.slug !== service.slug).map((s) => {
          const OtherIcon = s.icon;
          return /* @__PURE__ */ jsxs(
            Link,
            {
              href: serviceUrl(s.slug),
              className: "group hover:border-brand-blue/30 flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx(OtherIcon, { size: 20, className: "text-brand-blue shrink-0", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "group-hover:text-brand-blue flex-1", children: s.title }),
                /* @__PURE__ */ jsx(
                  ArrowRight,
                  {
                    size: 16,
                    className: "text-gray-400 transition-transform group-hover:translate-x-1",
                    "aria-hidden": "true"
                  }
                )
              ]
            },
            s.slug
          );
        }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServiceShowPage as default
};
