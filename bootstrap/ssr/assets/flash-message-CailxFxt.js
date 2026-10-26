import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { CheckCircle2, X } from "lucide-react";
import { useState, useEffect } from "react";
function FlashMessage() {
  const { flash } = usePage().props;
  const message = flash == null ? void 0 : flash.success;
  const [visible, setVisible] = useState(Boolean(message));
  useEffect(() => {
    setVisible(Boolean(message));
    if (!message) return;
    const timer = setTimeout(() => setVisible(false), 5e3);
    return () => clearTimeout(timer);
  }, [message]);
  if (!visible || !message) return null;
  return /* @__PURE__ */ jsxs("div", { role: "status", className: "flex items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800", children: [
    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0" }),
      message
    ] }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setVisible(false), "aria-label": "Fermer", className: "rounded p-1 hover:bg-emerald-100", children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
  ] });
}
export {
  FlashMessage
};
