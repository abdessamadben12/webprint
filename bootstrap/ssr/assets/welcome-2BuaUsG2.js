import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { EASE, Stagger, StaggerItem, Reveal, Navbar, Footer, SeoHead, pageSeo } from "./seo-head-5-JxKdYM.js";
import { Link, router, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Gift, ArrowRight, User, Home, Award } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ServiceImage } from "./service-image-DKjWxCC-.js";
import { services, serviceUrl } from "./services-BP0CemjA.js";
import { useReducedMotion, useScroll, useTransform, motion as motion$1 } from "motion/react";
const slideContent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.35
    }
  }
};
const slideItem = {
  hidden: {
    opacity: 0,
    y: 26
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE
    }
  }
};
const heroImage = "/images/hero/hero_images_impremerier_casa.png";
const subImages = [
  "/images/hero/hero_images_impremerier_casa2.png",
  "/images/hero/hero_images_impremerier_casa3.png",
  "/images/hero/hero_images_impremerier_casa4.png",
  "/images/hero/hero_images_impremerier_casa5.png"
];
const brandIcons = [
  {
    image: "/images/webprint/icon-print.svg",
    title: "Impression Publicitaire",
    text: "Flyers, dépliants, cartes de visite",
    href: "/impression-numerique"
  },
  {
    image: "/images/webprint/icon-design.svg",
    title: "Design Graphique",
    text: "Logo, identité visuelle, maquettes",
    href: "/design-graphique"
  },
  {
    image: "/images/webprint/icon-large-format.svg",
    title: "Grand Format & Bâches",
    text: "Bâches, roll-up, palissades",
    href: "/impression-grand-format"
  },
  {
    image: null,
    title: "Habillage Véhicule",
    text: "Covering, marquage de flottes",
    href: "/habillage-vehicule"
  }
];
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Imprimerie à Casablanca & grand format",
      subtitle: "webprint.ma",
      description: "Votre imprimerie à Casablanca, de la création à la pose : impression numérique, bâches publicitaires, adhésifs vinyle, habillage de véhicules et de vitrines.",
      cta: "Découvrir nos produits"
    },
    {
      title: "Impression grand format & habillage publicitaire à Casablanca",
      subtitle: "webprint.ma",
      description: "Spécialiste de l’impression sur bâche et vinyle adhésif à Casablanca, Webprint réalise vos palissades de chantier, habillages de véhicules et supports publicitaires grand format. Des solutions d’impression professionnelles pour renforcer la visibilité de votre entreprise.",
      cta: "Demander un devis"
    }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-alidade-navy relative w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative w-full",
        role: "region",
        "aria-roledescription": "carrousel",
        "aria-label": "Nos solutions d'impression",
        children: [
          slides.map((slide, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              hidden: index !== currentSlide,
              "aria-label": `${index + 1} sur ${slides.length}`,
              className: index === currentSlide ? "flex w-full flex-col lg:min-h-[540px] lg:flex-row" : "hidden",
              children: [
                /* @__PURE__ */ jsx("div", { className: "site-title-container bg-alidade-dark relative flex min-h-[340px] w-full flex-col justify-center px-6 py-10 text-white sm:px-12 sm:py-12 lg:w-[45%] lg:px-12 xl:px-16", children: /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "relative space-y-5",
                    variants: slideContent,
                    initial: "hidden",
                    animate: index === currentSlide ? "visible" : "hidden",
                    children: [
                      /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          variants: slideItem,
                          className: "flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "bg-brand-cyan h-0.5 w-8" }),
                            /* @__PURE__ */ jsx("span", { className: "text-brand-cyan text-lg font-semibold", children: slide.subtitle })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        motion.h1,
                        {
                          variants: slideItem,
                          className: "site-title max-w-lg font-bold text-white",
                          children: [
                            slide.title.split("&")[0],
                            slide.title.includes("&") && /* @__PURE__ */ jsxs("span", { className: "block", children: [
                              "&",
                              slide.title.split("&")[1]
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.p,
                        {
                          variants: slideItem,
                          className: "site-text max-w-lg text-gray-300",
                          children: slide.description
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          variants: slideItem,
                          className: "pt-4",
                          children: /* @__PURE__ */ jsxs(
                            Link,
                            {
                              href: index === 0 ? "/services" : "/devis",
                              className: "brand-button",
                              id: `hero-cta-btn-${index}`,
                              children: [
                                /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: slide.cta }),
                                /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
                              ]
                            }
                          )
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "relative grid h-[320px] w-full grid-cols-12 gap-[2px] bg-white lg:h-auto lg:min-h-[540px] lg:w-[55%]", children: [
                  /* @__PURE__ */ jsx("div", { className: "relative col-span-7 h-full overflow-hidden", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: heroImage,
                      alt: "Imprimerie à Casablanca webprint.ma : supports imprimés et grand format",
                      className: "absolute inset-0 h-full w-full object-cover",
                      fetchPriority: "high"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-5 grid h-full min-h-0 grid-cols-2 grid-rows-2 gap-[2px]", children: subImages.map((item, key) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "relative min-h-0 overflow-hidden bg-gray-100",
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: item,
                          alt: `Impression grand format et numérique à Casablanca - réalisation ${key + 1}`,
                          className: "absolute inset-0 h-full w-full object-cover",
                          loading: "lazy"
                        }
                      )
                    },
                    key
                  )) })
                ] })
              ]
            },
            slide.title
          )),
          /* @__PURE__ */ jsxs("div", { className: "bg-alidade-dark flex h-14 items-center justify-center gap-5 border-b border-white/10", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: prevSlide,
                className: "flex h-11 w-11 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white",
                "aria-label": "Diapositive précédente",
                title: "Diapositive précédente",
                id: "hero-prev-btn",
                children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: slides.map((slide, index) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setCurrentSlide(index),
                "aria-label": `Afficher : ${slide.title}`,
                "aria-pressed": index === currentSlide,
                className: "group flex h-11 w-11 items-center justify-center rounded-md",
                id: `slide-indicator-${index}`,
                children: /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `h-1 w-7 rounded-full transition-colors ${index === currentSlide ? "bg-brand-cyan" : "bg-white/30 group-hover:bg-white/60"}`
                  }
                )
              },
              slide.title
            )) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: nextSlide,
                className: "flex h-11 w-11 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white",
                "aria-label": "Diapositive suivante",
                title: "Diapositive suivante",
                id: "hero-next-btn",
                children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-20 border-b border-gray-100 bg-white py-6", children: /* @__PURE__ */ jsx("div", { className: "mx-auto site-container px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Stagger, { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: brandIcons.map((item) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: item.href,
        className: "group flex h-full items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-50", children: item.image ? /* @__PURE__ */ jsx(
            "img",
            {
              src: item.image,
              alt: "",
              className: "h-16 w-16 object-contain",
              loading: "lazy"
            }
          ) : /* @__PURE__ */ jsx(
            Gift,
            {
              size: 28,
              className: "text-brand-blue",
              strokeWidth: 1.5,
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("h3", { className: "site-label text-alidade-navy group-hover:text-brand-blue font-semibold", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "site-text-small mt-1 text-gray-500", children: item.text })
          ] })
        ]
      }
    ) }, item.title)) }) }) })
  ] });
}
const FEATURED_SLUGS = ["impression-numerique", "impression-grand-format", "habillage-vehicule", "industrie-publicitaire"];
const featured = FEATURED_SLUGS.map((slug) => services.find((s) => s.slug === slug)).filter((s) => s !== void 0);
function MetierCard({ service, index }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.35 },
      variants: {
        hidden: { opacity: 0, y: 48 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } }
      },
      children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: serviceUrl(service.slug),
          className: "group hover:border-brand-blue/25 flex min-h-[7.5rem] items-stretch overflow-hidden rounded-lg border border-gray-100 bg-gray-50 transition-colors hover:bg-white sm:min-h-[8.5rem]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "serif-display group-hover:text-brand-blue flex w-16 shrink-0 items-center justify-center text-3xl font-bold text-gray-300 transition-colors duration-300 sm:w-24 sm:text-4xl", children: String(index + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-grow flex-col justify-center py-5 pr-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "site-subheading text-alidade-navy font-semibold", children: service.title }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "overflow-hidden",
                  variants: {
                    hidden: { height: 0, opacity: 0, marginTop: 0 },
                    visible: { height: "auto", opacity: 1, marginTop: 4, transition: { duration: 0.7, delay: 0.3, ease: EASE } }
                  },
                  children: /* @__PURE__ */ jsx("p", { className: "site-text-small text-gray-500", children: service.description })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative hidden w-2/5 max-w-xs shrink-0 overflow-hidden sm:block", children: [
              /* @__PURE__ */ jsx(ServiceImage, { service, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-50/40" }),
              /* @__PURE__ */ jsx("span", { className: "group-hover:bg-brand-blue text-brand-blue absolute top-1/2 right-4 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-colors group-hover:text-white", children: /* @__PURE__ */ jsx(ArrowRight, { size: 17, className: "transition-transform duration-300 group-hover:translate-x-0.5" }) })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-alidade-navy mr-4 flex items-center self-center sm:hidden", children: /* @__PURE__ */ jsx(ArrowRight, { size: 18 }) })
          ]
        }
      )
    }
  );
}
function MetiersSection() {
  return /* @__PURE__ */ jsx("section", { className: "border-t border-gray-100 bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx(Reveal, { className: "space-y-3 text-center", children: /* @__PURE__ */ jsx("h2", { className: "site-heading text-alidade-navy serif-display font-bold", children: "Tout pour faire bonne impression à Casablanca" }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 space-y-6", children: featured.map((service, index) => /* @__PURE__ */ jsx(MetierCard, { service, index }, service.slug)) }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-12 text-center", delay: 0.15, children: /* @__PURE__ */ jsxs(Link, { href: "/services", className: "brand-outline-button", children: [
      /* @__PURE__ */ jsx("span", { children: "Voir tous nos services" }),
      /* @__PURE__ */ jsx(ArrowRight, { size: 15 })
    ] }) })
  ] }) });
}
const ServiceCard = ({ number, title, icon, description, subDescription, color, bgImage, path }) => {
  const colorVariants = {
    blue: { border: "border-brand-blue", icon: "bg-brand-blue/5 text-brand-blue", line: "bg-brand-blue" },
    cyan: { border: "border-brand-cyan", icon: "bg-brand-cyan/10 text-[#087c8b]", line: "bg-brand-cyan" },
    pink: { border: "border-brand-pink", icon: "bg-brand-pink/5 text-alidade-gold-dark", line: "bg-brand-pink" }
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { y: -3 },
      transition: { type: "spring", stiffness: 300, damping: 22 },
      className: `relative flex h-full flex-col overflow-hidden rounded-lg border-b-2 bg-white shadow-sm ${colorVariants[color].border}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "z-10 flex items-start justify-between p-8", children: [
          /* @__PURE__ */ jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-lg ${colorVariants[color].icon}`, children: icon }),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-3xl font-bold text-gray-200", "aria-hidden": "true", children: number })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-0 right-0 h-48 w-full opacity-10", children: bgImage ? /* @__PURE__ */ jsx("img", { src: bgImage, alt: "", className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-gradient-to-br from-transparent to-current opacity-20" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-grow px-8 pb-20", children: [
          /* @__PURE__ */ jsx("h3", { className: "site-subheading text-alidade-navy mb-3 font-semibold", children: title }),
          /* @__PURE__ */ jsx("div", { className: `mb-6 h-0.5 w-8 ${colorVariants[color].line}` }),
          /* @__PURE__ */ jsxs("div", { className: "site-prose", children: [
            /* @__PURE__ */ jsx("p", { className: "site-text text-gray-600", children: description }),
            /* @__PURE__ */ jsx("p", { className: "site-text text-gray-500", children: subDescription })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-8 bottom-6", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: path,
            "aria-label": `En savoir plus : ${title}`,
            title: `En savoir plus : ${title}`,
            className: "text-brand-blue hover:bg-brand-blue flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:text-white",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
          }
        ) })
      ]
    }
  );
};
const EngagementSection = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-slate-50 px-4 pt-10 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container", children: [
    /* @__PURE__ */ jsx(Reveal, { className: "mb-16 text-center", children: /* @__PURE__ */ jsx("h2", { className: "site-heading text-alidade-navy serif-display font-bold", children: "Votre imprimerie à Casablanca, de l'idée à l'impression" }) }),
    /* @__PURE__ */ jsxs(Stagger, { stagger: 0.15, className: "mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx(
        ServiceCard,
        {
          number: "01",
          title: "Qui sommes-nous ?",
          icon: /* @__PURE__ */ jsx(User, { size: 28 }),
          color: "blue",
          description: "webprint.ma est une imprimerie professionnelle à Casablanca au service des entreprises, commerces et agences.",
          subDescription: "Impression numérique, impression grand format, habillage de véhicules et de vitrines, design graphique : un seul interlocuteur pour tous vos supports.",
          path: "/apropos"
        }
      ) }),
      /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx(
        ServiceCard,
        {
          number: "02",
          title: "Notre atelier d'impression",
          icon: /* @__PURE__ */ jsx(Home, { size: 28 }),
          color: "cyan",
          description: "Papier, bâche, vinyle ou PVC : nous choisissons avec vous le bon support, les bonnes couleurs et la bonne finition.",
          subDescription: "Du fichier à la pose, chaque impression est contrôlée pour un rendu net, durable et fidèle à votre image de marque.",
          path: "/apropos"
        }
      ) }),
      /* @__PURE__ */ jsx(StaggerItem, { className: "h-full", children: /* @__PURE__ */ jsx(
        ServiceCard,
        {
          number: "03",
          title: "Une idée, trois étapes",
          icon: /* @__PURE__ */ jsx(Award, { size: 28 }),
          color: "pink",
          description: "1. On échange sur votre projet. 2. On prépare les fichiers et vous validez le BAT. 3. On imprime, on façonne et on pose.",
          subDescription: "Salon, campagne, chantier ou point de vente : nous respectons vos délais et votre budget, avec un devis clair et rapide.",
          path: "/services"
        }
      ) })
    ] })
  ] }) });
};
const stackRotations = [-10, 6, 10, 5, -4, -9];
function SpreadCard({ item, index, progress, compact }) {
  const columns = compact ? 2 : 3;
  const targetX = compact ? 26 + index % columns * 48 : 18 + index % columns * 32;
  const targetY = compact ? 18 + Math.floor(index / columns) * 32 : 18 + Math.floor(index / columns) * 64;
  const left = useTransform(progress, [0, 1], ["50%", `${targetX}%`]);
  const top = useTransform(progress, [0, 1], ["50%", `${targetY}%`]);
  const rotate = useTransform(progress, [0, 1], [stackRotations[index] ?? 0, index % 2 === 0 ? -2 : 2]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  return /* @__PURE__ */ jsx(
    motion$1.figure,
    {
      className: "stack-spread-card",
      style: { left, top, rotate, scale, translateX: "-50%", translateY: "-50%", zIndex: index + 1 },
      children: /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async", draggable: false })
    }
  );
}
function StackSpread({ images }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [compact, setCompact] = useState(false);
  const [shortScreen, setShortScreen] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, 0.08, 0.8, 1], [0, 0, 1, 1]);
  const titleOpacity = useTransform(progress, [0.1, 0.65], [0, 1]);
  const isStatic = Boolean(reduceMotion || shortScreen);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const short = window.matchMedia("(max-height: 650px)");
    const update = () => {
      setCompact(mobile.matches);
      setShortScreen(short.matches);
    };
    update();
    mobile.addEventListener("change", update);
    short.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      short.removeEventListener("change", update);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      id: "galerie-accueil",
      "aria-labelledby": "gallery-heading",
      className: `stack-spread${isStatic ? " stack-spread-static" : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: "stack-spread-stage", children: [
        /* @__PURE__ */ jsxs(motion$1.div, { className: "stack-spread-heading", style: { opacity: isStatic || compact ? 1 : titleOpacity }, children: [
          /* @__PURE__ */ jsx("span", { className: "site-text-small font-semibold text-brand-blue", children: "Galerie" }),
          /* @__PURE__ */ jsxs("h2", { id: "gallery-heading", className: "site-heading mt-2 font-bold text-alidade-navy", children: [
            "Notre savoir-faire ",
            /* @__PURE__ */ jsx("span", { className: "text-brand-blue", children: "en images." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "site-text mt-3 text-gray-600", children: "De l'impression aux finitions, le soin du détail." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "stack-spread-images", children: images.map((item, index) => isStatic ? /* @__PURE__ */ jsx("figure", { className: "stack-spread-card", children: /* @__PURE__ */ jsx("img", { src: item.src, alt: item.alt, loading: "lazy", decoding: "async" }) }, item.src) : /* @__PURE__ */ jsx(SpreadCard, { item, index, progress, compact }, item.src)) })
      ] })
    }
  );
}
const galleryImages = [
  { src: "/images/gallery/image1.png", alt: "Contrôle d'une feuille imprimée à la sortie de la presse" },
  { src: "/images/gallery/image2.png", alt: "Finition des supports dans l'atelier d'impression" },
  { src: "/images/gallery/image3.png", alt: "Cartes de visite, brochures et supports de communication" },
  { src: "/images/gallery/image4.png", alt: "Rouleaux d'une presse d'impression couleur" },
  { src: "/images/gallery/image5.png", alt: "Feuilles de papier et massicot de finition" },
  { src: "/images/gallery/image6.png", alt: "Imprimante grand format en production" }
];
function GallerySpread() {
  return /* @__PURE__ */ jsx(StackSpread, { images: galleryImages });
}
const legacyTabRoutes = {
  apropos: "/apropos",
  services: "/services",
  gallery: "/galerie",
  configurator: "/configurateur",
  devis: "/devis",
  contact: "/contact"
};
function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam && legacyTabRoutes[tabParam]) {
      router.visit(legacyTabRoutes[tabParam], { replace: true });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "animate-in fade-in flex-grow duration-500", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(EngagementSection, {}),
      /* @__PURE__ */ jsx(MetiersSection, {}),
      /* @__PURE__ */ jsx(GallerySpread, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Welcome() {
  const { appUrl } = usePage().props;
  const siteUrl = appUrl.replace(/\/$/, "");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SeoHead,
      {
        ...pageSeo.home,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "webprint.ma",
          url: siteUrl,
          image: `${siteUrl}/images/webprint/hero-print-studio.png`,
          areaServed: ["Casablanca", "Maroc"],
          description: "Imprimerie à Casablanca : impression numérique, grand format, bâches, adhésifs vinyle, habillage de véhicules et de vitrines.",
          telephone: "05 22 48 44 25",
          serviceType: ["Impression numérique", "Impression grand format", "Impression sur bâche", "Adhésif vinyle", "Habillage de véhicule", "Vitrophanie", "Design graphique"]
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(App, {}) })
  ] });
}
export {
  Welcome as default
};
