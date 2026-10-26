import { jsxs, jsx } from "react/jsx-runtime";
import { Stagger, StaggerItem, Reveal, SeoHead, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import "./services-BP0CemjA.js";
function BeforeAfter({ before, after, alt }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const moveTo = (clientX) => {
    var _a;
    const rect = (_a = containerRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.min(100, Math.max(0, (clientX - rect.left) / rect.width * 100)));
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      className: "relative h-full w-full cursor-ew-resize touch-none select-none",
      onPointerDown: (e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      },
      onPointerMove: (e) => {
        if (e.buttons === 1) moveTo(e.clientX);
      },
      children: [
        /* @__PURE__ */ jsx("img", { src: after, alt: alt ? `${alt} — après` : "Après", className: "absolute inset-0 h-full w-full object-cover", draggable: false }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: before,
            alt: alt ? `${alt} — avant` : "Avant",
            className: "absolute inset-0 h-full w-full object-cover",
            style: { clipPath: `inset(0 ${100 - position}% 0 0)` },
            draggable: false
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 bottom-0 z-10 w-0.5 bg-alidade-gold", style: { left: `${position}%` }, children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-alidade-gold shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-alidade-navy text-sm font-black tracking-tighter", children: "⇔" }) }) }),
        /* @__PURE__ */ jsx("span", { className: "bg-alidade-navy/80 absolute top-4 left-4 rounded px-2.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase", children: "Avant" }),
        /* @__PURE__ */ jsx("span", { className: "text-alidade-navy absolute top-4 right-4 rounded bg-alidade-gold px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase", children: "Après" })
      ]
    }
  );
}
const galleryCategories = [
  { value: "all", label: "Tous les projets" },
  { value: "cuisine", label: "Cuisines" },
  { value: "salon", label: "Salons" },
  { value: "dressing", label: "Dressings" },
  { value: "commercial", label: "Commercial" },
  { value: "construction", label: "Construction" },
  { value: "renovation", label: "Rénovation" },
  { value: "amenagement", label: "Aménagement" }
];
const galleryItems = [
  // — Cuisines —
  {
    id: "1",
    title: "Cuisine Moderne Noyer",
    category: "cuisine",
    description: "Cuisine contemporaine en noyer massif avec plan de travail fenix noir mat et électroménagers intégrés haut de gamme.",
    image: "/images/cuisines/cuisine-moderne.jpg",
    location: "Casablanca",
    year: 2024
  },
  {
    id: "2",
    title: "Cuisine Équipée Contemporaine",
    category: "cuisine",
    description: "Cuisine équipée sur-mesure avec façades laquées, îlot central et rangements optimisés jusqu’au plafond.",
    image: "/images/cuisines/cuisine-moderne-3.webp",
    location: "Casablanca",
    year: 2024
  },
  {
    id: "3",
    title: "Cuisine Design Épurée",
    category: "cuisine",
    description: "Lignes épurées, crédence en grès cérame et éclairage LED sous meubles pour un plan de travail parfaitement fonctionnel.",
    image: "/images/cuisines/cuisine-moderne-4.webp",
    location: "Rabat",
    year: 2023
  },
  // — Salons —
  {
    id: "4",
    title: "Habillage Mural Salon",
    category: "salon",
    description: "Claustra décoratif en chêne massif créant une séparation élégante entre le salon et l'espace cuisine.",
    image: "/images/agencement/agencement-et-aménagement.webp",
    location: "Casablanca",
    year: 2024
  },
  {
    id: "5",
    title: "Décoration Intérieure Salon",
    category: "salon",
    description: "Décoration intérieure complète : habillages muraux, faux plafond à gorges lumineuses et finitions peinture veloutée.",
    image: "/images/agencement/décoration_intérieure.webp",
    location: "Casablanca",
    year: 2023
  },
  {
    id: "6",
    title: "Ambiance Salon Sur-Mesure",
    category: "salon",
    description: "Aménagement chaleureux d’un séjour avec menuiseries intégrées et jeux de matières bois et pierre.",
    image: "/images/decoration-interieur.jpg",
    location: "Marrakech",
    year: 2023
  },
  // — Dressings —
  {
    id: "7",
    title: "Dressing Luxe",
    category: "dressing",
    description: "Dressing haut de gamme avec rangements optimisés, éclairage LED intégré et placards vitrés design.",
    image: "/images/cuisines/dressing-1.webp",
    location: "Marrakech",
    year: 2023
  },
  {
    id: "8",
    title: "Dressing Sur-Mesure",
    category: "dressing",
    description: "Dressing toute hauteur en panneaux mélaminés haute résistance, penderies et tiroirs à fermeture douce.",
    image: "/images/cuisines/dressing.jpg",
    location: "Casablanca",
    year: 2024
  },
  // — Commercial —
  {
    id: "9",
    title: "Agencement Commercial",
    category: "commercial",
    description: "Boutique haut de gamme avec présentoirs sur-mesure, comptoir de vente et espace d'accueil premium.",
    image: "/images/slidealidade/industrie-publicitaire.webp",
    location: "Casablanca",
    year: 2023
  },
  {
    id: "10",
    title: "Espace Professionnel",
    category: "commercial",
    description: "Agencement de bureaux avec cloisonnement modulaire acoustique et banque d’accueil haut de gamme.",
    image: "/images/agencement/agencement-et-réaménagement-image-3.webp",
    location: "Casablanca",
    year: 2024
  },
  {
    id: "11",
    title: "Showroom & Présentoirs",
    category: "commercial",
    description: "Optimisation fonctionnelle d’un espace d’exposition : présentoirs éclairés, rails lumineux et finitions laquées.",
    image: "/images/slidealidade/agencement-profesionnel.webp",
    location: "Rabat",
    year: 2022
  },
  // — Construction —
  {
    id: "12",
    title: "Rénovation Construction",
    category: "construction",
    description: "Projet de rénovation complète avec restructuration d'espace et finitions premium.",
    image: "/images/construction-rénovation-1.webp",
    location: "Rabat",
    year: 2023
  },
  {
    id: "13",
    title: "Second-Œuvre Complet",
    category: "construction",
    description: "Prise en charge du second-œuvre : cloisons, plâtrerie, électricité et finitions, avec suivi de chantier dédié.",
    image: "/images/construction-rénovation-4.webp",
    location: "Casablanca",
    year: 2023,
    beforeAfter: {
      before: "/images/Travaux-demolition-1.jpg",
      after: "/images/construction-rénovation-4.webp"
    }
  },
  {
    id: "14",
    title: "Gros Œuvre & Maçonnerie",
    category: "construction",
    description: "Travaux de démolition contrôlée et reconstruction avec redistribution complète des espaces.",
    image: "/images/construction-rénovation-6.webp",
    location: "Casablanca",
    year: 2022
  },
  // — Rénovation —
  {
    id: "15",
    title: "Réhabilitation Bâtiment",
    category: "renovation",
    description: "Réhabilitation thermique et acoustique d'un bâtiment ancien avec modernisation complète.",
    image: "/images/revetement-sol/revetement-sol-1.webp",
    location: "Fès",
    year: 2022
  },
  {
    id: "16",
    title: "Rénovation & Finitions",
    category: "renovation",
    description: "Rénovation complète d’un appartement : démolition, plâtrerie, peinture et revêtements de sol.",
    image: "/images/slidealidade/renovation-et-travaux-e-finition.webp",
    location: "Casablanca",
    year: 2024,
    beforeAfter: {
      before: "/images/Travaux-demolition-2.jpg",
      after: "/images/slidealidade/renovation-et-travaux-e-finition.webp"
    }
  },
  {
    id: "17",
    title: "Faux Plafond Lumineux",
    category: "renovation",
    description: "Faux plafond suspendu en plaques de plâtre avec gorges lumineuses LED pour un éclairage indirect moderne.",
    image: "/images/faux-plafon/faux-plafon-3.webp",
    location: "Casablanca",
    year: 2023
  },
  {
    id: "18",
    title: "Mise en Peinture Premium",
    category: "renovation",
    description: "Préparation soignée des supports, enduisage croisé et peinture veloutée de qualité professionnelle.",
    image: "/images/travaux-peinture2.webp",
    location: "Casablanca",
    year: 2024
  },
  // — Aménagement —
  {
    id: "19",
    title: "Aménagement Intérieur",
    category: "amenagement",
    description: "Aménagement complet d'espaces professionnels avec cloisonnement acoustique modulable.",
    image: "/images/agencement/agencement-et-réaménagement-image-2.webp",
    location: "Casablanca",
    year: 2022
  },
  {
    id: "20",
    title: "Menuiserie Aluminium & Vitrage",
    category: "amenagement",
    description: "Vitrage accordéon coulissant et menuiseries aluminium à rupture de pont thermique.",
    image: "/images/vitrage-accordeon-coulissant-1.webp",
    location: "Casablanca",
    year: 2023
  },
  {
    id: "21",
    title: "Pergola Bioclimatique",
    category: "amenagement",
    description: "Pergola bioclimatique à lames orientables pour profiter de votre terrasse en toute saison.",
    image: "/images/pergola-bioclimatique-1.webp",
    location: "Casablanca",
    year: 2024
  },
  {
    id: "22",
    title: "Menuiserie Bois Sur-Mesure",
    category: "amenagement",
    description: "Agencements bois sur-mesure : bibliothèques, plans de travail et portes en bois massif certifié.",
    image: "/images/alidade-Travaux-de-bois-32.webp",
    location: "Casablanca",
    year: 2023
  }
];
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = galleryCategories;
  const filteredItems = activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);
  return /* @__PURE__ */ jsxs("div", { className: "w-full bg-[#FDFCFA] text-alidade-navy", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-alidade-navy py-20 text-white sm:py-28", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-alidade-navy/50 via-alidade-navy/70 to-alidade-navy" }) }),
      /* @__PURE__ */ jsxs(Stagger, { className: "relative mx-auto site-container space-y-6 px-4 text-center sm:px-6 lg:px-8", amount: 0.3, children: [
        /* @__PURE__ */ jsx(StaggerItem, { className: "inline-block", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold tracking-[0.3em] text-alidade-gold uppercase", children: "Galerie" }) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("h1", { className: "serif-display text-4xl leading-[1.1] font-bold text-white sm:text-6xl lg:text-7xl", children: "Nos Réalisations" }) }),
        /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx("p", { className: "site-text-lead mx-auto max-w-2xl font-light text-white/75", children: "Découvrez une sélection de nos projets réalisés. Des cuisines modernes aux aménagements commerciaux, explorez la diversité de notre savoir-faire." }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-gray-100 bg-white", children: /* @__PURE__ */ jsx("div", { className: "mx-auto site-container px-4 py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Reveal, { className: "flex flex-wrap justify-center gap-3", y: 16, children: categories.map((cat) => /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => setActiveCategory(cat.value),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: `rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === cat.value ? "bg-alidade-muted text-white shadow-md" : "bg-[#F9F7F3] text-alidade-navy hover:bg-[#F3EDE4]"}`,
        children: cat.label
      },
      cat.value
    )) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto site-container px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(motion.div, { layout: true, className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filteredItems.map((item) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 },
          transition: { duration: 0.4, ease: "easeOut" },
          onClick: () => setSelectedImage(item),
          className: "group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-200 shadow-md transition-shadow duration-300 hover:shadow-xl",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
                loading: "lazy",
                decoding: "async"
              }
            ),
            item.beforeAfter && /* @__PURE__ */ jsx("span", { className: "text-alidade-navy absolute top-4 left-4 z-10 rounded-full bg-alidade-gold px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-md", children: "Avant / Après" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-alidade-navy/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold tracking-[0.2em] text-alidade-gold uppercase", children: item.category }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: item.title }),
              item.location && /* @__PURE__ */ jsxs("p", { className: "site-text-small text-white/75", children: [
                item.location,
                " • ",
                item.year
              ] })
            ] }) })
          ]
        },
        item.id
      )) }) }),
      filteredItems.length === 0 && /* @__PURE__ */ jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted", children: "Aucun projet trouvé dans cette catégorie." }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedImage && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm",
        children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.92, y: 24 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 12 },
            transition: { type: "spring", stiffness: 300, damping: 28 },
            className: "relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setSelectedImage(null),
                  className: "absolute top-4 right-4 z-10 rounded-full bg-alidade-navy/80 p-2 text-white transition-colors hover:bg-alidade-gold",
                  "aria-label": "Fermer",
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "relative aspect-video w-full overflow-hidden bg-gray-200", children: selectedImage.beforeAfter ? /* @__PURE__ */ jsx(
                BeforeAfter,
                {
                  before: selectedImage.beforeAfter.before,
                  after: selectedImage.beforeAfter.after,
                  alt: selectedImage.title
                }
              ) : /* @__PURE__ */ jsx("img", { src: selectedImage.image, alt: selectedImage.title, className: "h-full w-full object-cover", decoding: "async" }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold tracking-[0.3em] text-alidade-gold uppercase", children: selectedImage.category }),
                  /* @__PURE__ */ jsx("h2", { className: "serif-display text-4xl font-bold text-alidade-navy", children: selectedImage.title }),
                  selectedImage.location && /* @__PURE__ */ jsxs("p", { className: "site-text-small text-alidade-muted", children: [
                    selectedImage.location,
                    " • ",
                    selectedImage.year
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "site-text text-alidade-muted", children: selectedImage.description }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-gray-200 pt-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => {
                          const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
                          if (currentIndex > 0) {
                            setSelectedImage(filteredItems[currentIndex - 1]);
                          }
                        },
                        disabled: filteredItems.findIndex((item) => item.id === selectedImage.id) === 0,
                        className: "rounded-lg px-4 py-2 text-sm font-semibold text-alidade-navy transition-colors hover:bg-[#F9F7F3] disabled:cursor-not-allowed disabled:opacity-50",
                        children: "← Précédent"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => {
                          const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
                          if (currentIndex < filteredItems.length - 1) {
                            setSelectedImage(filteredItems[currentIndex + 1]);
                          }
                        },
                        disabled: filteredItems.findIndex((item) => item.id === selectedImage.id) === filteredItems.length - 1,
                        className: "rounded-lg px-4 py-2 text-sm font-semibold text-alidade-navy transition-colors hover:bg-[#F9F7F3] disabled:cursor-not-allowed disabled:opacity-50",
                        children: "Suivant →"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setSelectedImage(null),
                      className: "text-alidade-navy bg-alidade-gold hover:bg-alidade-gold-light rounded-lg px-6 py-2 text-sm font-semibold transition-colors",
                      children: "Fermer"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: "bg-alidade-navy text-white", children: /* @__PURE__ */ jsxs(Stagger, { className: "mx-auto site-container space-y-8 px-4 py-20 text-center sm:px-6 lg:px-8", amount: 0.3, children: [
      /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold tracking-[0.3em] text-alidade-gold uppercase", children: "Projet similaire?" }),
        /* @__PURE__ */ jsx("h2", { className: "serif-display text-4xl font-bold sm:text-5xl", children: "Parlons de votre projet" })
      ] }),
      /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/devis",
          className: "bg-alidade-gold hover:bg-alidade-gold-light text-alidade-navy inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Obtenir un devis gratuit" }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ]
        }
      ) })
    ] }) })
  ] });
}
function GaleriePage() {
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(
      SeoHead,
      {
        title: "Galerie webprint.ma | Realisations print et communication visuelle",
        description: "Decouvrez des exemples de supports imprimes, grand format, baches, habillages de vehicules et de vitrines realises par webprint.ma.",
        keywords: ["realisations impression Casablanca", "galerie impression grand format Maroc", "habillage vehicule Casablanca", "webprint.ma realisations"]
      }
    ),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(Gallery, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleriePage as default
};
