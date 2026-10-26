import { jsxs, jsx } from "react/jsx-runtime";
import { FlashMessage } from "./flash-message-CailxFxt.js";
import { X, Undo2, Redo2, Bold, Italic, Underline, Strikethrough, Palette, Highlighter, List, ListOrdered, Quote, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link2, Link2Off, Loader2, ImagePlus, Minus, Eraser, MoveVertical, CheckCircle2, XCircle, Circle, ArrowLeft, ExternalLink, RefreshCw, ChevronDown, Save, Trash2 } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "./button-BKLYmSbv.js";
import { Image } from "@tiptap/extension-image";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle, Color, BackgroundColor } from "@tiptap/extension-text-style";
import { Placeholder } from "@tiptap/extensions";
import { useEditor, EditorContent, Node, mergeAttributes } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { InputError } from "./input-error-CU3bfzUL.js";
import { AppLayout } from "./app-layout-C3STRvhP.js";
import { useForm, Head, Link, router } from "@inertiajs/react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./input-DbNPaXod.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
function split(value) {
  return value.split(",").map((keyword) => keyword.trim()).filter(Boolean);
}
function KeywordsInput({ id, value, onChange, max = 15 }) {
  const [draft, setDraft] = useState("");
  const keywords = split(value);
  const add = (raw) => {
    const additions = split(raw).filter((keyword) => !keywords.some((existing) => existing.toLowerCase() === keyword.toLowerCase()));
    if (additions.length === 0) return;
    onChange([...keywords, ...additions].slice(0, max).join(", "));
    setDraft("");
  };
  const remove = (index) => onChange(keywords.filter((_, i) => i !== index).join(", "));
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      add(draft);
    } else if (event.key === "Backspace" && draft === "" && keywords.length > 0) {
      remove(keywords.length - 1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "focus-within:border-brand-blue flex min-h-[2.75rem] flex-wrap items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-2 py-1.5", children: [
    keywords.map((keyword, index) => /* @__PURE__ */ jsxs("span", { className: "bg-brand-blue/10 text-brand-blue inline-flex items-center gap-1 rounded-md py-1 pr-1 pl-2 text-xs font-medium", children: [
      keyword,
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => remove(index), "aria-label": `Retirer ${keyword}`, className: "hover:bg-brand-blue/15 rounded p-0.5", children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" }) })
    ] }, keyword)),
    keywords.length < max && /* @__PURE__ */ jsx(
      "input",
      {
        id,
        value: draft,
        onChange: (event) => setDraft(event.target.value),
        onKeyDown,
        onBlur: () => add(draft),
        onPaste: (event) => {
          const text = event.clipboardData.getData("text");
          if (text.includes(",")) {
            event.preventDefault();
            add(text);
          }
        },
        placeholder: keywords.length === 0 ? "Ex. bâche publicitaire, impression Casablanca" : "Ajouter...",
        className: "min-w-[8rem] flex-1 bg-transparent px-1 py-1 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
      }
    )
  ] });
}
const Spacer = Node.create({
  name: "spacer",
  group: "block",
  atom: true,
  selectable: true,
  draggable: true,
  addAttributes() {
    return {
      size: {
        default: "md",
        parseHTML: (element) => element.getAttribute("data-size") ?? "md",
        renderHTML: (attributes) => ({ "data-size": attributes.size })
      }
    };
  },
  parseHTML() {
    return [{ tag: "div[data-spacer]" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-spacer": "" })];
  }
});
const ResizableImage = Image.extend({
  addAttributes() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      width: {
        default: null,
        parseHTML: (element) => element.style.width || null,
        renderHTML: (attributes) => attributes.width ? { style: `width: ${attributes.width}` } : {}
      }
    };
  }
});
const TEXT_COLORS = ["#1f2937", "#22313f", "#0876ce", "#15c8de", "#f5008f", "#c40072", "#16a34a", "#ea580c", "#dc2626", "#6b7280"];
const BACKGROUND_COLORS = ["#fef08a", "#bbf7d0", "#bae6fd", "#fbcfe8", "#fed7aa", "#e5e7eb"];
function xsrfToken() {
  const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}
async function uploadImage(file, uploadUrl) {
  var _a, _b;
  const body = new FormData();
  body.append("image", file);
  const response = await fetch(uploadUrl, {
    method: "POST",
    body,
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-XSRF-TOKEN": xsrfToken()
    }
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    throw new Error(((_b = (_a = payload == null ? void 0 : payload.errors) == null ? void 0 : _a.image) == null ? void 0 : _b[0]) ?? (payload == null ? void 0 : payload.message) ?? "L'image n'a pas pu être envoyée.");
  }
  return (await response.json()).url;
}
function RichTextEditor({ value, onChange, uploadUrl, placeholder, invalid }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const editorRef = useRef(null);
  const insertFiles = async (editor2, files, position) => {
    const images = files.filter((file) => file.type.startsWith("image/"));
    if (images.length === 0) return false;
    setUploading(true);
    setUploadError(null);
    try {
      for (const file of images) {
        const src = await uploadImage(file, uploadUrl);
        const alt = file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
        const chain = editor2.chain().focus();
        if (position !== void 0) {
          chain.insertContentAt(position, { type: "image", attrs: { src, alt } }).run();
        } else {
          chain.setImage({ src, alt }).run();
        }
      }
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "L'image n'a pas pu être envoyée.");
    } finally {
      setUploading(false);
    }
    return true;
  };
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" }
      }),
      TextStyle,
      Color,
      BackgroundColor,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      ResizableImage.configure({ inline: false, allowBase64: false }),
      Spacer,
      Placeholder.configure({ placeholder: placeholder ?? "" })
    ],
    content: value,
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class: "article-content min-h-[420px] px-5 py-6 outline-none sm:px-8",
        "aria-label": "Contenu de l’article"
      },
      handleDrop: (view, event, _slice, moved) => {
        var _a, _b;
        const files = Array.from(((_a = event.dataTransfer) == null ? void 0 : _a.files) ?? []);
        if (moved || files.length === 0 || !editorRef.current) return false;
        event.preventDefault();
        const position = (_b = view.posAtCoords({ left: event.clientX, top: event.clientY })) == null ? void 0 : _b.pos;
        void insertFiles(editorRef.current, files, position);
        return true;
      },
      handlePaste: (_view, event) => {
        var _a;
        const files = Array.from(((_a = event.clipboardData) == null ? void 0 : _a.files) ?? []);
        if (files.length === 0 || !editorRef.current) return false;
        event.preventDefault();
        void insertFiles(editorRef.current, files);
        return true;
      }
    },
    onUpdate: ({ editor: current }) => onChange(current.isEmpty ? "" : current.getHTML())
  });
  editorRef.current = editor;
  useEffect(() => {
    if (editor && !editor.isFocused && value !== editor.getHTML() && !(value === "" && editor.isEmpty)) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [editor, value]);
  if (!editor) return null;
  const currentBlock = (() => {
    for (const level of [1, 2, 3, 4]) {
      if (editor.isActive("heading", { level })) return `h${level}`;
    }
    return "p";
  })();
  const setBlock = (block) => {
    if (block === "p") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().setHeading({ level: Number(block.slice(1)) }).run();
    }
  };
  const setLink = () => {
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("Adresse du lien (https://..., /services, mailto:...)", previous ?? "https://");
    if (url === null) return;
    if (url.trim() === "" || url.trim() === "https://") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    const external = /^https?:\/\//i.test(url) && !url.includes(window.location.host);
    editor.chain().focus().extendMarkRange("link").setLink({ href: url.trim(), target: external ? "_blank" : null }).run();
  };
  const editImageAlt = () => {
    const current = editor.getAttributes("image").alt;
    const alt = window.prompt("Texte alternatif de l'image (décrit l'image pour Google et l'accessibilité)", current ?? "");
    if (alt !== null) editor.chain().focus().updateAttributes("image", { alt: alt.trim() }).run();
  };
  const imageSelected = editor.isActive("image");
  return /* @__PURE__ */ jsxs("div", { className: cn("overflow-hidden rounded-xl border bg-white", invalid ? "border-red-500" : "border-neutral-300 shadow-sm"), children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-neutral-200 bg-neutral-50 p-2 text-neutral-700", children: [
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Annuler", onClick: () => editor.chain().focus().undo().run(), disabled: !editor.can().undo(), children: /* @__PURE__ */ jsx(Undo2, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Rétablir", onClick: () => editor.chain().focus().redo().run(), disabled: !editor.can().redo(), children: /* @__PURE__ */ jsx(Redo2, {}) }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsxs(
        "select",
        {
          value: currentBlock,
          onChange: (event) => setBlock(event.target.value),
          "aria-label": "Type de bloc",
          className: "h-9 rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium focus:border-brand-blue focus:outline-none",
          children: [
            /* @__PURE__ */ jsx("option", { value: "p", children: "Paragraphe" }),
            /* @__PURE__ */ jsx("option", { value: "h1", children: "Titre H1" }),
            /* @__PURE__ */ jsx("option", { value: "h2", children: "Titre H2" }),
            /* @__PURE__ */ jsx("option", { value: "h3", children: "Titre H3" }),
            /* @__PURE__ */ jsx("option", { value: "h4", children: "Titre H4" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Gras", active: editor.isActive("bold"), onClick: () => editor.chain().focus().toggleBold().run(), children: /* @__PURE__ */ jsx(Bold, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Italique", active: editor.isActive("italic"), onClick: () => editor.chain().focus().toggleItalic().run(), children: /* @__PURE__ */ jsx(Italic, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Souligné", active: editor.isActive("underline"), onClick: () => editor.chain().focus().toggleUnderline().run(), children: /* @__PURE__ */ jsx(Underline, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Barré", active: editor.isActive("strike"), onClick: () => editor.chain().focus().toggleStrike().run(), children: /* @__PURE__ */ jsx(Strikethrough, {}) }),
      /* @__PURE__ */ jsx(
        ColorMenu,
        {
          label: "Couleur du texte",
          icon: /* @__PURE__ */ jsx(Palette, {}),
          colors: TEXT_COLORS,
          current: editor.getAttributes("textStyle").color,
          onPick: (color) => editor.chain().focus().setColor(color).run(),
          onClear: () => editor.chain().focus().unsetColor().run()
        }
      ),
      /* @__PURE__ */ jsx(
        ColorMenu,
        {
          label: "Couleur de fond",
          icon: /* @__PURE__ */ jsx(Highlighter, {}),
          colors: BACKGROUND_COLORS,
          current: editor.getAttributes("textStyle").backgroundColor,
          onPick: (color) => editor.chain().focus().setBackgroundColor(color).run(),
          onClear: () => editor.chain().focus().unsetBackgroundColor().run()
        }
      ),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Liste à puces", active: editor.isActive("bulletList"), onClick: () => editor.chain().focus().toggleBulletList().run(), children: /* @__PURE__ */ jsx(List, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Liste numérotée", active: editor.isActive("orderedList"), onClick: () => editor.chain().focus().toggleOrderedList().run(), children: /* @__PURE__ */ jsx(ListOrdered, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Citation", active: editor.isActive("blockquote"), onClick: () => editor.chain().focus().toggleBlockquote().run(), children: /* @__PURE__ */ jsx(Quote, {}) }),
      /* @__PURE__ */ jsx(Divider, {}),
      [
        ["left", "Aligner à gauche", /* @__PURE__ */ jsx(AlignLeft, {}, "l")],
        ["center", "Centrer", /* @__PURE__ */ jsx(AlignCenter, {}, "c")],
        ["right", "Aligner à droite", /* @__PURE__ */ jsx(AlignRight, {}, "r")],
        ["justify", "Justifier", /* @__PURE__ */ jsx(AlignJustify, {}, "j")]
      ].map(([alignment, label, icon]) => /* @__PURE__ */ jsx(
        ToolbarButton,
        {
          label,
          active: editor.isActive({ textAlign: alignment }),
          onClick: () => editor.chain().focus().setTextAlign(alignment).run(),
          children: icon
        },
        alignment
      )),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Ajouter / modifier un lien", active: editor.isActive("link"), onClick: setLink, children: /* @__PURE__ */ jsx(Link2, {}) }),
      editor.isActive("link") && /* @__PURE__ */ jsx(ToolbarButton, { label: "Retirer le lien", onClick: () => editor.chain().focus().extendMarkRange("link").unsetLink().run(), children: /* @__PURE__ */ jsx(Link2Off, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Insérer une image", onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      }, disabled: uploading, children: uploading ? /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }) : /* @__PURE__ */ jsx(ImagePlus, {}) }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: fileInputRef,
          type: "file",
          accept: "image/jpeg,image/png,image/webp,image/gif",
          multiple: true,
          className: "hidden",
          onChange: (event) => {
            const files = Array.from(event.target.files ?? []);
            event.target.value = "";
            void insertFiles(editor, files);
          }
        }
      ),
      /* @__PURE__ */ jsx(SpacerMenu, { onPick: (size) => editor.chain().focus().insertContent({ type: "spacer", attrs: { size } }).run() }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Ligne de séparation", onClick: () => editor.chain().focus().setHorizontalRule().run(), children: /* @__PURE__ */ jsx(Minus, {}) }),
      /* @__PURE__ */ jsx(ToolbarButton, { label: "Effacer la mise en forme", onClick: () => editor.chain().focus().unsetAllMarks().clearNodes().run(), children: /* @__PURE__ */ jsx(Eraser, {}) })
    ] }),
    imageSelected && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-brand-blue/5 px-3 py-2 text-sm text-neutral-700", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Image :" }),
      ["100%", "75%", "50%"].map((width) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().updateAttributes("image", { width: width === "100%" ? null : width }).run(),
          className: cn(
            "rounded-md border px-2.5 py-1 text-xs font-semibold",
            (editor.getAttributes("image").width ?? "100%") === width ? "border-brand-blue bg-brand-blue text-white" : "border-neutral-300 bg-white hover:border-brand-blue"
          ),
          children: width
        },
        width
      )),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: editImageAlt, className: "rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-semibold hover:border-brand-blue", children: "Texte alternatif" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => editor.chain().focus().deleteSelection().run(),
          className: "rounded-md border border-red-200 bg-white px-2.5 py-1 text-xs font-semibold text-red-600 hover:border-red-400",
          children: "Supprimer l'image"
        }
      )
    ] }),
    uploadError && /* @__PURE__ */ jsx("p", { className: "border-b border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700", children: uploadError }),
    /* @__PURE__ */ jsx(EditorContent, { editor, className: "rich-text-editor text-left" }),
    /* @__PURE__ */ jsx("p", { className: "border-t border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-neutral-500", children: "Astuce : glissez-déposez ou collez une image directement entre deux paragraphes. Le titre de l'article est déjà le H1 de la page : utilisez plutôt H2 à H4 pour structurer le contenu." })
  ] });
}
function ToolbarButton({
  label,
  onClick,
  active = false,
  disabled = false,
  children
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      title: label,
      "aria-label": label,
      "aria-pressed": active,
      onMouseDown: (event) => event.preventDefault(),
      onClick,
      disabled,
      className: cn(
        "flex h-9 w-9 items-center justify-center rounded-md transition-colors disabled:cursor-not-allowed disabled:opacity-40 [&_svg]:h-4 [&_svg]:w-4",
        active ? "bg-brand-blue text-white" : "hover:bg-neutral-200"
      ),
      children
    }
  );
}
function Divider() {
  return /* @__PURE__ */ jsx("span", { className: "mx-1 h-6 w-px bg-neutral-300", "aria-hidden": "true" });
}
function useOutsideClose(open, close) {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const handle = (event) => {
      var _a;
      if (!((_a = ref.current) == null ? void 0 : _a.contains(event.target))) close();
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [open, close]);
  return ref;
}
function ColorMenu({
  label,
  icon,
  colors,
  current,
  onPick,
  onClear
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose(open, () => setOpen(false));
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        title: label,
        "aria-label": label,
        "aria-expanded": open,
        onMouseDown: (event) => event.preventDefault(),
        onClick: () => setOpen((value) => !value),
        className: "relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-200 [&_svg]:h-4 [&_svg]:w-4",
        children: [
          icon,
          /* @__PURE__ */ jsx("span", { className: "absolute right-1.5 bottom-1 left-1.5 h-1 rounded-full", style: { backgroundColor: current ?? "transparent" } })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "absolute top-full left-0 z-20 mt-1 w-52 rounded-lg border border-neutral-200 bg-white p-3 shadow-xl", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-xs font-semibold text-neutral-500", children: label }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-2", children: colors.map((color) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          title: color,
          "aria-label": `${label} ${color}`,
          onMouseDown: (event) => event.preventDefault(),
          onClick: () => {
            onPick(color);
            setOpen(false);
          },
          className: cn("h-7 w-7 rounded-md border border-neutral-200", current === color && "ring-2 ring-brand-blue ring-offset-1"),
          style: { backgroundColor: color }
        },
        color
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between gap-2 border-t border-neutral-100 pt-3", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-xs text-neutral-600", children: [
          "Autre",
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "color",
              defaultValue: current ?? "#0876ce",
              onChange: (event) => onPick(event.target.value),
              className: "h-7 w-9 cursor-pointer rounded border border-neutral-200"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onMouseDown: (event) => event.preventDefault(),
            onClick: () => {
              onClear();
              setOpen(false);
            },
            className: "text-xs font-semibold text-neutral-600 underline hover:text-neutral-900",
            children: "Réinitialiser"
          }
        )
      ] })
    ] })
  ] });
}
function SpacerMenu({ onPick }) {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClose(open, () => setOpen(false));
  const sizes = [
    ["sm", "Petit (16 px)"],
    ["md", "Moyen (32 px)"],
    ["lg", "Grand (64 px)"],
    ["xl", "Très grand (96 px)"]
  ];
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        title: "Insérer un espacement",
        "aria-label": "Insérer un espacement",
        "aria-expanded": open,
        onMouseDown: (event) => event.preventDefault(),
        onClick: () => setOpen((value) => !value),
        className: "flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-200 [&_svg]:h-4 [&_svg]:w-4",
        children: /* @__PURE__ */ jsx(MoveVertical, {})
      }
    ),
    open && /* @__PURE__ */ jsx("div", { className: "absolute top-full right-0 z-20 mt-1 w-48 rounded-lg border border-neutral-200 bg-white p-1 shadow-xl sm:right-auto sm:left-0", children: sizes.map(([size, label]) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onMouseDown: (event) => event.preventDefault(),
        onClick: () => {
          onPick(size);
          setOpen(false);
        },
        className: "block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-100",
        children: label
      },
      size
    )) })
  ] });
}
function normalize(value) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}
function analyze(input) {
  var _a;
  const doc = new DOMParser().parseFromString(input.content || "", "text/html");
  const text = (doc.body.textContent ?? "").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  const keyword = normalize(input.focusKeyword);
  const has = (value) => keyword !== "" && normalize(value).includes(keyword);
  const keywordSlug = keyword.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const effectiveTitle = input.metaTitle || `${input.title} | webprint.ma`;
  const effectiveDescription = input.metaDescription || input.excerpt;
  const firstParagraph = ((_a = doc.body.querySelector("p")) == null ? void 0 : _a.textContent) ?? "";
  const images = Array.from(doc.body.querySelectorAll("img"));
  const links = Array.from(doc.body.querySelectorAll("a[href]")).map((link) => link.getAttribute("href") ?? "");
  const internalLinks = links.filter((href) => href.startsWith("/") || href.includes("webprint.ma"));
  return [
    { label: "Mot-clé principal défini", passed: keyword !== "", tip: "Choisissez l’expression que les clients tapent dans Google." },
    { label: "Mot-clé dans le titre", passed: has(input.title), tip: "Placez le mot-clé principal dans le titre (H1)." },
    { label: "Mot-clé dans le meta title", passed: has(effectiveTitle), tip: "Ajoutez le mot-clé au meta title, idéalement au début." },
    { label: "Mot-clé dans la meta description", passed: has(effectiveDescription), tip: "Reprenez le mot-clé dans la meta description." },
    { label: "Mot-clé dans l’URL", passed: keywordSlug !== "" && input.slug.includes(keywordSlug), tip: "Le slug doit contenir le mot-clé." },
    { label: "Mot-clé dans le premier paragraphe", passed: has(firstParagraph), tip: "Citez le mot-clé dès l’introduction." },
    {
      label: `Meta title de 30 à 60 caractères (${effectiveTitle.length})`,
      passed: effectiveTitle.length >= 30 && effectiveTitle.length <= 60,
      tip: "Un titre trop long est coupé par Google, trop court il est peu attractif."
    },
    {
      label: `Meta description de 120 à 160 caractères (${effectiveDescription.length})`,
      passed: effectiveDescription.length >= 120 && effectiveDescription.length <= 160,
      tip: "Rédigez une description incitative de 120 à 160 caractères."
    },
    { label: `Au moins 300 mots (${words})`, passed: words >= 300, tip: "Un contenu plus complet se positionne mieux." },
    { label: "Au moins un sous-titre H2", passed: doc.body.querySelector("h2") !== null, tip: "Structurez le texte avec des sous-titres H2 et H3." },
    { label: "Pas de H1 dans le contenu", passed: doc.body.querySelector("h1") === null, tip: "Le titre de l’article est déjà le H1 : utilisez H2 dans le contenu." },
    { label: "Image principale ajoutée", passed: input.hasFeaturedImage, tip: "Elle sert aussi d’aperçu sur Facebook, WhatsApp et LinkedIn." },
    {
      label: "Texte alternatif de l’image principale",
      passed: !input.hasFeaturedImage || input.featuredImageAlt.trim() !== "",
      tip: "Décrivez l’image en quelques mots (aide Google Images)."
    },
    {
      label: "Toutes les images du contenu ont un texte alternatif",
      passed: images.every((image) => (image.getAttribute("alt") ?? "").trim() !== ""),
      tip: "Cliquez sur une image dans l’éditeur puis sur « Texte alternatif »."
    },
    { label: "Au moins un lien interne", passed: internalLinks.length > 0, tip: "Ajoutez un lien vers un service (ex. /impression-baches) ou un autre article." }
  ];
}
function SeoChecklist({ input }) {
  const checks = useMemo(() => analyze(input), [input]);
  const passed = checks.filter((check) => check.passed).length;
  const score = Math.round(passed / checks.length * 100);
  const tone = score >= 80 ? "emerald" : score >= 50 ? "amber" : "red";
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 text-sm font-bold",
            tone === "emerald" && "border-emerald-500 text-emerald-700",
            tone === "amber" && "border-amber-400 text-amber-700",
            tone === "red" && "border-red-400 text-red-600"
          ),
          children: score
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-neutral-900", children: "Score SEO" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-neutral-500", children: [
          passed,
          "/",
          checks.length,
          " critères remplis"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: checks.map((check) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
      check.passed ? /* @__PURE__ */ jsx(CheckCircle2, { className: "mt-px h-4 w-4 shrink-0 text-emerald-600" }) : input.focusKeyword || !check.label.startsWith("Mot-clé") ? /* @__PURE__ */ jsx(XCircle, { className: "mt-px h-4 w-4 shrink-0 text-red-500" }) : /* @__PURE__ */ jsx(Circle, { className: "mt-px h-4 w-4 shrink-0 text-neutral-300" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("span", { className: check.passed ? "text-neutral-700" : "font-medium text-neutral-900", children: check.label }),
        !check.passed && /* @__PURE__ */ jsx("span", { className: "block text-neutral-500", children: check.tip })
      ] })
    ] }, check.label)) })
  ] });
}
function slugify(value) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/['’]/g, "-").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 180);
}
function toLocalInput(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  const offset = date.getTimezoneOffset() * 6e4;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}
const inputClass = "w-full rounded-lg border border-neutral-300 bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 focus:outline-none";
function ArticleFormPage({ article }) {
  return /* @__PURE__ */ jsx(ArticleForm, { article }, (article == null ? void 0 : article.id) ?? "new");
}
function ArticleForm({ article }) {
  const isEdit = article !== null;
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [previewUrl, setPreviewUrl] = useState((article == null ? void 0 : article.featured_image_url) ?? null);
  const [advancedOpen, setAdvancedOpen] = useState(Boolean((article == null ? void 0 : article.canonical_url) || (article == null ? void 0 : article.noindex)));
  const { data, setData, setDefaults, post, processing, errors, transform, isDirty } = useForm({
    title: (article == null ? void 0 : article.title) ?? "",
    slug: (article == null ? void 0 : article.slug) ?? "",
    excerpt: (article == null ? void 0 : article.excerpt) ?? "",
    content: (article == null ? void 0 : article.content) ?? "",
    status: (article == null ? void 0 : article.status) ?? "draft",
    published_at: toLocalInput((article == null ? void 0 : article.published_at) ?? null),
    meta_title: (article == null ? void 0 : article.meta_title) ?? "",
    meta_description: (article == null ? void 0 : article.meta_description) ?? "",
    focus_keyword: (article == null ? void 0 : article.focus_keyword) ?? "",
    meta_keywords: (article == null ? void 0 : article.meta_keywords) ?? "",
    featured_image_alt: (article == null ? void 0 : article.featured_image_alt) ?? "",
    canonical_url: (article == null ? void 0 : article.canonical_url) ?? "",
    noindex: (article == null ? void 0 : article.noindex) ?? false,
    featured_image: null,
    remove_featured_image: false
  });
  useEffect(() => {
    if (!article) return;
    const synced = {
      ...data,
      slug: article.slug,
      status: article.status,
      published_at: toLocalInput(article.published_at),
      meta_keywords: article.meta_keywords ?? "",
      featured_image: null,
      remove_featured_image: false
    };
    setData(synced);
    setDefaults(synced);
    setPreviewUrl(article.featured_image_url ?? null);
  }, [article == null ? void 0 : article.updated_at]);
  const breadcrumbs = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Articles", href: "/admin/articles" },
    { title: isEdit ? "Modifier" : "Nouvel article", href: isEdit ? `/admin/articles/${article.id}/edit` : "/admin/articles/create" }
  ];
  const submit = (status) => (event) => {
    event == null ? void 0 : event.preventDefault();
    transform((current) => ({
      ...current,
      status,
      noindex: current.noindex ? 1 : 0,
      published_at: current.published_at ? new Date(current.published_at).toISOString() : "",
      ...isEdit ? { _method: "put" } : {}
    }));
    post(isEdit ? `/admin/articles/${article.id}` : "/admin/articles", { forceFormData: true, preserveScroll: true });
  };
  const onTitleChange = (title) => {
    setData((current) => ({ ...current, title, slug: slugTouched ? current.slug : slugify(title) }));
  };
  const onImageChange = (file) => {
    setData((current) => ({ ...current, featured_image: file, remove_featured_image: false }));
    setPreviewUrl(file ? URL.createObjectURL(file) : (article == null ? void 0 : article.featured_image_url) ?? null);
  };
  const removeImage = () => {
    setData((current) => ({ ...current, featured_image: null, remove_featured_image: true }));
    setPreviewUrl(null);
  };
  const deleteArticle = () => {
    if (article && confirm(`Supprimer définitivement l'article « ${article.title} » ?`)) {
      router.delete(`/admin/articles/${article.id}`);
    }
  };
  const seoTitle = data.meta_title || `${data.title || "Titre de l'article"} | webprint.ma`;
  const seoDescription = data.meta_description || data.excerpt || "La meta description apparaît ici. Rédigez 120 à 160 caractères.";
  const publicPath = `/articles/${data.slug || slugify(data.title) || "nom-de-l-article"}`;
  const isPublished = (article == null ? void 0 : article.status) === "published";
  const scheduled = useMemo(() => data.published_at !== "" && new Date(data.published_at) > /* @__PURE__ */ new Date(), [data.published_at]);
  const seoInput = useMemo(
    () => ({
      title: data.title,
      slug: data.slug || slugify(data.title),
      excerpt: data.excerpt,
      content: data.content,
      metaTitle: data.meta_title,
      metaDescription: data.meta_description,
      focusKeyword: data.focus_keyword,
      hasFeaturedImage: previewUrl !== null,
      featuredImageAlt: data.featured_image_alt
    }),
    [data.title, data.slug, data.excerpt, data.content, data.meta_title, data.meta_description, data.focus_keyword, data.featured_image_alt, previewUrl]
  );
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: isEdit ? `Modifier : ${article.title}` : "Nouvel article" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit(data.status), className: "flex h-full flex-1 flex-col gap-6 rounded-xl bg-neutral-50 p-4 text-neutral-900 sm:p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/admin/articles",
              className: "inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                "Retour"
              ]
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold tracking-wide", children: isEdit ? "Modifier l'article" : "Nouvel article" }),
          isEdit && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase",
                isPublished ? "bg-emerald-50 text-emerald-700" : "bg-neutral-200 text-neutral-700"
              ),
              children: isPublished ? "Publié" : "Brouillon"
            }
          )
        ] }),
        isEdit && /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/articles/${article.slug}`,
            target: "_blank",
            rel: "noreferrer",
            className: "hover:border-brand-blue hover:text-brand-blue inline-flex items-center gap-1.5 self-start rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-700 transition-colors sm:self-auto",
            children: [
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
              isPublished ? "Voir l'article" : "Prévisualiser"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(FlashMessage, {}),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col gap-6", children: [
          /* @__PURE__ */ jsxs(Panel, { children: [
            /* @__PURE__ */ jsx(Field, { label: "Titre", htmlFor: "title", error: errors.title, required: true, children: /* @__PURE__ */ jsx(
              "input",
              {
                id: "title",
                value: data.title,
                onChange: (event) => onTitleChange(event.target.value),
                className: cn(inputClass, "text-base font-semibold"),
                placeholder: "Ex. Comment choisir le bon support pour votre bâche publicitaire",
                maxLength: 255,
                required: true
              }
            ) }),
            /* @__PURE__ */ jsx(Field, { label: "Slug (URL)", htmlFor: "slug", error: errors.slug, hint: `webprint.ma${publicPath}`, children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "slug",
                  value: data.slug,
                  onChange: (event) => {
                    setSlugTouched(true);
                    setData("slug", slugify(event.target.value.replace(/\s/g, "-")) + (event.target.value.endsWith("-") ? "-" : ""));
                  },
                  onBlur: () => setData("slug", slugify(data.slug)),
                  className: inputClass,
                  placeholder: "genere-automatiquement-depuis-le-titre"
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  title: "Régénérer depuis le titre",
                  onClick: () => {
                    setSlugTouched(false);
                    setData("slug", slugify(data.title));
                  },
                  className: "hover:border-brand-blue hover:text-brand-blue inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 text-xs text-neutral-700",
                  children: [
                    /* @__PURE__ */ jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
                    /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Régénérer" })
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Field, { label: "Résumé", htmlFor: "excerpt", error: errors.excerpt, hint: `${data.excerpt.length}/500 - affiché sur la carte de l'article et en introduction.`, children: /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "excerpt",
                value: data.excerpt,
                onChange: (event) => setData("excerpt", event.target.value),
                rows: 3,
                maxLength: 500,
                className: inputClass,
                placeholder: "Deux ou trois phrases qui donnent envie de lire l'article."
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold tracking-wider text-neutral-500 uppercase", children: "Contenu" }),
            /* @__PURE__ */ jsx(
              RichTextEditor,
              {
                value: data.content,
                onChange: (html) => setData("content", html),
                uploadUrl: "/admin/articles/upload-image",
                placeholder: "Commencez à rédiger votre article...",
                invalid: Boolean(errors.content)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.content })
          ] }),
          /* @__PURE__ */ jsxs(Panel, { title: "Référencement (SEO)", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: "Mot-clé principal",
                  htmlFor: "focus_keyword",
                  error: errors.focus_keyword,
                  hint: "L'expression principale visée sur Google (ex. bâche publicitaire Casablanca).",
                  children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "focus_keyword",
                      value: data.focus_keyword,
                      onChange: (event) => setData("focus_keyword", event.target.value),
                      className: inputClass,
                      maxLength: 100,
                      placeholder: "Ex. bâche publicitaire"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Field,
                {
                  label: "Mots-clés secondaires",
                  htmlFor: "meta_keywords",
                  error: errors.meta_keywords,
                  hint: "Entrée ou virgule pour ajouter. 15 maximum : synonymes, villes, variantes.",
                  children: /* @__PURE__ */ jsx(KeywordsInput, { id: "meta_keywords", value: data.meta_keywords, onChange: (value) => setData("meta_keywords", value) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: "Meta title",
                htmlFor: "meta_title",
                error: errors.meta_title,
                hint: /* @__PURE__ */ jsx(Counter, { value: data.meta_title.length, min: 30, ideal: 60, fallback: "Vide = titre de l'article + « | webprint.ma »" }),
                children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "meta_title",
                    value: data.meta_title,
                    onChange: (event) => setData("meta_title", event.target.value),
                    className: inputClass,
                    maxLength: 255,
                    placeholder: `${data.title || "Titre de l'article"} | webprint.ma`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: "Meta description",
                htmlFor: "meta_description",
                error: errors.meta_description,
                hint: /* @__PURE__ */ jsx(Counter, { value: data.meta_description.length, min: 120, ideal: 160, fallback: "Vide = résumé de l'article" }),
                children: /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "meta_description",
                    value: data.meta_description,
                    onChange: (event) => setData("meta_description", event.target.value),
                    rows: 3,
                    maxLength: 500,
                    className: inputClass,
                    placeholder: "Résumé incitatif affiché sous le titre dans les résultats Google."
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-neutral-200 bg-white p-4 text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold tracking-wider text-neutral-400 uppercase", children: "Aperçu Google" }),
              /* @__PURE__ */ jsxs("p", { className: "mt-2 truncate text-xs text-neutral-600", children: [
                "webprint.ma › articles › ",
                data.slug || "..."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 line-clamp-1 text-lg text-[#1a0dab]", children: seoTitle }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 line-clamp-2 text-sm text-neutral-600", children: seoDescription })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-t border-neutral-200 pt-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setAdvancedOpen((open) => !open),
                  "aria-expanded": advancedOpen,
                  className: "flex w-full items-center justify-between text-xs font-semibold tracking-wider text-neutral-600 uppercase",
                  children: [
                    "Options avancées",
                    /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", advancedOpen && "rotate-180") })
                  ]
                }
              ),
              advancedOpen && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    label: "URL canonique",
                    htmlFor: "canonical_url",
                    error: errors.canonical_url,
                    hint: "À remplir uniquement si cet article reprend un contenu publié ailleurs. Vide = URL de l'article.",
                    children: /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "canonical_url",
                        type: "url",
                        value: data.canonical_url,
                        onChange: (event) => setData("canonical_url", event.target.value),
                        className: inputClass,
                        placeholder: "https://..."
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-3", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: data.noindex,
                      onChange: (event) => setData("noindex", event.target.checked),
                      className: "accent-brand-blue mt-0.5 h-4 w-4"
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-neutral-900", children: "Ne pas indexer dans Google (noindex)" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-xs text-neutral-500", children: "L'article reste visible sur le site mais n'apparaît ni dans Google ni dans le sitemap." })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs(Panel, { title: "Publication", children: [
            /* @__PURE__ */ jsx(Field, { label: "Statut", htmlFor: "status", children: /* @__PURE__ */ jsxs(
              "select",
              {
                id: "status",
                value: data.status,
                onChange: (event) => setData("status", event.target.value),
                className: inputClass,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "draft", children: "Brouillon (non visible)" }),
                  /* @__PURE__ */ jsx("option", { value: "published", children: "Publié" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: "Date de publication",
                htmlFor: "published_at",
                error: errors.published_at,
                hint: scheduled ? "Date future : l'article sera visible à partir de cette date." : "Laisser vide pour utiliser la date de publication effective.",
                children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "published_at",
                    type: "datetime-local",
                    value: data.published_at,
                    onChange: (event) => setData("published_at", event.target.value),
                    className: inputClass
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 border-t border-neutral-200 pt-4", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: submit("published"),
                  disabled: processing,
                  className: "bg-brand-blue inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0664af] disabled:opacity-60",
                  children: [
                    processing ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }),
                    isPublished ? "Mettre à jour" : "Publier"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: submit("draft"),
                  disabled: processing,
                  className: "inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-400 disabled:opacity-60",
                  children: isPublished ? "Dépublier (brouillon)" : "Enregistrer le brouillon"
                }
              ),
              isDirty && /* @__PURE__ */ jsx("p", { className: "text-center text-[11px] text-amber-600", children: "Modifications non enregistrées" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Panel, { title: "Image principale", children: [
            previewUrl ? /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-lg", children: [
              /* @__PURE__ */ jsx("img", { src: previewUrl, alt: data.featured_image_alt || "Aperçu de l'image principale", className: "aspect-[16/10] w-full object-cover" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: removeImage,
                  className: "absolute top-2 right-2 inline-flex items-center gap-1 rounded-md bg-white/95 px-2 py-1 text-[11px] font-semibold text-red-600 shadow-sm hover:text-red-700",
                  children: [
                    /* @__PURE__ */ jsx(Trash2, { className: "h-3.5 w-3.5" }),
                    "Retirer"
                  ]
                }
              )
            ] }) : null,
            /* @__PURE__ */ jsxs(
              "label",
              {
                className: cn(
                  "hover:border-brand-blue hover:text-brand-blue flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-white px-4 text-center text-xs text-neutral-500 transition-colors",
                  previewUrl ? "py-3" : "py-10"
                ),
                children: [
                  /* @__PURE__ */ jsx(ImagePlus, { className: "h-5 w-5" }),
                  previewUrl ? "Remplacer l'image" : "Choisir une image (JPG, PNG, WebP - 5 Mo max)",
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "file",
                      accept: "image/jpeg,image/png,image/webp",
                      className: "hidden",
                      onChange: (event) => {
                        var _a;
                        return onImageChange(((_a = event.target.files) == null ? void 0 : _a[0]) ?? null);
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.featured_image }),
            /* @__PURE__ */ jsx(
              Field,
              {
                label: "Texte alternatif (alt)",
                htmlFor: "featured_image_alt",
                error: errors.featured_image_alt,
                hint: "Décrivez l'image pour Google Images et l'accessibilité.",
                children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "featured_image_alt",
                    value: data.featured_image_alt,
                    onChange: (event) => setData("featured_image_alt", event.target.value),
                    className: inputClass,
                    maxLength: 255,
                    placeholder: "Ex. Bâche publicitaire imprimée pour un magasin à Casablanca"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-neutral-500", children: "Format conseillé : 1600 × 900 px. Utilisée sur la carte, en haut de l'article et pour le partage sur les réseaux." })
          ] }),
          /* @__PURE__ */ jsx(Panel, { title: "Analyse SEO", children: /* @__PURE__ */ jsx(SeoChecklist, { input: seoInput }) }),
          isEdit && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: deleteArticle,
              className: "inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm text-red-600 transition-colors hover:border-red-400 hover:text-red-700",
              children: [
                /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }),
                "Supprimer l'article"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Panel({ title, children }) {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5", children: [
    title && /* @__PURE__ */ jsx("h2", { className: "text-xs font-bold tracking-[0.15em] text-neutral-700 uppercase", children: title }),
    children
  ] });
}
function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor, className: "text-[11px] font-semibold tracking-wider text-neutral-500 uppercase", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-brand-blue", children: " *" })
    ] }),
    children,
    hint && /* @__PURE__ */ jsx("div", { className: "text-[11px] text-neutral-500", children: hint }),
    /* @__PURE__ */ jsx(InputError, { message: error })
  ] });
}
function Counter({ value, min, ideal, fallback }) {
  if (value === 0) return /* @__PURE__ */ jsx("span", { children: fallback });
  const tooLong = value > ideal;
  const tooShort = value < min;
  return /* @__PURE__ */ jsxs("span", { className: tooLong || tooShort ? "text-amber-600" : "text-emerald-600", children: [
    value,
    "/",
    ideal,
    " caractères",
    tooLong ? " - risque d’être tronqué par Google" : tooShort ? ` - visez au moins ${min}` : " - longueur idéale"
  ] });
}
export {
  ArticleFormPage as default
};
