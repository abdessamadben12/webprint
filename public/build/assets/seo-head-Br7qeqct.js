import{j as e,r as u}from"./react-DjetxRQp.js";import{m as b,ag as k,d as E,i as $,M as C,x as U,ah as A,ai as M,aj as S,ak as W,al as F,a4 as w,X as H,am as B}from"./ui-BX7T53lm.js";import{K as I,$ as h,L as O}from"./inertia-t4lV3GWa.js";const z=[.22,1,.36,1],_=(a=.12,n=0)=>({hidden:{},visible:{transition:{staggerChildren:a,delayChildren:n}}});function D({children:a,className:n,delay:t=0,y:r=28,amount:l=.2,as:m="div"}){const s=k(),x=b[m];return e.jsx(x,{className:n,initial:{opacity:0,y:s?0:r},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:l},transition:{duration:.7,delay:t,ease:z},children:a})}function T({children:a,className:n,stagger:t=.12,delay:r=0,amount:l=.15}){return e.jsx(b.div,{className:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:l},variants:_(t,r),children:a})}function q({children:a,className:n,y:t=28}){const l={hidden:{opacity:0,y:k()?0:t},visible:{opacity:1,y:0,transition:{duration:.65,ease:z}}};return e.jsx(b.div,{className:n,variants:l,children:a})}const i={phone:"05 22 48 44 25",phoneHref:"tel:0522484425",whatsapp:"212668746386",whatsappMessage:"Bonjour webprint.ma, je souhaite obtenir des informations sur vos services d impression.",email:"contact@webprint.ma",address:"N 3 Av 2 Mars, 5eme etage, coin Zerktouni, Rond point d'Europe, Casablanca - Maroc",mapEmbedUrl:"https://maps.google.com/maps?q=Rond%20point%20d%27Europe%20Casablanca%20Maroc&z=15&output=embed",socials:{facebook:"",instagram:"",linkedin:""}};function G(){return`https://wa.me/${i.whatsapp}?text=${encodeURIComponent(i.whatsappMessage)}`}const ee="/images/qui-sommes-nous/atelier-finition.png",K="/logo.svg",ae="/images/agencement/décoration_intérieure.webp",ne="/images/bannieres/menuiserie-Bois2-final.webp",y=[{href:i.socials.facebook,icon:e.jsx(S,{size:18}),label:"Facebook"},{href:i.socials.instagram,icon:e.jsx(W,{size:18}),label:"Instagram"},{href:i.socials.linkedin,icon:e.jsx(F,{size:18}),label:"LinkedIn"}].filter(a=>a.href),se=()=>e.jsxs("footer",{className:`
                relative
                overflow-hidden
                bg-[url('/images/bg-footer.png')]
                bg-cover
                bg-center
                bg-no-repeat
                text-white
            `,children:[e.jsx("div",{className:`
                    pointer-events-none
                    absolute inset-0
                  
                `}),e.jsxs("div",{className:`
                    relative z-10
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    lg:flex-row
                `,children:[e.jsxs(D,{className:`
                        flex
                        w-full
                        flex-col
                        justify-center
                        p-8
                        lg:w-[38%]
                        lg:px-12
                        xl:p-12
                    `,amount:.15,children:[e.jsx("div",{className:"mb-6",children:e.jsx("img",{src:K,alt:"Logo webprint.ma",className:`
                                h-auto
                                w-60
                                max-w-full
                                rounded-lg
                                bg-white
                                px-3
                                py-2
                                shadow-lg
                            `,loading:"lazy",decoding:"async"})}),e.jsxs("p",{className:"site-text-small mb-8 max-w-sm text-gray-300",children:["Imprimerie et communication visuelle à Casablanca.",e.jsx("br",{}),"Nous transformons vos idées en supports visibles et mémorables."]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(E,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("a",{href:i.phoneHref,className:`
                                    site-text-small
                                    text-gray-300
                                    transition-colors
                                    hover:text-white
                                `,children:i.phone})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx($,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("span",{className:"site-text-small text-gray-300",children:i.address})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(C,{className:"text-alidade-gold h-5 w-5 shrink-0"}),e.jsx("a",{href:`mailto:${i.email}`,className:`
                                    site-text-small
                                    min-w-0
                                    text-gray-300
                                    transition-colors
                                    hover:text-white
                                `,children:i.email})]})]}),y.length>0&&e.jsx("div",{className:"mt-8 flex gap-3",children:y.map(a=>e.jsx(V,{href:a.href,label:a.label,icon:a.icon},a.label))})]}),e.jsxs(T,{stagger:.15,className:`
                        grid
                        flex-1
                        grid-cols-1
                        items-center
                        border-t
                        border-white/10
                        md:grid-cols-3
                        lg:border-t-0
                        lg:border-l
                    `,children:[e.jsx(f,{icon:e.jsx(U,{className:`
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-14
                                `,strokeWidth:1}),title:"QUALITÉ",description:"Des supports adaptés et des finitions soignées."}),e.jsx(f,{icon:e.jsx(A,{className:`
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-16
                                `,strokeWidth:1}),title:"ENGAGEMENT",description:"Respect des délais et accompagnement personnalisé.",hasBorder:!0}),e.jsx(f,{icon:e.jsx(M,{className:`
                                    text-alidade-gold
                                    h-10 w-10
                                    lg:h-16 lg:w-16
                                `,strokeWidth:1}),title:"CONFIANCE",description:"Une équipe print et conseil à votre service."})]})]}),e.jsx("div",{className:`
                    relative z-10
                    border-t
                    border-white/10
                    bg-[#0d1a2d]/70
                    py-6
                    backdrop-blur-sm
                `,children:e.jsx("div",{className:`
                        container mx-auto
                        flex flex-col
                        items-center
                        justify-center
                        gap-2
                        px-6
                        md:flex-row
                    `,children:e.jsxs("p",{className:"site-text-small text-center text-gray-300",children:["© ",new Date().getFullYear()," webprint.ma. Tous droits réservés."]})})})]}),f=({icon:a,title:n,description:t,hasBorder:r})=>e.jsxs(q,{className:`
            flex
            min-w-0
            flex-col
            items-center
            px-5
            py-10
            text-center
            ${r?"border-white/10 md:border-x":""}
        `,children:[e.jsx("div",{className:"mb-6",children:a}),e.jsx("h3",{className:"site-label mb-4 font-bold uppercase",children:n}),e.jsx("p",{className:"site-text-small max-w-[220px] text-gray-300",children:t})]}),V=({icon:a,href:n,label:t})=>e.jsx(b.a,{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":t,whileHover:{scale:1.15,y:-2},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:18},className:`
            hover:text-alidade-gold
            hover:border-alidade-gold
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/5
            text-gray-300
            backdrop-blur-sm
            transition-colors
        `,children:a}),J=({size:a=26})=>e.jsx("svg",{viewBox:"0 0 32 32",width:a,height:a,fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.56-1.72a12.74 12.74 0 0 0 6.24 1.63h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.66zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.56 10.56 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.78 10.61-10.67 10.61zm5.84-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.51-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"})});function P(){return e.jsx(b.a,{href:G(),target:"_blank",rel:"noopener noreferrer","aria-label":"Contacter webprint.ma sur WhatsApp",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},whileHover:{scale:1.12},whileTap:{scale:.94},transition:{type:"spring",stiffness:260,damping:18,delay:.6},className:"fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl",children:e.jsx(J,{})})}const N=[{href:"/",label:"Accueil"},{href:"/apropos",label:"À propos"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}];function g(a,n){return a==="/"?n==="/":a==="/services"?["/services","/savoir-faire"].some(t=>n===t||n.startsWith(`${t}/`)):n===a||n.startsWith(`${a}/`)}function te(){const[a,n]=u.useState(!1),{url:t}=I(),r=t.split(/[?#]/)[0],l=u.useRef(null),m=u.useRef(null);return u.useEffect(()=>{if(!a)return;const s=d=>{var o;d.key==="Escape"&&(n(!1),(o=m.current)==null||o.focus())},x=d=>{var o;(o=l.current)!=null&&o.contains(d.target)||n(!1)},c=window.matchMedia("(min-width: 1024px)"),p=()=>{c.matches&&n(!1)};return document.addEventListener("keydown",s),document.addEventListener("pointerdown",x),c.addEventListener("change",p),()=>{document.removeEventListener("keydown",s),document.removeEventListener("pointerdown",x),c.removeEventListener("change",p)}},[a]),e.jsxs("header",{ref:l,className:"relative z-50",children:[e.jsx("div",{className:"border-b border-gray-100 bg-gray-50 px-4 text-sm text-gray-600 sm:px-6",children:e.jsxs("div",{className:"mx-auto flex min-h-10 text-md  flex-wrap items-center justify-center gap-x-5 sm:justify-start",children:[e.jsxs("a",{href:i.phoneHref,className:"hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors",children:[e.jsx(E,{size:13,className:"text-brand-blue","aria-hidden":"true"}),e.jsx("span",{children:i.phone})]}),e.jsxs("a",{href:`mailto:${i.email}`,className:"hover:text-brand-blue flex min-h-10 items-center gap-2 transition-colors",children:[e.jsx(C,{size:13,className:"text-brand-blue","aria-hidden":"true"}),e.jsx("span",{children:i.email})]})]})}),e.jsx("div",{className:"border-b border-gray-100 bg-white",children:e.jsxs("div",{className:"mx-auto flex h-20 site-container items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8",children:[e.jsx(h,{href:"/",onClick:()=>n(!1),className:"shrink-0","aria-label":"webprint.ma - Accueil",children:e.jsx("img",{src:"/logo.svg",alt:"Logo webprint.ma",width:"920",height:"220",className:"h-auto w-[210px] max-w-full sm:w-[240px]"})}),e.jsx("nav",{className:"hidden items-center gap-1 lg:flex","aria-label":"Navigation principale",children:N.map(s=>e.jsx(h,{href:s.href,"aria-current":g(s.href,r)?"page":void 0,className:`relative flex min-h-12 items-center rounded-md px-3 text-lg font-semibold transition-colors xl:px-4 ${g(s.href,r)?"text-brand-blue after:bg-brand-cyan after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5":"hover:text-brand-blue text-gray-600 hover:bg-gray-50"}`,id:`nav-link-${s.href.replace("/","")||"accueil"}`,children:s.label},s.href))}),e.jsxs("div",{className:"ml-auto flex shrink-0 items-center gap-3 lg:ml-0",children:[e.jsxs(h,{href:"/devis",className:"brand-button hidden sm:inline-flex","aria-current":g("/devis",r)?"page":void 0,id:"devis-btn-nav",children:[e.jsx("span",{className:"brand-button-label",children:"Demander un devis"}),e.jsx("span",{className:"brand-button-icon","aria-hidden":"true",children:e.jsx(w,{})})]}),e.jsx("button",{ref:m,type:"button",onClick:()=>n(s=>!s),className:"text-brand-blue flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-50 lg:hidden","aria-label":a?"Fermer le menu":"Ouvrir le menu","aria-expanded":a,"aria-controls":"mobile-navigation",id:"mobile-menu-toggle",children:a?e.jsx(H,{size:23}):e.jsx(B,{size:23})})]})]})}),a&&e.jsxs("nav",{id:"mobile-navigation","aria-label":"Navigation mobile",className:"absolute top-full right-0 left-0 z-50 max-h-[calc(100dvh-8rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden",children:[N.map(s=>e.jsx(h,{href:s.href,onClick:()=>n(!1),"aria-current":g(s.href,r)?"page":void 0,className:`my-1 block rounded-md border-l-2 px-4 py-3.5 text-lg font-semibold transition-colors ${g(s.href,r)?"border-brand-cyan bg-brand-blue/5 text-brand-blue":"hover:text-brand-blue border-transparent text-gray-600 hover:bg-gray-50"}`,id:`mobile-nav-link-${s.href.replace("/","")||"accueil"}`,children:s.label},s.href)),e.jsx("div",{className:"mt-4 border-t border-gray-100 pt-4",children:e.jsxs(h,{href:"/devis",onClick:()=>n(!1),className:"brand-button w-full",id:"mobile-nav-devis",children:[e.jsx("span",{className:"brand-button-label",children:"Demander un devis gratuit"}),e.jsx("span",{className:"brand-button-icon","aria-hidden":"true",children:e.jsx(w,{})})]})})]}),e.jsx(P,{})]})}const j="webprint.ma",Q="/images/bannieres/menuiserie-Bois2-final.webp";function v(a,n){return new URL(a.replace(/^\//,""),n).toString()}function re({title:a,description:n,keywords:t,image:r=Q,type:l="website",noIndex:m=!1,structuredData:s}){const{url:x,props:c}=I(),p=c.appUrl.endsWith("/")?c.appUrl:`${c.appUrl}/`,d=v(x.split("?")[0],p),o=v(r,p),L=m?"noindex, nofollow":"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",R=s??{"@context":"https://schema.org","@type":"WebPage",name:a,description:n,url:d,isPartOf:{"@type":"WebSite",name:j,url:v("/",p)}};return e.jsxs(O,{title:a,children:[e.jsx("meta",{name:"description",content:n}),e.jsx("meta",{name:"keywords",content:t.join(", ")}),e.jsx("meta",{name:"robots",content:L}),e.jsx("link",{rel:"canonical",href:d}),e.jsx("meta",{property:"og:locale",content:"fr_FR"}),e.jsx("meta",{property:"og:type",content:l}),e.jsx("meta",{property:"og:site_name",content:j}),e.jsx("meta",{property:"og:title",content:a}),e.jsx("meta",{property:"og:description",content:n}),e.jsx("meta",{property:"og:url",content:d}),e.jsx("meta",{property:"og:image",content:o}),e.jsx("meta",{property:"og:image:alt",content:`${j} - ${a}`}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:a}),e.jsx("meta",{name:"twitter:description",content:n}),e.jsx("meta",{name:"twitter:image",content:o}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify(R)})]})}export{z as E,se as F,te as N,D as R,re as S,T as a,q as b,ae as c,ee as d,ne as q,i as s};
