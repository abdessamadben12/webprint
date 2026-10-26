import { jsx, jsxs } from "react/jsx-runtime";
import { quoteBannerImage, Reveal, Stagger, StaggerItem, SeoHead, pageSeo, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { RefreshCw, FileText, Calendar, Trash2, UserCheck, CheckCircle, Sparkles, FolderArchive, User, Mail, Phone, ChevronDown, AlignLeft, Wallet, Upload, SearchCode, Shield, Star, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { services } from "./services-BP0CemjA.js";
import { Link } from "@inertiajs/react";
import "framer-motion";
function MyQuotes({ onNavigateToRequest }) {
  const [quotes, setQuotes] = useState([]);
  const loadQuotes = () => {
    const existingQuotesJson = localStorage.getItem("alidade_quotes");
    let existingQuotes = existingQuotesJson ? JSON.parse(existingQuotesJson) : [];
    if (existingQuotes.length === 0) {
      const defaultQuote = {
        id: "QT-829140",
        fullName: "Yasmine Benjelloun",
        email: "yasmine.b@gmail.com",
        phone: "06 61 22 33 44",
        projectType: "Impression grand format",
        description: "Agencement complet d'une cuisine ouverte de 12m². Installation d'un îlot central en Noyer d'ébéniste, façades laquées noir mat anti-traces, éclairage LED périphérique intégré sous meubles hauts. Quincaillerie Blum requise.",
        budget: "8 500 MAD",
        date: "25 Juin 2026 à 14:32",
        status: "En cours d'étude",
        estimatedCostMin: 7800,
        estimatedCostMax: 9200
      };
      defaultQuote.description = "Impression d'une bache 3x2m pour vitrine, 1 000 flyers A5 recto verso et creation d'un visuel adapte a une campagne locale.";
      existingQuotes = [defaultQuote];
      localStorage.setItem("alidade_quotes", JSON.stringify(existingQuotes));
    }
    setQuotes(existingQuotes);
  };
  useEffect(() => {
    loadQuotes();
  }, []);
  const handleDelete = (id) => {
    if (confirm("Voulez-vous vraiment supprimer cette demande de devis ?")) {
      const updated = quotes.filter((q) => q.id !== id);
      setQuotes(updated);
      localStorage.setItem("alidade_quotes", JSON.stringify(updated));
    }
  };
  const handleRefresh = () => {
    loadQuotes();
  };
  return /* @__PURE__ */ jsx("div", { className: "relative min-h-[500px] w-full bg-white", children: /* @__PURE__ */ jsx("section", { className: "bg-gray-50/50 py-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[1.5px] w-6" }),
          /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-xs font-bold tracking-[0.2em] uppercase", children: "Suivi de dossier" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-alidade-navy  text-2xl font-bold sm:text-3xl", children: "Mes Demandes de Devis" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleRefresh,
            className: "hover:text-alidade-gold flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2.5 text-gray-400 transition-colors",
            title: "Actualiser les données",
            id: "refresh-quotes-btn",
            children: /* @__PURE__ */ jsx(RefreshCw, { size: 15 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onNavigateToRequest,
            className: "bg-alidade-gold hover:bg-alidade-gold-light text-alidade-navy flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold tracking-wider uppercase shadow transition-colors",
            id: "request-new-quote-btn",
            children: "Nouvelle demande"
          }
        )
      ] })
    ] }),
    quotes.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-2xl border border-gray-100 bg-white p-8 py-16 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-300", children: /* @__PURE__ */ jsx(FileText, { size: 24 }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-alidade-navy text-sm font-bold uppercase", children: "Aucun devis enregistré" }),
        /* @__PURE__ */ jsx("p", { className: "site-text font-light text-gray-400", children: "Vous n'avez pas encore soumis de demande de devis ou de projet via nos formulaires." })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onNavigateToRequest,
          className: "bg-alidade-navy hover:bg-alidade-gold rounded-xl px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors",
          id: "empty-state-quote-btn",
          children: "Demander un devis maintenant"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-6", children: quotes.map((quote) => {
      const isPending = quote.status === "En attente";
      const isStudying = quote.status === "En cours d'étude";
      const isApproved = quote.status === "Approuvé";
      let statusBadge = "bg-amber-50 text-amber-800 border-amber-100";
      if (isStudying) statusBadge = "bg-blue-50 text-blue-800 border-blue-100";
      if (isApproved) statusBadge = "bg-emerald-50 text-emerald-800 border-emerald-100";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md",
          id: `quote-card-${quote.id}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-start justify-between gap-3 border-b border-gray-100 bg-gray-50 px-6 py-4 sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-alidade-gold bg-alidade-navy rounded px-2.5 py-1 font-mono text-xs font-bold tracking-wider text-white", children: quote.id }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-[11px] text-gray-400", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 12 }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Soumis le ",
                    quote.date
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `rounded border px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase ${statusBadge}`,
                    children: quote.status
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleDelete(quote.id),
                    className: "rounded p-1.5 text-gray-300 transition-colors hover:text-red-500",
                    title: "Supprimer cette demande",
                    id: `delete-quote-${quote.id}`,
                    children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-5 p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Détails du projet" }),
                /* @__PURE__ */ jsx("h4", { className: "text-alidade-navy font-sans text-base font-bold tracking-wide uppercase", children: quote.projectType }),
                /* @__PURE__ */ jsx("p", { className: "site-text rounded-xl border border-gray-100 bg-gray-50/50 p-4 font-light whitespace-pre-line text-gray-500", children: quote.description })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 text-xs sm:grid-cols-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold tracking-wider text-gray-400 uppercase", children: "Client" }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-navy mt-0.5 block font-medium", children: quote.fullName })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold tracking-wider text-gray-400 uppercase", children: "Téléphone" }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-navy mt-0.5 block font-mono font-medium", children: quote.phone })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-2 sm:col-span-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold tracking-wider text-gray-400 uppercase", children: "Budget estimatif" }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-navy mt-0.5 block font-medium", children: quote.budget || "Non défini" })
                ] })
              ] }),
              quote.fileName && /* @__PURE__ */ jsxs("div", { className: "bg-alidade-navy/5 flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-xs", children: [
                /* @__PURE__ */ jsx(FileText, { size: 14, className: "text-alidade-gold" }),
                /* @__PURE__ */ jsx("span", { className: "text-alidade-navy font-medium", children: quote.fileName }),
                /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-gray-400", children: [
                  "(",
                  quote.fileSize,
                  ")"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "from-alidade-navy/5 flex items-start gap-3 border-t border-gray-100 bg-gradient-to-r to-transparent px-6 py-4", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-alidade-gold/10 text-alidade-gold mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(UserCheck, { size: 14 }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase", children: [
                  /* @__PURE__ */ jsx("span", { children: "Étude Technique par : Youssef El Alami" }),
                  /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500", title: "Chargé d'affaire en ligne" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "site-text-small font-light text-gray-500", children: isPending ? "Votre dossier est en cours d'etude. Un conseiller va verifier les formats, quantites et supports avant de revenir vers vous." : "Dossier pris en charge. Nous etudions les supports d'impression, les finitions et les delais de production recommandes." })
              ] })
            ] })
          ]
        },
        quote.id
      );
    }) })
  ] }) }) });
}
function QuoteRequest({
  preFilledSummary,
  preFilledCost,
  onClearPreFill,
  onNavigateToMyQuotes
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(services[0].title);
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    if (preFilledSummary) {
      setDescription(preFilledSummary);
      setProjectType(services[0].title);
      if (preFilledCost) {
        setBudget(`${preFilledCost} MAD`);
      }
    }
  }, [preFilledSummary, preFilledCost]);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setFileSize(`${sizeInMB} MB`);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setFileSize(`${sizeInMB} MB`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !description) {
      alert("Veuillez remplir tous les champs obligatoires (*) pour soumettre.");
      return;
    }
    const newQuote = {
      id: `QT-${Math.floor(1e5 + Math.random() * 9e5)}`,
      fullName,
      email,
      phone,
      projectType,
      description,
      budget: budget || "Non défini",
      fileName: fileName || void 0,
      fileSize: fileSize || void 0,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "En attente"
    };
    const existingQuotesJson = localStorage.getItem("alidade_quotes");
    const existingQuotes = existingQuotesJson ? JSON.parse(existingQuotesJson) : [];
    existingQuotes.unshift(newQuote);
    localStorage.setItem("alidade_quotes", JSON.stringify(existingQuotes));
    setSubmittedQuote(newQuote);
    setIsSubmitted(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setBudget("");
    setFileName(null);
    setFileSize(null);
    onClearPreFill();
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-alidade-navy border-alidade-gold/10 relative overflow-hidden border-b py-16 text-white sm:py-20", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-[length:cover] bg-center opacity-10 mix-blend-overlay",
          style: { backgroundImage: `url(${quoteBannerImage})` }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto site-container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-center gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "space-y-6 lg:col-span-6", amount: 0.15, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[1.5px] w-8" }),
            /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-sm font-bold tracking-[0.25em] uppercase sm:text-xl", children: "Étude Personnalisée" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "site-title font-bold", children: [
            "Demandez Votre ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-alidade-gold font-serif", children: "Devis Gratuit" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "site-text max-w-lg text-gray-300", children: "Décrivez votre besoin d'impression, de bâches, d'habillage de véhicule ou de vitrine. Notre équipe vous prépare un estimatif clair sous 48 heures." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "border-alidade-gold/30 text-alidade-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/5", children: /* @__PURE__ */ jsx(CheckCircle, { size: 16 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-bold tracking-wider uppercase", children: "Réponse rapide" }),
                /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Sous 48 heures" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "border-alidade-gold/30 text-alidade-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/5", children: /* @__PURE__ */ jsx(Sparkles, { size: 16 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-bold tracking-wider uppercase", children: "Devis gratuit" }),
                /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Sans engagement" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "border-alidade-gold/30 text-alidade-gold flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/5", children: /* @__PURE__ */ jsx(FolderArchive, { size: 16 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "block text-xs font-bold tracking-wider uppercase", children: "Étude sur mesure" }),
                /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Adaptée à vos besoins" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-6", delay: 0.15, amount: 0.1, children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-alidade-navy relative rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl sm:p-8",
            id: "quote-request-card",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsx("h3", { className: "site-subheading text-alidade-navy font-bold", children: "Demande de Devis" }) }),
              isSubmitted && submittedQuote && /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in-95 mb-6 space-y-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800 duration-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { size: 18, className: "shrink-0 text-emerald-500" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold tracking-wider uppercase", children: [
                    "Devis enregistré sous le numéro ",
                    submittedQuote.id
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "site-text-small font-light text-emerald-700", children: "Votre dossier a bien été soumis à notre bureau d'études technique de Casablanca. Vous pouvez suivre l'avancement de cette demande dans votre tableau de bord." }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      setIsSubmitted(false);
                      onNavigateToMyQuotes();
                    },
                    className: "w-full rounded bg-emerald-600 py-2 text-[10px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-emerald-700",
                    id: "view-estimate-dashboard-btn",
                    children: "Suivre mon dossier de devis"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Nom complet *" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Ex: Youssef El Alami",
                        required: true,
                        value: fullName,
                        onChange: (e) => setFullName(e.target.value),
                        className: "focus:ring-alidade-gold focus:border-alidade-gold w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-11 text-xs outline-none focus:ring-1",
                        id: "quote-name-input"
                      }
                    ),
                    /* @__PURE__ */ jsx(User, { size: 15, className: "absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Email *" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          placeholder: "votre@email.com",
                          required: true,
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          className: "focus:ring-alidade-gold focus:border-alidade-gold w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-11 text-xs outline-none focus:ring-1",
                          id: "quote-email-input"
                        }
                      ),
                      /* @__PURE__ */ jsx(Mail, { size: 15, className: "absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Téléphone *" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "tel",
                          placeholder: "05 22 48 44 25",
                          required: true,
                          value: phone,
                          onChange: (e) => setPhone(e.target.value),
                          className: "focus:ring-alidade-gold focus:border-alidade-gold w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-11 text-xs outline-none focus:ring-1",
                          id: "quote-phone-input"
                        }
                      ),
                      /* @__PURE__ */ jsx(Phone, { size: 15, className: "absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Type de projet *" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        value: projectType,
                        onChange: (e) => setProjectType(e.target.value),
                        className: "focus:ring-alidade-gold focus:border-alidade-gold w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-10 pl-4 text-xs font-medium outline-none focus:ring-1",
                        id: "quote-type-input",
                        children: [
                          services.map((service) => /* @__PURE__ */ jsx("option", { value: service.title, children: service.title }, service.slug)),
                          /* @__PURE__ */ jsx("option", { value: "Autre", children: "Autre" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 15,
                        className: "pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Description de votre projet *" }),
                    preFilledSummary && /* @__PURE__ */ jsx("span", { className: "text-alidade-gold bg-alidade-gold/5 animate-pulse rounded px-2 py-0.5 text-[9px] font-bold", children: "Données configurateur injectées" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      "textarea",
                      {
                        placeholder: "Ex: 500 flyers A5 recto verso, cartes de visite, bâche 3x2m, covering de véhicule, vitrophanie, logo...",
                        required: true,
                        rows: 4,
                        value: description,
                        onChange: (e) => setDescription(e.target.value),
                        className: "focus:ring-alidade-gold focus:border-alidade-gold w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-11 text-xs outline-none focus:ring-1",
                        id: "quote-desc-input"
                      }
                    ),
                    /* @__PURE__ */ jsx(AlignLeft, { size: 15, className: "absolute top-4 left-4 text-gray-400" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Budget estimatif (optionnel)" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Ex: 45 000 MAD",
                        value: budget,
                        onChange: (e) => setBudget(e.target.value),
                        className: "focus:ring-alidade-gold focus:border-alidade-gold w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pr-4 pl-11 text-xs outline-none focus:ring-1",
                        id: "quote-budget-input"
                      }
                    ),
                    /* @__PURE__ */ jsx(Wallet, { size: 15, className: "absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-[10px] font-bold tracking-widest text-gray-400 uppercase", children: "Ajouter des fichiers (plans, photos...)" }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      onDragOver: handleDragOver,
                      onDrop: handleDrop,
                      onClick: () => {
                        var _a;
                        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                      },
                      className: "hover:border-alidade-gold/50 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center transition-all hover:bg-gray-50/50",
                      children: [
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "file",
                            ref: fileInputRef,
                            onChange: handleFileChange,
                            className: "hidden",
                            id: "quote-file-input"
                          }
                        ),
                        /* @__PURE__ */ jsx(Upload, { size: 18, className: "text-gray-400" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs font-light text-gray-500", children: fileName ? /* @__PURE__ */ jsxs("span", { className: "text-alidade-navy font-bold", children: [
                          fileName,
                          " ",
                          /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-light text-gray-400", children: [
                            "(",
                            fileSize,
                            ")"
                          ] })
                        ] }) : /* @__PURE__ */ jsxs("span", { children: [
                          "Glissez vos fichiers ou",
                          " ",
                          /* @__PURE__ */ jsx("span", { className: "text-alidade-gold font-bold underline", children: "choisissez un fichier" })
                        ] }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-[9px] text-gray-400", children: "Taille maximale : 15 Mo (PDF, PNG, JPG, CAD)" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "brand-button w-full", id: "quote-submit-btn", children: /* @__PURE__ */ jsx("span", { children: "ENVOYER LA DEMANDE DE DEVIS" }) }) })
              ] })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gray-50 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto site-container space-y-16 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "space-y-3 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "site-heading text-alidade-navy font-bold", children: "Pourquoi demander un devis chez webprint.ma ?" }),
        /* @__PURE__ */ jsx("div", { className: "bg-alidade-gold mx-auto h-0.5 w-16 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs(Stagger, { stagger: 0.12, className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(SearchCode, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: "Analyse détaillée" }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-gray-500", children: "Nous étudions vos formats, quantités, supports, finitions et contraintes de délai pour établir un estimatif utile." })
        ] }),
        /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(Sparkles, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: "Solutions adaptées" }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-gray-500", children: "Chaque support est conseillé selon votre objectif : visibilité, distribution, point de vente, salon ou cadeau client." })
        ] }),
        /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(Shield, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: "Rapport Qualité/Prix" }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-gray-500", children: "Nous cherchons le bon équilibre entre rendu, durabilité, délai et budget pour chaque campagne." })
        ] }),
        /* @__PURE__ */ jsxs(StaggerItem, { className: "space-y-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-alidade-navy text-alidade-gold flex h-10 w-10 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx(Star, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "site-label text-alidade-navy font-bold", children: "Accompagnement" }),
          /* @__PURE__ */ jsx("p", { className: "site-text text-gray-500", children: "Un interlocuteur suit votre dossier depuis le brief jusqu'à la validation, la production et la livraison." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Reveal, { className: "from-alidade-navy to-alidade-dark border-alidade-gold/15 flex flex-col items-center justify-between gap-6 rounded-2xl border bg-gradient-to-r p-6 text-white shadow-lg sm:p-8 md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 text-center md:text-left", children: [
          /* @__PURE__ */ jsx("span", { className: "text-alidade-gold block text-xs font-bold tracking-widest uppercase", children: "Besoin d'un conseil technique ?" }),
          /* @__PURE__ */ jsx("p", { className: "site-text max-w-xl text-gray-300", children: "Notre équipe vous guide sur le papier, le format, le marquage, la finition et la préparation de vos fichiers." })
        ] }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/contact",
            className: "hover:bg-alidade-gold text-alidade-dark flex shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300 hover:text-white",
            id: "devis-contact-btn",
            children: [
              /* @__PURE__ */ jsx("span", { children: "NOUS CONTACTER" }),
              /* @__PURE__ */ jsx(ArrowRight, { size: 13 })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function DevisPage() {
  const [showMyQuotes, setShowMyQuotes] = useState(false);
  const [preFilledSummary, setPreFilledSummary] = useState("");
  const [preFilledCost, setPreFilledCost] = useState(0);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setPreFilledSummary(
        `Bonjour,

Je sollicite un devis gratuit pour la prestation de : ${service}.

Merci de me recontacter afin de preciser les formats, quantites, supports et delais.`
      );
      window.history.replaceState({}, "", "/devis");
      return;
    }
    const summary = sessionStorage.getItem("alidade_prefill_summary");
    if (summary) {
      setPreFilledSummary(summary);
      const cost = sessionStorage.getItem("alidade_prefill_cost");
      setPreFilledCost(cost ? Number(cost) : 0);
      sessionStorage.removeItem("alidade_prefill_summary");
      sessionStorage.removeItem("alidade_prefill_cost");
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(SeoHead, { ...pageSeo.quote }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: showMyQuotes ? /* @__PURE__ */ jsx(MyQuotes, { onNavigateToRequest: () => setShowMyQuotes(false) }) : /* @__PURE__ */ jsx(
      QuoteRequest,
      {
        preFilledSummary,
        preFilledCost,
        onClearPreFill: () => {
          setPreFilledSummary("");
          setPreFilledCost(0);
        },
        onNavigateToMyQuotes: () => setShowMyQuotes(true)
      }
    ) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  DevisPage as default
};
