import { jsx, jsxs } from "react/jsx-runtime";
function AuthSimpleLayout({ children, title, description }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-medium", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center text-sm", children: description })
    ] }) }),
    children
  ] }) }) });
}
function AuthLayout({ children, title, description, ...props }) {
  return /* @__PURE__ */ jsx(AuthSimpleLayout, { title, description, ...props, children });
}
export {
  AuthLayout
};
