import { jsx, jsxs } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import { services, serviceUrl, seo } from "./services-BP0CemjA.js";
import { Link, usePage, Head } from "@inertiajs/react";
import { Phone, MapPin, Mail, Award, Handshake, ShieldCheck, Facebook, Instagram, Linkedin, ChevronDown, ArrowUpRight, X, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const EASE = [0.22, 1, 0.36, 1];
const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } }
});
function Reveal({ children, className, delay = 0, y = 28, amount = 0.2, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return /* @__PURE__ */ jsx(
    Tag,
    {
      className,
      initial: { opacity: 0, y: reduce ? 0 : y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount },
      transition: { duration: 0.7, delay, ease: EASE },
      children
    }
  );
}
function Stagger({ children, className, stagger = 0.12, delay = 0, amount = 0.15 }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount },
      variants: staggerContainer(stagger, delay),
      children
    }
  );
}
function StaggerItem({ children, className, y = 28 }) {
  const reduce = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } }
  };
  return /* @__PURE__ */ jsx(motion.div, { className, variants, children });
}
const site = {
  name: "webprint.ma",
  phone: "05 22 48 44 25",
  phoneHref: "tel:0522484425",
  // Numero WhatsApp au format international, sans + ni espaces.
  whatsapp: "212660419305",
  whatsappMessage: "Bonjour webprint.ma, je souhaite obtenir des informations sur vos services d impression.",
  email: "contact@webprint.ma",
  address: "N 3 Av 2 Mars, 5eme etage, coin Zerktouni, Rond point d'Europe, Casablanca - Maroc",
  mapEmbedUrl: "https://maps.google.com/maps?q=Rond%20point%20d%27Europe%20Casablanca%20Maroc&z=15&output=embed",
  // Renseigner une URL pour faire apparaitre l'icone correspondante (vide = icone masquee).
  socials: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
};
function whatsappUrl() {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
}
const aboutCraftHero = "/images/qui-sommes-nous/atelier-finition.png";
const logoImage = "/logo.svg";
const quoteBannerImage = "/images/bannieres/menuiserie-Bois2-final.webp";
const socialLinks = [
  {
    href: site.socials.facebook,
    icon: /* @__PURE__ */ jsx(Facebook, { size: 18 }),
    label: "Facebook"
  },
  {
    href: site.socials.instagram,
    icon: /* @__PURE__ */ jsx(Instagram, { size: 18 }),
    label: "Instagram"
  },
  {
    href: site.socials.linkedin,
    icon: /* @__PURE__ */ jsx(Linkedin, { size: 18 }),
    label: "LinkedIn"
  }
].filter((s) => s.href);
const Footer = () => {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: "\r\n                relative\r\n                overflow-hidden\r\n                bg-[url('/images/bg-footer.png')]\r\n                bg-cover\r\n                bg-center\r\n                bg-no-repeat\r\n                text-white\r\n            ",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "\r\n                    pointer-events-none\r\n                    absolute inset-0\r\n                  \r\n                "
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "\r\n                    relative z-10\r\n                    mx-auto\r\n                    flex\r\n                    max-w-7xl\r\n                    flex-col\r\n                    lg:flex-row\r\n                ",
            children: [
              /* @__PURE__ */ jsxs(
                Reveal,
                {
                  className: "\r\n                        flex\r\n                        w-full\r\n                        flex-col\r\n                        justify-center\r\n                        p-8\r\n                        lg:w-[38%]\r\n                        lg:px-12\r\n                        xl:p-12\r\n                    ",
                  amount: 0.15,
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: logoImage,
                        alt: "Logo webprint.ma",
                        className: "\r\n                                h-auto\r\n                                w-60\r\n                                max-w-full\r\n                                rounded-lg\r\n                                bg-white\r\n                                px-3\r\n                                py-2\r\n                                shadow-lg\r\n                            ",
                        loading: "lazy",
                        decoding: "async"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("p", { className: "site-text-small mb-8 max-w-sm text-gray-300", children: [
                      "Imprimerie et communication visuelle à Casablanca.",
                      /* @__PURE__ */ jsx("br", {}),
                      "Nous transformons vos idées en supports visibles et mémorables."
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(Phone, { className: "text-alidade-gold h-5 w-5 shrink-0" }),
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: site.phoneHref,
                            className: "\r\n                                    site-text-small\r\n                                    text-gray-300\r\n                                    transition-colors\r\n                                    hover:text-white\r\n                                ",
                            children: site.phone
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(MapPin, { className: "text-alidade-gold h-5 w-5 shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "site-text-small text-gray-300", children: site.address })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(Mail, { className: "text-alidade-gold h-5 w-5 shrink-0" }),
                        /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: `mailto:${site.email}`,
                            className: "\r\n                                    site-text-small\r\n                                    min-w-0\r\n                                    text-gray-300\r\n                                    transition-colors\r\n                                    hover:text-white\r\n                                ",
                            children: site.email
                          }
                        )
                      ] })
                    ] }),
                    socialLinks.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-8 flex gap-3", children: socialLinks.map((s) => /* @__PURE__ */ jsx(
                      SocialCircle,
                      {
                        href: s.href,
                        label: s.label,
                        icon: s.icon
                      },
                      s.label
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Stagger,
                {
                  stagger: 0.15,
                  className: "\r\n                        grid\r\n                        flex-1\r\n                        grid-cols-1\r\n                        items-center\r\n                        border-t\r\n                        border-white/10\r\n                        md:grid-cols-3\r\n                        lg:border-t-0\r\n                        lg:border-l\r\n                    ",
                  children: [
                    /* @__PURE__ */ jsx(
                      FeatureItem,
                      {
                        icon: /* @__PURE__ */ jsx(
                          Award,
                          {
                            className: "\r\n                                    text-alidade-gold\r\n                                    h-10 w-10\r\n                                    lg:h-16 lg:w-14\r\n                                ",
                            strokeWidth: 1
                          }
                        ),
                        title: "QUALITÉ",
                        description: "Des supports adaptés et des finitions soignées."
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      FeatureItem,
                      {
                        icon: /* @__PURE__ */ jsx(
                          Handshake,
                          {
                            className: "\r\n                                    text-alidade-gold\r\n                                    h-10 w-10\r\n                                    lg:h-16 lg:w-16\r\n                                ",
                            strokeWidth: 1
                          }
                        ),
                        title: "ENGAGEMENT",
                        description: "Respect des délais et accompagnement personnalisé.",
                        hasBorder: true
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      FeatureItem,
                      {
                        icon: /* @__PURE__ */ jsx(
                          ShieldCheck,
                          {
                            className: "\r\n                                    text-alidade-gold\r\n                                    h-10 w-10\r\n                                    lg:h-16 lg:w-16\r\n                                ",
                            strokeWidth: 1
                          }
                        ),
                        title: "CONFIANCE",
                        description: "Une équipe print et conseil à votre service."
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("nav", { "aria-label": "Liens du pied de page", className: "relative z-10 border-t border-white/10 bg-[#0d1a2d]/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-6 px-8 py-8 lg:flex-row lg:items-start lg:gap-12 lg:px-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "site-label mb-4 font-bold uppercase", children: "Nos services" }),
            /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3", children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: serviceUrl(service.slug), className: "site-text-small text-gray-300 transition-colors hover:text-white", children: service.title }) }, service.slug)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "site-label mb-4 font-bold uppercase", children: "Ressources" }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: [
              ["/articles", "Blog"],
              ["/apropos", "À propos"],
              ["/devis", "Demander un devis"],
              ["/contact", "Contact"]
            ].map(([href, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href, className: "site-text-small text-gray-300 transition-colors hover:text-white", children: label }) }, href)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "\r\n                    relative z-10\r\n                    border-t\r\n                    border-white/10\r\n                    bg-[#0d1a2d]/70\r\n                    py-6\r\n                    backdrop-blur-sm\r\n                ",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "\r\n                        container mx-auto\r\n                        flex flex-col\r\n                        items-center\r\n                        justify-center\r\n                        gap-2\r\n                        px-6\r\n                        md:flex-row\r\n                    ",
                children: /* @__PURE__ */ jsxs("p", { className: "site-text-small text-center text-gray-300", children: [
                  "© ",
                  (/* @__PURE__ */ new Date()).getFullYear(),
                  " webprint.ma. Tous droits réservés."
                ] })
              }
            )
          }
        )
      ]
    }
  );
};
const FeatureItem = ({
  icon,
  title,
  description,
  hasBorder
}) => /* @__PURE__ */ jsxs(
  StaggerItem,
  {
    className: `
            flex
            min-w-0
            flex-col
            items-center
            px-5
            py-10
            text-center
            ${hasBorder ? "border-white/10 md:border-x" : ""}
        `,
    children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6", children: icon }),
      /* @__PURE__ */ jsx("h3", { className: "site-label mb-4 font-bold uppercase", children: title }),
      /* @__PURE__ */ jsx("p", { className: "site-text-small max-w-[220px] text-gray-300", children: description })
    ]
  }
);
const SocialCircle = ({
  icon,
  href,
  label
}) => /* @__PURE__ */ jsx(
  motion.a,
  {
    href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    whileHover: {
      scale: 1.15,
      y: -2
    },
    whileTap: {
      scale: 0.95
    },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 18
    },
    className: "\r\n            hover:text-alidade-gold\r\n            hover:border-alidade-gold\r\n            flex\r\n            h-10\r\n            w-10\r\n            items-center\r\n            justify-center\r\n            rounded-full\r\n            border\r\n            border-white/20\r\n            bg-white/5\r\n            text-gray-300\r\n            backdrop-blur-sm\r\n            transition-colors\r\n        ",
    children: icon
  }
);
const WhatsAppIcon = ({ size = 26 }) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 32 32", width: size, height: size, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.24 1.63h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.66zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.78 10.61-10.67 10.61zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" }) });
function WhatsAppButton() {
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href: whatsappUrl(),
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Contacter webprint.ma sur WhatsApp",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      whileHover: { scale: 1.12 },
      whileTap: { scale: 0.94 },
      transition: { type: "spring", stiffness: 260, damping: 18, delay: 0.6 },
      className: "fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl",
      children: /* @__PURE__ */ jsx(WhatsAppIcon, {})
    }
  );
}
const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/apropos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];
const servicePaths = services.map((service) => serviceUrl(service.slug));
function isActive(href, currentPath) {
  if (href === "/") return currentPath === "/";
  if (href === "/services") {
    return currentPath === "/services" || servicePaths.includes(currentPath);
  }
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { url } = usePage();
  const currentPath = url.split(/[?#]/)[0];
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      var _a;
      if (event.key === "Escape") {
        setIsOpen(false);
        (_a = menuButtonRef.current) == null ? void 0 : _a.focus();
      }
    };
    const handleOutsideClick = (event) => {
      var _a;
      if (!((_a = headerRef.current) == null ? void 0 : _a.contains(event.target))) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxs("header", { ref: headerRef, className: "relative z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-gray-100 bg-gray-50 px-4 text-sm text-gray-600 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-10 text-md  flex-wrap items-center justify-center gap-x-5 sm:justify-start", children: [
      /* @__PURE__ */ jsxs("a", { href: site.phoneHref, className: "hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors", children: [
        /* @__PURE__ */ jsx(Phone, { size: 13, className: "text-brand-blue", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { children: site.phone })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: `mailto:${site.email}`, className: "hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors", children: [
        /* @__PURE__ */ jsx(Mail, { size: 13, className: "text-brand-blue", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { children: site.email })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "border-b border-gray-100 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-20 site-container items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", onClick: () => setIsOpen(false), className: "shrink-0", "aria-label": "webprint.ma - Accueil", children: /* @__PURE__ */ jsx("img", { src: "/logo.svg", alt: "Logo webprint.ma", width: "920", height: "220", className: "h-auto w-[210px] max-w-full sm:w-[240px]" }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-1 lg:flex", "aria-label": "Navigation principale", children: navItems.map((item) => {
        const linkClass = `relative flex min-h-12 items-center gap-1 rounded-md px-3 text-lg font-semibold transition-colors xl:px-4 ${isActive(item.href, currentPath) ? "text-brand-blue after:bg-brand-cyan after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5" : "hover:text-brand-blue text-gray-600 hover:bg-gray-50"}`;
        if (item.href !== "/services") {
          return /* @__PURE__ */ jsx(
            Link,
            {
              href: item.href,
              "aria-current": isActive(item.href, currentPath) ? "page" : void 0,
              className: linkClass,
              id: `nav-link-${item.href.replace("/", "") || "accueil"}`,
              children: item.label
            },
            item.href
          );
        }
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setServicesOpen(true),
            onMouseLeave: () => setServicesOpen(false),
            onFocus: () => setServicesOpen(true),
            onBlur: (event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
            },
            onKeyDown: (event) => {
              if (event.key === "Escape") setServicesOpen(false);
            },
            children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: item.href,
                  "aria-current": isActive(item.href, currentPath) ? "page" : void 0,
                  "aria-haspopup": "true",
                  "aria-expanded": servicesOpen,
                  className: linkClass,
                  id: "nav-link-services",
                  children: [
                    item.label,
                    /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: `transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`, "aria-hidden": "true" })
                  ]
                }
              ),
              servicesOpen && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-1/2 z-50 w-[36rem] -translate-x-1/2 pt-2", children: /* @__PURE__ */ jsxs("ul", { className: "grid grid-cols-2 gap-1 rounded-lg border border-gray-100 bg-white p-3 shadow-xl", children: [
                services.map((service) => {
                  const Icon = service.icon;
                  const href = serviceUrl(service.slug);
                  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      href,
                      onClick: () => setServicesOpen(false),
                      "aria-current": currentPath === href ? "page" : void 0,
                      className: `flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium transition-colors ${currentPath === href ? "bg-brand-blue/5 text-brand-blue" : "hover:text-brand-blue text-gray-700 hover:bg-gray-50"}`,
                      children: [
                        /* @__PURE__ */ jsx(Icon, { size: 18, className: "text-brand-blue shrink-0", "aria-hidden": "true" }),
                        service.title
                      ]
                    }
                  ) }, service.slug);
                }),
                /* @__PURE__ */ jsx("li", { className: "col-span-2 mt-1 border-t border-gray-100 pt-2", children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: "/services",
                    onClick: () => setServicesOpen(false),
                    className: "text-brand-blue flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50",
                    children: [
                      "Voir tous nos services",
                      /* @__PURE__ */ jsx(ArrowUpRight, { size: 15, "aria-hidden": "true" })
                    ]
                  }
                ) })
              ] }) })
            ]
          },
          item.href
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "ml-auto flex shrink-0 items-center gap-3 lg:ml-0", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/devis",
            className: "brand-button hidden sm:inline-flex",
            "aria-current": isActive("/devis", currentPath) ? "page" : void 0,
            id: "devis-btn-nav",
            children: [
              /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander un devis" }),
              /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            ref: menuButtonRef,
            type: "button",
            onClick: () => setIsOpen((open) => !open),
            className: "text-brand-blue flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden",
            "aria-label": isOpen ? "Fermer le menu" : "Ouvrir le menu",
            "aria-expanded": isOpen,
            "aria-controls": "mobile-navigation",
            id: "mobile-menu-toggle",
            children: isOpen ? /* @__PURE__ */ jsx(X, { size: 23 }) : /* @__PURE__ */ jsx(Menu, { size: 23 })
          }
        )
      ] })
    ] }) }),
    isOpen && /* @__PURE__ */ jsxs(
      "nav",
      {
        id: "mobile-navigation",
        "aria-label": "Navigation mobile",
        className: "absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-8rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden",
        children: [
          navItems.map((item) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: item.href,
                onClick: () => setIsOpen(false),
                "aria-current": isActive(item.href, currentPath) ? "page" : void 0,
                className: `my-1 block rounded-md border-l-2 px-4 py-3.5 text-lg font-semibold transition-colors ${isActive(item.href, currentPath) ? "border-brand-cyan bg-brand-blue/5 text-brand-blue" : "hover:text-brand-blue border-transparent text-gray-600 hover:bg-gray-50"}`,
                id: `mobile-nav-link-${item.href.replace("/", "") || "accueil"}`,
                children: item.label
              }
            ),
            item.href === "/services" && /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setMobileServicesOpen((open) => !open),
                  "aria-expanded": mobileServicesOpen,
                  "aria-controls": "mobile-services-list",
                  className: "hover:text-brand-blue flex w-full items-center justify-between rounded-md px-4 py-2 text-base font-medium text-gray-500",
                  children: [
                    "Nos ",
                    services.length,
                    " services",
                    /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`, "aria-hidden": "true" })
                  ]
                }
              ),
              mobileServicesOpen && /* @__PURE__ */ jsx("ul", { id: "mobile-services-list", className: "border-l border-gray-100 pl-2", children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: serviceUrl(service.slug),
                  onClick: () => setIsOpen(false),
                  className: `block rounded-md px-4 py-2.5 text-base transition-colors ${currentPath === serviceUrl(service.slug) ? "text-brand-blue font-semibold" : "hover:text-brand-blue text-gray-600 hover:bg-gray-50"}`,
                  children: service.title
                }
              ) }, service.slug)) })
            ] })
          ] }, item.href)),
          /* @__PURE__ */ jsx("div", { className: "mt-4 border-t border-gray-100 pt-4", children: /* @__PURE__ */ jsxs(Link, { href: "/devis", onClick: () => setIsOpen(false), className: "brand-button w-full", id: "mobile-nav-devis", children: [
            /* @__PURE__ */ jsx("span", { className: "brand-button-label", children: "Demander un devis gratuit" }),
            /* @__PURE__ */ jsx("span", { className: "brand-button-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsx(ArrowUpRight, {}) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
}
const siteName = seo.siteName;
const defaultImage = seo.defaultImage;
const defaultKeywords = seo.defaultKeywords;
const pageSeo = seo.pages;
function absoluteUrl(path, baseUrl) {
  return new URL(path.replace(/^\//, ""), baseUrl).toString();
}
function imageMimeType(url) {
  var _a;
  const extension = (_a = url.split("?")[0].split(".").pop()) == null ? void 0 : _a.toLowerCase();
  if (extension === "png") return "image/png";
  if (extension === "webp") return "image/webp";
  if (extension === "gif") return "image/gif";
  return "image/jpeg";
}
function uniqueKeywords(keywords) {
  return Array.from(/* @__PURE__ */ new Set([...keywords, ...defaultKeywords])).filter(Boolean);
}
function SeoHead({
  title,
  description,
  keywords,
  image = defaultImage,
  imageAlt,
  type = "website",
  noIndex = false,
  structuredData,
  extraSchema = [],
  publishedTime,
  modifiedTime,
  canonical
}) {
  const { url } = usePage();
  const baseUrl = `${seo.siteUrl}/`;
  const canonicalUrl = canonical || absoluteUrl(url.split("?")[0], baseUrl);
  const imageUrl = absoluteUrl(image, baseUrl);
  const robots = noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const allKeywords = uniqueKeywords(keywords);
  const schema = structuredData ?? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/", baseUrl)}#website`,
        name: siteName,
        url: absoluteUrl("/", baseUrl),
        inLanguage: "fr-MA"
      },
      {
        "@type": "LocalBusiness",
        "@id": `${absoluteUrl("/", baseUrl)}#business`,
        name: site.name,
        url: absoluteUrl("/", baseUrl),
        image: imageUrl,
        logo: absoluteUrl("/logo.svg", baseUrl),
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Casablanca",
          addressCountry: "MA"
        },
        areaServed: ["Casablanca", "Maroc"],
        priceRange: "$$",
        sameAs: Object.values(site.socials).filter(Boolean)
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        name: title,
        description,
        url: canonicalUrl,
        inLanguage: "fr-MA",
        isPartOf: { "@id": `${absoluteUrl("/", baseUrl)}#website` },
        about: { "@id": `${absoluteUrl("/", baseUrl)}#business` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl
        }
      },
      ...extraSchema
    ]
  };
  return /* @__PURE__ */ jsxs(Head, { title, children: [
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "keywords", content: allKeywords.join(", ") }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: robots }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: siteName }),
    /* @__PURE__ */ jsx("meta", { name: "publisher", content: siteName }),
    /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "MA-CAS" }),
    /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Casablanca" }),
    /* @__PURE__ */ jsx("meta", { name: "language", content: "fr-MA" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "fr_FR" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: type }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: siteName }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: imageUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: imageAlt ?? `${siteName} - ${title}` }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:type", content: imageMimeType(imageUrl) }),
    publishedTime && /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedTime }),
    modifiedTime && /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: modifiedTime }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@webprint_ma" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: imageUrl }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image:alt", content: imageAlt ?? `${siteName} - ${title}` }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) })
  ] });
}
export {
  EASE,
  Footer,
  Navbar,
  Reveal,
  SeoHead,
  Stagger,
  StaggerItem,
  aboutCraftHero,
  absoluteUrl,
  pageSeo,
  quoteBannerImage,
  site
};
