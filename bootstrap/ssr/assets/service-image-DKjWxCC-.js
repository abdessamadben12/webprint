import { jsx } from "react/jsx-runtime";
import { useState } from "react";
function ServiceImage({ service, className }) {
  const [unavailable, setUnavailable] = useState(false);
  const Icon = service.icon;
  if (unavailable) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gray-100", role: "img", "aria-label": service.title, children: /* @__PURE__ */ jsx(Icon, { className: "text-brand-blue h-12 w-12", strokeWidth: 1.25, "aria-hidden": "true" }) });
  }
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: service.imageUrl,
      srcSet: service.imageUrl.endsWith(".webp") ? `${service.imageUrl.replace(".webp", "-640.webp")} 640w, ${service.imageUrl} 1280w` : void 0,
      sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      alt: service.imageAlt,
      width: 1280,
      height: 960,
      className,
      onError: () => setUnavailable(true),
      loading: "lazy",
      decoding: "async"
    }
  );
}
export {
  ServiceImage
};
