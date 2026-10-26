import{jsxRuntimeExports as e,reactExports as u}from"./react-CGgQk4VG.js";import{motion as k,useReducedMotion$1 as I,Phone as S,MapPin as W,Mail as R,Award as _,Handshake as H,ShieldCheck as K,Facebook as T,Instagram as q,Linkedin as P,ChevronDown as A,ArrowUpRight as z,X as V,Menu as G}from"./ui-yFIYNTS7.js";import{services as y,serviceUrl as N,seo as C}from"./services-DG2wteS5.js";import{$e as h,K as O,Le as J}from"./inertia-Bn1oMxr5.js";const U=[.22,1,.36,1],Q=(r=.12,a=0)=>({hidden:{},visible:{transition:{staggerChildren:r,delayChildren:a}}});function X({children:r,className:a,delay:n=0,y:i=28,amount:m=.2,as:j="div"}){const v=I(),d=k[j];return e.jsx(d,{className:a,initial:{opacity:0,y:v?0:i},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:m},transition:{duration:.7,delay:n,ease:U},children:r})}function Y({children:r,className:a,stagger:n=.12,delay:i=0,amount:m=.15}){return e.jsx(k.div,{className:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:m},variants:Q(n,i),children:r})}function Z({children:r,className:a,y:n=28}){const m={hidden:{opacity:0,y:I()?0:n},visible:{opacity:1,y:0,transition:{duration:.65,ease:U}}};return e.jsx(k.div,{className:a,variants:m,children:r})}const t={name:"webprint.ma",phone:"05 22 48 44 25",phoneHref:"tel:0522484425",whatsapp:"212660419305",whatsappMessage:"Bonjour webprint.ma, je souhaite obtenir des informations sur vos services d impression.",email:"contact@webprint.ma",address:"N 3 Av 2 Mars, 5eme etage, coin Zerktouni, Rond point d'Europe, Casablanca - Maroc",mapEmbedUrl:"https://maps.google.com/maps?q=Rond%20point%20d%27Europe%20Casablanca%20Maroc&z=15&output=embed",socials:{facebook:"",instagram:"",linkedin:""}};function ee(){return`https://wa.me/${t.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`}const he="/images/qui-sommes-nous/atelier-finition.png",re="/logo.svg",ge="/images/bannieres/menuiserie-Bois2-final.webp",L=[{href:t.socials.facebook,icon:e.jsx(T,{size:18}),label:"Facebook"},{href:t.socials.instagram,icon:e.jsx(q,{size:18}),label:"Instagram"},{href:t.socials.linkedin,icon:e.jsx(P,{size:18}),label:"LinkedIn"}].filter(r=>r.href),ue=()=>e.jsxs("footer",{className:`\r
                relative\r
                overflow-hidden\r
                bg-[url('/images/bg-footer.png')]\r
                bg-cover\r
                bg-center\r
                bg-no-repeat\r
                text-white\r
            `,children:[e.jsx("div",{className:`\r
                    pointer-events-none\r
                    absolute inset-0\r
                  \r
                `}),e.jsxs("div",{className:`\r
                    relative z-10\r
                    mx-auto\r
                    flex\r
                    max-w-7xl\r
                    flex-col\r
                    lg:flex-row\r
                `,children:[e.jsxs(X,{className:`\r
                        flex\r
                        w-full\r
                        flex-col\r
                        justify-center\r
                        p-8\r
                        lg:w-[38%]\r
                        lg:px-12\r
                        xl:p-12\r
                    `,amount:.15,children:[e.jsx("div",{className:"mb-6",children:e.jsx("img",{src:re,alt:"Logo webprint.ma",className:`\r
                                h-auto\r
                                w-60\r
                                max-w-full\r
                                rounded-lg\r
                                bg-white\r
                                px-3\r
                                py-2\r
                                shadow-lg\r
                            `,loading:"lazy",decoding:"async"})}),e.jsxs("p",{className:"site-text-small mb-8 max-w-sm text-gray-300",children:["Imprimerie et communication visuelle à Casablanca.",e.jsx("br",{}),"Nous transformons vos idées en supports visibles et mémorables."]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(S,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("a",{href:t.phoneHref,className:`\r
                                    site-text-small\r
                                    text-gray-300\r
                                    transition-colors\r
                                    hover:text-white\r
                                `,children:t.phone})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(W,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("span",{className:"site-text-small text-gray-300",children:t.address})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(R,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("a",{href:`mailto:${t.email}`,className:`\r
                                    site-text-small\r
                                    min-w-0\r
                                    text-gray-300\r
                                    transition-colors\r
                                    hover:text-white\r
                                `,children:t.email})]})]}),L.length>0&&e.jsx("div",{className:"mt-8 flex gap-3",children:L.map(r=>e.jsx(ae,{href:r.href,label:r.label,icon:r.icon},r.label))})]}),e.jsxs(Y,{stagger:.15,className:`\r
                        grid\r
                        flex-1\r
                        grid-cols-1\r
                        items-center\r
                        border-t\r
                        border-white/10\r
                        md:grid-cols-3\r
                        lg:border-t-0\r
                        lg:border-l\r
                    `,children:[e.jsx(M,{icon:e.jsx(_,{className:`\r
                                    text-alidade-gold\r
                                    h-10 w-10\r
                                    lg:h-16 lg:w-14\r
                                `,strokeWidth:1}),title:"QUALITÉ",description:"Des supports adaptés et des finitions soignées."}),e.jsx(M,{icon:e.jsx(H,{className:`\r
                                    text-alidade-gold\r
                                    h-10 w-10\r
                                    lg:h-16 lg:w-16\r
                                `,strokeWidth:1}),title:"ENGAGEMENT",description:"Respect des délais et accompagnement personnalisé.",hasBorder:!0}),e.jsx(M,{icon:e.jsx(K,{className:`\r
                                    text-alidade-gold\r
                                    h-10 w-10\r
                                    lg:h-16 lg:w-16\r
                                `,strokeWidth:1}),title:"CONFIANCE",description:"Une équipe print et conseil à votre service."})]})]}),e.jsx("nav",{"aria-label":"Liens du pied de page",className:"relative z-10 border-t border-white/10 bg-[#0d1a2d]/40 backdrop-blur-sm",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-6 px-8 py-8 lg:flex-row lg:items-start lg:gap-12 lg:px-12",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h2",{className:"site-label mb-4 font-bold uppercase",children:"Nos services"}),e.jsx("ul",{className:"grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3",children:y.map(r=>e.jsx("li",{children:e.jsx(h,{href:N(r.slug),className:"site-text-small text-gray-300 transition-colors hover:text-white",children:r.title})},r.slug))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"site-label mb-4 font-bold uppercase",children:"Ressources"}),e.jsx("ul",{className:"flex flex-col gap-2",children:[["/articles","Blog"],["/apropos","À propos"],["/devis","Demander un devis"],["/contact","Contact"]].map(([r,a])=>e.jsx("li",{children:e.jsx(h,{href:r,className:"site-text-small text-gray-300 transition-colors hover:text-white",children:a})},r))})]})]})}),e.jsx("div",{className:`\r
                    relative z-10\r
                    border-t\r
                    border-white/10\r
                    bg-[#0d1a2d]/70\r
                    py-6\r
                    backdrop-blur-sm\r
                `,children:e.jsx("div",{className:`\r
                        container mx-auto\r
                        flex flex-col\r
                        items-center\r
                        justify-center\r
                        gap-2\r
                        px-6\r
                        md:flex-row\r
                    `,children:e.jsxs("p",{className:"site-text-small text-center text-gray-300",children:["© ",new Date().getFullYear()," webprint.ma. Tous droits réservés."]})})})]}),M=({icon:r,title:a,description:n,hasBorder:i})=>e.jsxs(Z,{className:`
            flex
            min-w-0
            flex-col
            items-center
            px-5
            py-10
            text-center
            ${i?"border-white/10 md:border-x":""}
        `,children:[e.jsx("div",{className:"mb-6",children:r}),e.jsx("h3",{className:"site-label mb-4 font-bold uppercase",children:a}),e.jsx("p",{className:"site-text-small max-w-[220px] text-gray-300",children:n})]}),ae=({icon:r,href:a,label:n})=>e.jsx(k.a,{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":n,whileHover:{scale:1.15,y:-2},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:18},className:`\r
            hover:text-alidade-gold\r
            hover:border-alidade-gold\r
            flex\r
            h-10\r
            w-10\r
            items-center\r
            justify-center\r
            rounded-full\r
            border\r
            border-white/20\r
            bg-white/5\r
            text-gray-300\r
            backdrop-blur-sm\r
            transition-colors\r
        `,children:r}),se=({size:r=26})=>e.jsx("svg",{viewBox:"0 0 32 32",width:r,height:r,fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.24 1.63h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.66zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.78 10.61-10.67 10.61zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"})});function te(){return e.jsx(k.a,{href:ee(),target:"_blank",rel:"noopener noreferrer","aria-label":"Contacter webprint.ma sur WhatsApp",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},whileHover:{scale:1.12},whileTap:{scale:.94},transition:{type:"spring",stiffness:260,damping:18,delay:.6},className:"fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl",children:e.jsx(se,{})})}const E=[{href:"/",label:"Accueil"},{href:"/apropos",label:"À propos"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}],ne=y.map(r=>N(r.slug));function b(r,a){return r==="/"?a==="/":r==="/services"?a==="/services"||ne.includes(a):a===r||a.startsWith(`${r}/`)}function be(){const[r,a]=u.useState(!1),[n,i]=u.useState(!1),[m,j]=u.useState(!1),{url:v}=O(),d=v.split(/[?#]/)[0],$=u.useRef(null),w=u.useRef(null);return u.useEffect(()=>{if(!r)return;const s=x=>{var p;x.key==="Escape"&&(a(!1),(p=w.current)==null||p.focus())},o=x=>{var p;(p=$.current)!=null&&p.contains(x.target)||a(!1)},l=window.matchMedia("(min-width: 1024px)"),c=()=>{l.matches&&a(!1)};return document.addEventListener("keydown",s),document.addEventListener("pointerdown",o),l.addEventListener("change",c),()=>{document.removeEventListener("keydown",s),document.removeEventListener("pointerdown",o),l.removeEventListener("change",c)}},[r]),e.jsxs("header",{ref:$,className:"relative z-50",children:[e.jsx("div",{className:"border-b border-gray-100 bg-gray-50 px-4 text-sm text-gray-600 sm:px-6",children:e.jsxs("div",{className:"mx-auto flex min-h-10 text-md  flex-wrap items-center justify-center gap-x-5 sm:justify-start",children:[e.jsxs("a",{href:t.phoneHref,className:"hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors",children:[e.jsx(S,{size:13,className:"text-brand-blue","aria-hidden":"true"}),e.jsx("span",{children:t.phone})]}),e.jsxs("a",{href:`mailto:${t.email}`,className:"hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors",children:[e.jsx(R,{size:13,className:"text-brand-blue","aria-hidden":"true"}),e.jsx("span",{children:t.email})]})]})}),e.jsx("div",{className:"border-b border-gray-100 bg-white",children:e.jsxs("div",{className:"mx-auto flex h-20 site-container items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8",children:[e.jsx(h,{href:"/",onClick:()=>a(!1),className:"shrink-0","aria-label":"webprint.ma - Accueil",children:e.jsx("img",{src:"/logo.svg",alt:"Logo webprint.ma",width:"920",height:"220",className:"h-auto w-[210px] max-w-full sm:w-[240px]"})}),e.jsx("nav",{className:"hidden items-center gap-1 lg:flex","aria-label":"Navigation principale",children:E.map(s=>{const o=`relative flex min-h-12 items-center gap-1 rounded-md px-3 text-lg font-semibold transition-colors xl:px-4 ${b(s.href,d)?"text-brand-blue after:bg-brand-cyan after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5":"hover:text-brand-blue text-gray-600 hover:bg-gray-50"}`;return s.href!=="/services"?e.jsx(h,{href:s.href,"aria-current":b(s.href,d)?"page":void 0,className:o,id:`nav-link-${s.href.replace("/","")||"accueil"}`,children:s.label},s.href):e.jsxs("div",{className:"relative",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocus:()=>i(!0),onBlur:l=>{l.currentTarget.contains(l.relatedTarget)||i(!1)},onKeyDown:l=>{l.key==="Escape"&&i(!1)},children:[e.jsxs(h,{href:s.href,"aria-current":b(s.href,d)?"page":void 0,"aria-haspopup":"true","aria-expanded":n,className:o,id:"nav-link-services",children:[s.label,e.jsx(A,{size:16,className:`transition-transform duration-200 ${n?"rotate-180":""}`,"aria-hidden":"true"})]}),n&&e.jsx("div",{className:"absolute top-full left-1/2 z-50 w-[36rem] -translate-x-1/2 pt-2",children:e.jsxs("ul",{className:"grid grid-cols-2 gap-1 rounded-lg border border-gray-100 bg-white p-3 shadow-xl",children:[y.map(l=>{const c=l.icon,x=N(l.slug);return e.jsx("li",{children:e.jsxs(h,{href:x,onClick:()=>i(!1),"aria-current":d===x?"page":void 0,className:`flex items-center gap-3 rounded-md px-3 py-2.5 text-base font-medium transition-colors ${d===x?"bg-brand-blue/5 text-brand-blue":"hover:text-brand-blue text-gray-700 hover:bg-gray-50"}`,children:[e.jsx(c,{size:18,className:"text-brand-blue shrink-0","aria-hidden":"true"}),l.title]})},l.slug)}),e.jsx("li",{className:"col-span-2 mt-1 border-t border-gray-100 pt-2",children:e.jsxs(h,{href:"/services",onClick:()=>i(!1),className:"text-brand-blue flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold hover:bg-gray-50",children:["Voir tous nos services",e.jsx(z,{size:15,"aria-hidden":"true"})]})})]})})]},s.href)})}),e.jsxs("div",{className:"ml-auto flex shrink-0 items-center gap-3 lg:ml-0",children:[e.jsxs(h,{href:"/devis",className:"brand-button hidden sm:inline-flex","aria-current":b("/devis",d)?"page":void 0,id:"devis-btn-nav",children:[e.jsx("span",{className:"brand-button-label",children:"Demander un devis"}),e.jsx("span",{className:"brand-button-icon","aria-hidden":"true",children:e.jsx(z,{})})]}),e.jsx("button",{ref:w,type:"button",onClick:()=>a(s=>!s),className:"text-brand-blue flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden","aria-label":r?"Fermer le menu":"Ouvrir le menu","aria-expanded":r,"aria-controls":"mobile-navigation",id:"mobile-menu-toggle",children:r?e.jsx(V,{size:23}):e.jsx(G,{size:23})})]})]})}),r&&e.jsxs("nav",{id:"mobile-navigation","aria-label":"Navigation mobile",className:"absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-8rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden",children:[E.map(s=>e.jsxs("div",{children:[e.jsx(h,{href:s.href,onClick:()=>a(!1),"aria-current":b(s.href,d)?"page":void 0,className:`my-1 block rounded-md border-l-2 px-4 py-3.5 text-lg font-semibold transition-colors ${b(s.href,d)?"border-brand-cyan bg-brand-blue/5 text-brand-blue":"hover:text-brand-blue border-transparent text-gray-600 hover:bg-gray-50"}`,id:`mobile-nav-link-${s.href.replace("/","")||"accueil"}`,children:s.label}),s.href==="/services"&&e.jsxs("div",{className:"ml-4",children:[e.jsxs("button",{type:"button",onClick:()=>j(o=>!o),"aria-expanded":m,"aria-controls":"mobile-services-list",className:"hover:text-brand-blue flex w-full items-center justify-between rounded-md px-4 py-2 text-base font-medium text-gray-500",children:["Nos ",y.length," services",e.jsx(A,{size:18,className:`transition-transform ${m?"rotate-180":""}`,"aria-hidden":"true"})]}),m&&e.jsx("ul",{id:"mobile-services-list",className:"border-l border-gray-100 pl-2",children:y.map(o=>e.jsx("li",{children:e.jsx(h,{href:N(o.slug),onClick:()=>a(!1),className:`block rounded-md px-4 py-2.5 text-base transition-colors ${d===N(o.slug)?"text-brand-blue font-semibold":"hover:text-brand-blue text-gray-600 hover:bg-gray-50"}`,children:o.title})},o.slug))})]})]},s.href)),e.jsx("div",{className:"mt-4 border-t border-gray-100 pt-4",children:e.jsxs(h,{href:"/devis",onClick:()=>a(!1),className:"brand-button w-full",id:"mobile-nav-devis",children:[e.jsx("span",{className:"brand-button-label",children:"Demander un devis gratuit"}),e.jsx("span",{className:"brand-button-icon","aria-hidden":"true",children:e.jsx(z,{})})]})})]}),e.jsx(te,{})]})}const f=C.siteName,ie=C.defaultImage,le=C.defaultKeywords,fe=C.pages;function g(r,a){return new URL(r.replace(/^\//,""),a).toString()}function oe(r){var n;const a=(n=r.split("?")[0].split(".").pop())==null?void 0:n.toLowerCase();return a==="png"?"image/png":a==="webp"?"image/webp":a==="gif"?"image/gif":"image/jpeg"}function ce(r){return Array.from(new Set([...r,...le])).filter(Boolean)}function je({title:r,description:a,keywords:n,image:i=ie,imageAlt:m,type:j="website",noIndex:v=!1,structuredData:d,extraSchema:$=[],publishedTime:w,modifiedTime:s,canonical:o}){const{url:l}=O(),c=`${C.siteUrl}/`,x=o||g(l.split("?")[0],c),p=g(i,c),B=v?"noindex, nofollow":"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",D=ce(n),F=d??{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":`${g("/",c)}#website`,name:f,url:g("/",c),inLanguage:"fr-MA"},{"@type":"LocalBusiness","@id":`${g("/",c)}#business`,name:t.name,url:g("/",c),image:p,logo:g("/logo.svg",c),telephone:t.phone,email:t.email,address:{"@type":"PostalAddress",streetAddress:t.address,addressLocality:"Casablanca",addressCountry:"MA"},areaServed:["Casablanca","Maroc"],priceRange:"$$",sameAs:Object.values(t.socials).filter(Boolean)},{"@type":"WebPage","@id":`${x}#webpage`,name:r,description:a,url:x,inLanguage:"fr-MA",isPartOf:{"@id":`${g("/",c)}#website`},about:{"@id":`${g("/",c)}#business`},primaryImageOfPage:{"@type":"ImageObject",url:p}},...$]};return e.jsxs(J,{title:r,children:[e.jsx("meta",{name:"description",content:a}),e.jsx("meta",{name:"keywords",content:D.join(", ")}),e.jsx("meta",{name:"robots",content:B}),e.jsx("meta",{name:"author",content:f}),e.jsx("meta",{name:"publisher",content:f}),e.jsx("meta",{name:"geo.region",content:"MA-CAS"}),e.jsx("meta",{name:"geo.placename",content:"Casablanca"}),e.jsx("meta",{name:"language",content:"fr-MA"}),e.jsx("link",{rel:"canonical",href:x}),e.jsx("meta",{property:"og:locale",content:"fr_FR"}),e.jsx("meta",{property:"og:type",content:j}),e.jsx("meta",{property:"og:site_name",content:f}),e.jsx("meta",{property:"og:title",content:r}),e.jsx("meta",{property:"og:description",content:a}),e.jsx("meta",{property:"og:url",content:x}),e.jsx("meta",{property:"og:image",content:p}),e.jsx("meta",{property:"og:image:alt",content:m??`${f} - ${r}`}),e.jsx("meta",{property:"og:image:type",content:oe(p)}),w&&e.jsx("meta",{property:"article:published_time",content:w}),s&&e.jsx("meta",{property:"article:modified_time",content:s}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:site",content:"@webprint_ma"}),e.jsx("meta",{name:"twitter:title",content:r}),e.jsx("meta",{name:"twitter:description",content:a}),e.jsx("meta",{name:"twitter:image",content:p}),e.jsx("meta",{name:"twitter:image:alt",content:m??`${f} - ${r}`}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(F)})]})}export{U as EASE,ue as Footer,be as Navbar,X as Reveal,je as SeoHead,Y as Stagger,Z as StaggerItem,he as aboutCraftHero,g as absoluteUrl,fe as pageSeo,ge as quoteBannerImage,t as site};
