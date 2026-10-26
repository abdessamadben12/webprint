import { jsx, jsxs } from "react/jsx-runtime";
import { Reveal, SeoHead, pageSeo, Navbar, Footer } from "./seo-head-5-JxKdYM.js";
import { Layout, Sliders, Check, Save, Sparkles } from "lucide-react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import "framer-motion";
import "./services-BP0CemjA.js";
function Configurator({ onSendToQuote }) {
  const [projectType, setProjectType] = useState("kitchen");
  const [material, setMaterial] = useState("Chêne Massif");
  const [finish, setFinish] = useState("Vernis Mat Satiné");
  const [width, setWidth] = useState(3.5);
  const [height, setHeight] = useState(2.4);
  const [depth, setDepth] = useState(0.6);
  const [ledLighting, setLedLighting] = useState(true);
  const [pushToOpen, setPushToOpen] = useState(false);
  const [premiumFittings, setPremiumFittings] = useState(true);
  const [savedSelection, setSavedSelection] = useState(null);
  const materials = [
    { name: "Chêne Massif", factor: 1.5, desc: "Authentique, chaleureux et extrêmement durable.", colorClass: "bg-amber-100 border-amber-300" },
    { name: "Noyer Noir", factor: 1.9, desc: "Bois d'ébénisterie sombre, élégant et prestigieux.", colorClass: "bg-amber-900 border-amber-950" },
    {
      name: "Fenix NTM / Fénix",
      factor: 1.3,
      desc: "Résine mate anti-traces, toucher soyeux haut de gamme.",
      colorClass: "bg-gray-800 border-gray-900"
    },
    {
      name: "MDF Laqué Premium",
      factor: 1.2,
      desc: "Finition ultra-lisse, idéale pour les laques de couleur.",
      colorClass: "bg-white border-gray-300"
    },
    {
      name: "Mélaminé Structuré",
      factor: 0.8,
      desc: "Solution moderne, résistante aux rayures et économique.",
      colorClass: "bg-yellow-50 border-amber-200"
    }
  ];
  const finishes = [
    { name: "Vernis Mat Satiné", factor: 1 },
    { name: "Laque Haute Brillance", factor: 1.25 },
    { name: "Huile Naturelle Bio", factor: 1.1 },
    { name: "Teintée sur-mesure (Gris, Noir, etc.)", factor: 1.15 }
  ];
  const baseCostPerMeter = {
    kitchen: 3500,
    // MAD / meter
    wardrobe: 2500,
    // MAD / meter
    cladding: 1500
    // MAD / meter
  };
  const materialObj = materials.find((m) => m.name === material) || materials[0];
  const finishObj = finishes.find((f) => f.name === finish) || finishes[0];
  const baseCost = width * baseCostPerMeter[projectType];
  const dimensionMultiplier = height / 2.2;
  let finalCost = baseCost * materialObj.factor * finishObj.factor * dimensionMultiplier;
  if (ledLighting) finalCost += width * 450;
  if (pushToOpen) finalCost += 800;
  if (premiumFittings) finalCost += width * 600;
  const finalCostFormatted = Math.round(finalCost).toLocaleString("fr-FR");
  const handleExportToQuote = () => {
    const optionsList = [];
    if (ledLighting) optionsList.push("Éclairage ruban LED intégré");
    if (pushToOpen) optionsList.push("Mécanisme Push-to-Open sans poignées");
    if (premiumFittings) optionsList.push("Charnières amorties haut de gamme Blum");
    const summary = `Configurateur Alidade :
• Projet : ${projectType === "kitchen" ? "Cuisine Moderne" : projectType === "wardrobe" ? "Dressing/Placard" : "Habillage Mural"}
• Matériau : ${material} (${materialObj.desc})
• Finition : ${finish}
• Dimensions : Largeur ${width}m, Hauteur ${height}m, Profondeur ${depth}m
• Options sélectionnées : ${optionsList.join(", ") || "Aucune"}
• Estimation budgétaire calculée : ${finalCostFormatted} MAD`;
    onSendToQuote(summary, Math.round(finalCost));
    setSavedSelection("Ajouté avec succès ! Naviguez vers l'onglet 'Demande de Devis' pour soumettre votre dossier final.");
    setTimeout(() => setSavedSelection(null), 8e3);
  };
  return /* @__PURE__ */ jsx("section", { className: "wood-pattern bg-gray-50 py-20", id: "configurator-section", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "mb-16 space-y-3 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[1.5px] w-6" }),
        /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-xs font-bold tracking-[0.2em] uppercase", children: "Outil Intelligent Alidade" }),
        /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-[1.5px] w-6" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-alidade-navy font-serif text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl", children: "Configurateur de Menuiserie 3D" }),
      /* @__PURE__ */ jsx("p", { className: "site-text mx-auto max-w-xl font-light text-gray-400", children: "Sélectionnez vos bois nobles, vos finitions d'art, ajustez vos dimensions au millimètre et obtenez une estimation budgétaire en temps réel." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center py-2", children: [
        /* @__PURE__ */ jsx("span", { className: "via-alidade-gold h-[1.5px] w-24 bg-gradient-to-r from-transparent to-transparent" }),
        /* @__PURE__ */ jsx("span", { className: "text-alidade-gold mx-2 text-xs", children: "◆" }),
        /* @__PURE__ */ jsx("span", { className: "via-alidade-gold h-[1.5px] w-24 bg-gradient-to-r from-transparent to-transparent" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsx(
        Reveal,
        {
          className: "flex flex-col justify-between space-y-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7",
          amount: 0.1,
          children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-alidade-navy flex items-center gap-2 text-xs font-bold tracking-wider uppercase", children: [
                /* @__PURE__ */ jsx(Layout, { size: 14, className: "text-alidade-gold" }),
                "1. Type de Projet :"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      setProjectType("kitchen");
                      setDepth(0.6);
                    },
                    className: `flex flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-xs font-bold tracking-wider uppercase transition-all sm:px-4 ${projectType === "kitchen" ? "border-alidade-gold bg-alidade-navy text-white shadow-md" : "hover:border-alidade-gold/30 text-alidade-navy border-gray-100 hover:bg-gray-50"}`,
                    id: "config-type-kitchen",
                    children: /* @__PURE__ */ jsx("span", { children: "Cuisine" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      setProjectType("wardrobe");
                      setDepth(0.6);
                    },
                    className: `flex flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-xs font-bold tracking-wider uppercase transition-all sm:px-4 ${projectType === "wardrobe" ? "border-alidade-gold bg-alidade-navy text-white shadow-md" : "hover:border-alidade-gold/30 text-alidade-navy border-gray-100 hover:bg-gray-50"}`,
                    id: "config-type-wardrobe",
                    children: /* @__PURE__ */ jsx("span", { children: "Dressing" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => {
                      setProjectType("cladding");
                      setDepth(0.05);
                    },
                    className: `flex flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-xs font-bold tracking-wider uppercase transition-all sm:px-4 ${projectType === "cladding" ? "border-alidade-gold bg-alidade-navy text-white shadow-md" : "hover:border-alidade-gold/30 text-alidade-navy border-gray-100 hover:bg-gray-50"}`,
                    id: "config-type-cladding",
                    children: /* @__PURE__ */ jsx("span", { children: "Habillage" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-alidade-navy flex items-center gap-2 text-xs font-bold tracking-wider uppercase", children: [
                /* @__PURE__ */ jsx(Sliders, { size: 14, className: "text-alidade-gold" }),
                "2. Essence ou Matériau Principal :"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: materials.map((m) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setMaterial(m.name),
                  className: `flex w-full items-center justify-between gap-4 rounded-xl border-2 p-3.5 text-left transition-all ${material === m.name ? "border-alidade-gold bg-alidade-navy/5 shadow-sm" : "border-gray-100 bg-white hover:border-gray-200"}`,
                  id: `config-material-${m.name.replace(/\s+/g, "-").toLowerCase()}`,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: `h-6 w-6 rounded-full border border-gray-300 ${m.colorClass}` }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-alidade-navy block text-xs font-bold tracking-wider uppercase", children: m.name }),
                        /* @__PURE__ */ jsx("span", { className: "block text-[11px] font-light text-gray-400", children: m.desc })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold text-xs font-semibold", children: [
                        "x",
                        m.factor
                      ] }),
                      material === m.name && /* @__PURE__ */ jsx("div", { className: "bg-alidade-gold flex h-5 w-5 items-center justify-center rounded-full text-white", children: /* @__PURE__ */ jsx(Check, { size: 12 }) })
                    ] })
                  ]
                },
                m.name
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("label", { className: "text-alidade-navy text-xs font-bold tracking-wider uppercase", children: "3. Finitions d'Art :" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: finishes.map((f) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setFinish(f.name),
                  className: `flex items-center justify-between rounded-xl border-2 p-3 text-left text-xs transition-all ${finish === f.name ? "border-alidade-gold bg-alidade-navy/5 text-alidade-navy font-bold" : "border-gray-100 text-gray-500 hover:border-gray-200"}`,
                  id: `config-finish-${f.name.replace(/\s+/g, "-").toLowerCase()}`,
                  children: [
                    /* @__PURE__ */ jsx("span", { children: f.name }),
                    finish === f.name && /* @__PURE__ */ jsx(Check, { size: 12, className: "text-alidade-gold" })
                  ]
                },
                f.name
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("label", { className: "text-alidade-navy text-xs font-bold tracking-wider uppercase", children: "4. Dimensions de l'Espace :" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-alidade-navy font-bold uppercase", children: "Largeur (Longueur)" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold font-mono font-bold", children: [
                      width.toFixed(2),
                      " m"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: "1.0",
                      max: "10.0",
                      step: "0.1",
                      value: width,
                      onChange: (e) => setWidth(parseFloat(e.target.value)),
                      className: "accent-alidade-gold h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200",
                      id: "config-range-width"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-alidade-navy font-bold uppercase", children: "Hauteur" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-alidade-gold font-mono font-bold", children: [
                      height.toFixed(2),
                      " m"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "range",
                      min: "1.5",
                      max: "3.5",
                      step: "0.05",
                      value: height,
                      onChange: (e) => setHeight(parseFloat(e.target.value)),
                      className: "accent-alidade-gold h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200",
                      id: "config-range-height"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("label", { className: "text-alidade-navy text-xs font-bold tracking-wider uppercase", children: "5. Équipements & Confort Optionnels :" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center justify-between rounded-xl border border-gray-100 p-3 text-xs hover:bg-gray-50", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: ledLighting,
                        onChange: (e) => setLedLighting(e.target.checked),
                        className: "text-alidade-gold focus:ring-alidade-gold h-4 w-4 rounded border-gray-300",
                        id: "config-opt-led"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-alidade-navy block font-bold uppercase", children: "Éclairage LED d'Ambiance" }),
                      /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Rubans LED encastrés avec variateur tactile" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-gold font-mono font-bold", children: "+450 DH/m" })
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center justify-between rounded-xl border border-gray-100 p-3 text-xs hover:bg-gray-50", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: pushToOpen,
                        onChange: (e) => setPushToOpen(e.target.checked),
                        className: "text-alidade-gold focus:ring-alidade-gold h-4 w-4 rounded border-gray-300",
                        id: "config-opt-push"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-alidade-navy block font-bold uppercase", children: "Système Push-To-Open" }),
                      /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Façades épurées sans poignées apparentes" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-gold font-mono font-bold", children: "+800 DH" })
                ] }),
                /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center justify-between rounded-xl border border-gray-100 p-3 text-xs hover:bg-gray-50", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: premiumFittings,
                        onChange: (e) => setPremiumFittings(e.target.checked),
                        className: "text-alidade-gold focus:ring-alidade-gold h-4 w-4 rounded border-gray-300",
                        id: "config-opt-blum"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-alidade-navy block font-bold uppercase", children: "Quincaillerie Autrichienne Blum" }),
                      /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400", children: "Charnières à amortisseurs hydrauliques intégrés" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-alidade-gold font-mono font-bold", children: "+600 DH/m" })
                ] })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(Reveal, { className: "flex flex-col gap-6 lg:col-span-5", delay: 0.15, amount: 0.1, children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-alidade-navy border-alidade-gold/15 relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border p-6 text-white shadow-xl", children: [
          ledLighting && /* @__PURE__ */ jsx("div", { className: "from-alidade-gold-light/40 pointer-events-none absolute top-0 right-0 left-0 h-4 animate-pulse bg-gradient-to-b to-transparent blur-md" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold/20 text-alidade-gold-light rounded px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase", children: "Aperçu Technique 2D" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] text-gray-400", children: "Scale: 1m ≈ 40px" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative flex flex-grow items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-alidade-dark/50 border-alidade-gold/10 relative flex min-h-[160px] w-full max-w-xs items-end justify-center rounded-lg border p-3", children: [
            ledLighting && /* @__PURE__ */ jsx("div", { className: "bg-alidade-gold absolute top-2 right-3 left-3 h-[2px] animate-pulse shadow-[0_0_12px_#e6cb95]" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `relative flex w-full flex-col rounded border transition-all duration-500 ${material === "Chêne Massif" ? "border-amber-300/40 bg-amber-100/25 text-amber-200" : material === "Noyer Noir" ? "border-amber-950/40 bg-amber-900/25 text-amber-500" : material === "Fenix NTM / Fénix" ? "border-gray-950/40 bg-gray-800/30 text-gray-300" : material === "MDF Laqué Premium" ? "border-gray-400/20 bg-white/10 text-white" : "border-amber-200/20 bg-yellow-50/10 text-yellow-100"}`,
                style: {
                  height: `${Math.min(180, height * 50)}px`,
                  width: `${Math.min(260, width * 40)}px`
                },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 grid grid-cols-4 divide-x divide-white/10", children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col justify-between p-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[7px]", children: "P1" }),
                      pushToOpen ? null : /* @__PURE__ */ jsx("div", { className: "h-3 w-1 self-center rounded-full bg-gray-400/50" }),
                      /* @__PURE__ */ jsx("span", { className: "text-center font-mono text-[6px]", children: "0.6m" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col justify-between p-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[7px]", children: "P2" }),
                      pushToOpen ? null : /* @__PURE__ */ jsx("div", { className: "h-3 w-1 self-center rounded-full bg-gray-400/50" }),
                      /* @__PURE__ */ jsx("span", { className: "text-center font-mono text-[6px]", children: "0.6m" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col justify-between p-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[7px]", children: "P3" }),
                      pushToOpen ? null : /* @__PURE__ */ jsx("div", { className: "h-3 w-1 self-center rounded-full bg-gray-400/50" }),
                      /* @__PURE__ */ jsx("span", { className: "text-center font-mono text-[6px]", children: "0.6m" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col justify-between p-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-mono text-[7px]", children: "P4" }),
                      pushToOpen ? null : /* @__PURE__ */ jsx("div", { className: "h-3 w-1 self-center rounded-full bg-gray-400/50" }),
                      /* @__PURE__ */ jsx("span", { className: "text-center font-mono text-[6px]", children: "0.6m" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-alidade-gold absolute right-0 -bottom-5 left-0 text-center font-mono text-[9px]", children: [
                    "L: ",
                    width.toFixed(2),
                    "m"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-alidade-gold absolute top-1/2 -right-14 origin-left -translate-y-1/2 font-mono text-[9px]", children: [
                    "H: ",
                    height.toFixed(2),
                    "m"
                  ] })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-2 flex flex-wrap gap-1.5 text-[9px]", children: [
            /* @__PURE__ */ jsx("span", { className: "rounded border border-white/10 bg-white/5 px-2 py-0.5", children: material }),
            /* @__PURE__ */ jsx("span", { className: "rounded border border-white/10 bg-white/5 px-2 py-0.5", children: finish }),
            ledLighting && /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold/10 text-alidade-gold border-alidade-gold/20 rounded border px-2 py-0.5", children: "LED ON" }),
            pushToOpen && /* @__PURE__ */ jsx("span", { className: "rounded border border-white/10 bg-white/5 px-2 py-0.5", children: "Push-To-Open" }),
            premiumFittings && /* @__PURE__ */ jsx("span", { className: "rounded border border-white/10 bg-white/5 px-2 py-0.5", children: "Amortisseurs Blum" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold tracking-wider text-gray-400 uppercase", children: "Estimation de Prix Provisoire :" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-alidade-navy block font-mono text-4xl font-bold", children: [
                finalCostFormatted,
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-alidade-gold text-lg font-bold", children: "MAD" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-light text-gray-400 italic", children: "* Estimation hors pose et livraison à Casablanca, Maroc. Soumis à validation technique finale." })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5 border-t border-gray-100 pt-2 text-xs text-gray-500", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-1.5 w-1.5 shrink-0 rounded-full" }),
                /* @__PURE__ */ jsx("span", { children: "Conforme à la charte Alidade d'excellence artisanale" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-alidade-gold h-1.5 w-1.5 shrink-0 rounded-full" }),
                /* @__PURE__ */ jsx("span", { children: "Inclus la conception 3D photoréaliste de votre projet" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleExportToQuote,
                className: "bg-alidade-gold hover:bg-alidade-gold-light text-alidade-navy flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-xs font-bold tracking-widest uppercase shadow-lg transition-colors",
                id: "config-export-btn",
                children: [
                  /* @__PURE__ */ jsx(Save, { size: 14 }),
                  "Injecter dans ma Demande de Devis"
                ]
              }
            ),
            savedSelection && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in flex items-start gap-2 rounded border border-emerald-100 bg-emerald-50 p-3 text-[11px] text-emerald-800 duration-300", children: [
              /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "mt-0.5 shrink-0 animate-bounce text-emerald-500" }),
              /* @__PURE__ */ jsx("span", { children: savedSelection })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function ConfigurateurPage() {
  const handleSendToQuote = (configSummary, calculatedCost) => {
    sessionStorage.setItem("alidade_prefill_summary", configSummary);
    sessionStorage.setItem("alidade_prefill_cost", String(calculatedCost));
    router.visit("/devis");
  };
  return /* @__PURE__ */ jsxs("div", { className: "text-alidade-navy flex min-h-screen flex-col bg-[#fafafa]", children: [
    /* @__PURE__ */ jsx(SeoHead, { ...pageSeo.configurateur }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(Configurator, { onSendToQuote: handleSendToQuote }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ConfigurateurPage as default
};
