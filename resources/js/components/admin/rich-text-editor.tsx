import { cn } from '@/lib/utils';
import { Image } from '@tiptap/extension-image';
import { TextAlign } from '@tiptap/extension-text-align';
import { BackgroundColor, Color, TextStyle } from '@tiptap/extension-text-style';
import { Placeholder } from '@tiptap/extensions';
import { EditorContent, mergeAttributes, Node, useEditor, type Editor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Bold,
    Eraser,
    Highlighter,
    ImagePlus,
    Italic,
    Link2,
    Link2Off,
    List,
    ListOrdered,
    Loader2,
    Minus,
    MoveVertical,
    Palette,
    Quote,
    Redo2,
    Strikethrough,
    Underline,
    Undo2,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Bloc d'espacement vertical entre deux blocs de contenu. */
const Spacer = Node.create({
    name: 'spacer',
    group: 'block',
    atom: true,
    selectable: true,
    draggable: true,

    addAttributes() {
        return {
            size: {
                default: 'md',
                parseHTML: (element) => element.getAttribute('data-size') ?? 'md',
                renderHTML: (attributes) => ({ 'data-size': attributes.size }),
            },
        };
    },

    parseHTML() {
        return [{ tag: 'div[data-spacer]' }];
    },

    renderHTML({ HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes, { 'data-spacer': '' })];
    },
});

/** Image avec largeur reglable (100 %, 75 %, 50 %), enregistree en style inline. */
const ResizableImage = Image.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            width: {
                default: null,
                parseHTML: (element) => element.style.width || null,
                renderHTML: (attributes) => (attributes.width ? { style: `width: ${attributes.width}` } : {}),
            },
        };
    },
});

const TEXT_COLORS = ['#1f2937', '#22313f', '#0876ce', '#15c8de', '#f5008f', '#c40072', '#16a34a', '#ea580c', '#dc2626', '#6b7280'];
const BACKGROUND_COLORS = ['#fef08a', '#bbf7d0', '#bae6fd', '#fbcfe8', '#fed7aa', '#e5e7eb'];

type HeadingLevel = 1 | 2 | 3 | 4;

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
    uploadUrl: string;
    placeholder?: string;
    invalid?: boolean;
}

function xsrfToken(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : '';
}

async function uploadImage(file: File, uploadUrl: string): Promise<string> {
    const body = new FormData();
    body.append('image', file);

    const response = await fetch(uploadUrl, {
        method: 'POST',
        body,
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': xsrfToken(),
        },
    });

    if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.errors?.image?.[0] ?? payload?.message ?? "L'image n'a pas pu être envoyée.");
    }

    return (await response.json()).url as string;
}

export default function RichTextEditor({ value, onChange, uploadUrl, placeholder, invalid }: RichTextEditorProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const editorRef = useRef<Editor | null>(null);

    const insertFiles = async (editor: Editor, files: File[], position?: number) => {
        const images = files.filter((file) => file.type.startsWith('image/'));
        if (images.length === 0) return false;

        setUploading(true);
        setUploadError(null);
        try {
            for (const file of images) {
                const src = await uploadImage(file, uploadUrl);
                const alt = file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');
                const chain = editor.chain().focus();
                if (position !== undefined) {
                    chain.insertContentAt(position, { type: 'image', attrs: { src, alt } }).run();
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
                link: { openOnClick: false, autolink: true, defaultProtocol: 'https' },
            }),
            TextStyle,
            Color,
            BackgroundColor,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            ResizableImage.configure({ inline: false, allowBase64: false }),
            Spacer,
            Placeholder.configure({ placeholder: placeholder ?? '' }),
        ],
        content: value,
        shouldRerenderOnTransaction: true,
        editorProps: {
            attributes: {
                class: 'article-content min-h-[420px] px-5 py-6 outline-none sm:px-8',
                'aria-label': 'Contenu de l’article',
            },
            handleDrop: (view, event, _slice, moved) => {
                const files = Array.from(event.dataTransfer?.files ?? []);
                if (moved || files.length === 0 || !editorRef.current) return false;
                event.preventDefault();
                const position = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
                void insertFiles(editorRef.current, files, position);
                return true;
            },
            handlePaste: (_view, event) => {
                const files = Array.from(event.clipboardData?.files ?? []);
                if (files.length === 0 || !editorRef.current) return false;
                event.preventDefault();
                void insertFiles(editorRef.current, files);
                return true;
            },
        },
        onUpdate: ({ editor: current }) => onChange(current.isEmpty ? '' : current.getHTML()),
    });

    editorRef.current = editor;

    // Synchronise le contenu si la valeur change de l'exterieur (ex. rechargement apres enregistrement).
    useEffect(() => {
        if (editor && !editor.isFocused && value !== editor.getHTML() && !(value === '' && editor.isEmpty)) {
            editor.commands.setContent(value, { emitUpdate: false });
        }
    }, [editor, value]);

    if (!editor) return null;

    const currentBlock = (() => {
        for (const level of [1, 2, 3, 4] as HeadingLevel[]) {
            if (editor.isActive('heading', { level })) return `h${level}`;
        }
        return 'p';
    })();

    const setBlock = (block: string) => {
        if (block === 'p') {
            editor.chain().focus().setParagraph().run();
        } else {
            editor
                .chain()
                .focus()
                .setHeading({ level: Number(block.slice(1)) as HeadingLevel })
                .run();
        }
    };

    const setLink = () => {
        const previous = editor.getAttributes('link').href as string | undefined;
        const url = window.prompt('Adresse du lien (https://..., /services, mailto:...)', previous ?? 'https://');
        if (url === null) return;
        if (url.trim() === '' || url.trim() === 'https://') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        const external = /^https?:\/\//i.test(url) && !url.includes(window.location.host);
        editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({ href: url.trim(), target: external ? '_blank' : null })
            .run();
    };

    const editImageAlt = () => {
        const current = editor.getAttributes('image').alt as string | undefined;
        const alt = window.prompt("Texte alternatif de l'image (décrit l'image pour Google et l'accessibilité)", current ?? '');
        if (alt !== null) editor.chain().focus().updateAttributes('image', { alt: alt.trim() }).run();
    };

    const imageSelected = editor.isActive('image');

    return (
        <div className={cn('overflow-hidden rounded-xl border bg-white', invalid ? 'border-red-500' : 'border-neutral-300 shadow-sm')}>
            <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-neutral-200 bg-neutral-50 p-2 text-neutral-700">
                <ToolbarButton label="Annuler" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                    <Undo2 />
                </ToolbarButton>
                <ToolbarButton label="Rétablir" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    <Redo2 />
                </ToolbarButton>
                <Divider />

                <select
                    value={currentBlock}
                    onChange={(event) => setBlock(event.target.value)}
                    aria-label="Type de bloc"
                    className="h-9 rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium focus:border-brand-blue focus:outline-none"
                >
                    <option value="p">Paragraphe</option>
                    <option value="h1">Titre H1</option>
                    <option value="h2">Titre H2</option>
                    <option value="h3">Titre H3</option>
                    <option value="h4">Titre H4</option>
                </select>
                <Divider />

                <ToolbarButton label="Gras" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
                    <Bold />
                </ToolbarButton>
                <ToolbarButton label="Italique" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <Italic />
                </ToolbarButton>
                <ToolbarButton label="Souligné" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <Underline />
                </ToolbarButton>
                <ToolbarButton label="Barré" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <Strikethrough />
                </ToolbarButton>
                <ColorMenu
                    label="Couleur du texte"
                    icon={<Palette />}
                    colors={TEXT_COLORS}
                    current={editor.getAttributes('textStyle').color as string | undefined}
                    onPick={(color) => editor.chain().focus().setColor(color).run()}
                    onClear={() => editor.chain().focus().unsetColor().run()}
                />
                <ColorMenu
                    label="Couleur de fond"
                    icon={<Highlighter />}
                    colors={BACKGROUND_COLORS}
                    current={editor.getAttributes('textStyle').backgroundColor as string | undefined}
                    onPick={(color) => editor.chain().focus().setBackgroundColor(color).run()}
                    onClear={() => editor.chain().focus().unsetBackgroundColor().run()}
                />
                <Divider />

                <ToolbarButton label="Liste à puces" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <List />
                </ToolbarButton>
                <ToolbarButton label="Liste numérotée" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <ListOrdered />
                </ToolbarButton>
                <ToolbarButton label="Citation" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <Quote />
                </ToolbarButton>
                <Divider />

                {(
                    [
                        ['left', 'Aligner à gauche', <AlignLeft key="l" />],
                        ['center', 'Centrer', <AlignCenter key="c" />],
                        ['right', 'Aligner à droite', <AlignRight key="r" />],
                        ['justify', 'Justifier', <AlignJustify key="j" />],
                    ] as const
                ).map(([alignment, label, icon]) => (
                    <ToolbarButton
                        key={alignment}
                        label={label}
                        active={editor.isActive({ textAlign: alignment })}
                        onClick={() => editor.chain().focus().setTextAlign(alignment).run()}
                    >
                        {icon}
                    </ToolbarButton>
                ))}
                <Divider />

                <ToolbarButton label="Ajouter / modifier un lien" active={editor.isActive('link')} onClick={setLink}>
                    <Link2 />
                </ToolbarButton>
                {editor.isActive('link') && (
                    <ToolbarButton label="Retirer le lien" onClick={() => editor.chain().focus().extendMarkRange('link').unsetLink().run()}>
                        <Link2Off />
                    </ToolbarButton>
                )}
                <ToolbarButton label="Insérer une image" onClick={() => fileInputRef.current?.click()} disabled={uploading}>
                    {uploading ? <Loader2 className="animate-spin" /> : <ImagePlus />}
                </ToolbarButton>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    multiple
                    className="hidden"
                    onChange={(event) => {
                        const files = Array.from(event.target.files ?? []);
                        event.target.value = '';
                        void insertFiles(editor, files);
                    }}
                />
                <SpacerMenu onPick={(size) => editor.chain().focus().insertContent({ type: 'spacer', attrs: { size } }).run()} />
                <ToolbarButton label="Ligne de séparation" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <Minus />
                </ToolbarButton>
                <ToolbarButton label="Effacer la mise en forme" onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
                    <Eraser />
                </ToolbarButton>
            </div>

            {imageSelected && (
                <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 bg-brand-blue/5 px-3 py-2 text-sm text-neutral-700">
                    <span className="font-semibold">Image :</span>
                    {(['100%', '75%', '50%'] as const).map((width) => (
                        <button
                            key={width}
                            type="button"
                            onClick={() => editor.chain().focus().updateAttributes('image', { width: width === '100%' ? null : width }).run()}
                            className={cn(
                                'rounded-md border px-2.5 py-1 text-xs font-semibold',
                                (editor.getAttributes('image').width ?? '100%') === width
                                    ? 'border-brand-blue bg-brand-blue text-white'
                                    : 'border-neutral-300 bg-white hover:border-brand-blue',
                            )}
                        >
                            {width}
                        </button>
                    ))}
                    <button type="button" onClick={editImageAlt} className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-semibold hover:border-brand-blue">
                        Texte alternatif
                    </button>
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().deleteSelection().run()}
                        className="rounded-md border border-red-200 bg-white px-2.5 py-1 text-xs font-semibold text-red-600 hover:border-red-400"
                    >
                        Supprimer l'image
                    </button>
                </div>
            )}

            {uploadError && <p className="border-b border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">{uploadError}</p>}

            <EditorContent editor={editor} className="rich-text-editor text-left" />

            <p className="border-t border-neutral-200 bg-neutral-50 px-4 py-2 text-xs text-neutral-500">
                Astuce : glissez-déposez ou collez une image directement entre deux paragraphes. Le titre de l'article est déjà le H1 de la page : utilisez
                plutôt H2 à H4 pour structurer le contenu.
            </p>
        </div>
    );
}

function ToolbarButton({
    label,
    onClick,
    active = false,
    disabled = false,
    children,
}: {
    label: string;
    onClick: () => void;
    active?: boolean;
    disabled?: boolean;
    children: ReactNode;
}) {
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            aria-pressed={active}
            onMouseDown={(event) => event.preventDefault()}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                'flex h-9 w-9 items-center justify-center rounded-md transition-colors disabled:cursor-not-allowed disabled:opacity-40 [&_svg]:h-4 [&_svg]:w-4',
                active ? 'bg-brand-blue text-white' : 'hover:bg-neutral-200',
            )}
        >
            {children}
        </button>
    );
}

function Divider() {
    return <span className="mx-1 h-6 w-px bg-neutral-300" aria-hidden="true" />;
}

function useOutsideClose(open: boolean, close: () => void) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!open) return;
        const handle = (event: PointerEvent) => {
            if (!ref.current?.contains(event.target as globalThis.Node)) close();
        };
        document.addEventListener('pointerdown', handle);
        return () => document.removeEventListener('pointerdown', handle);
    }, [open, close]);
    return ref;
}

function ColorMenu({
    label,
    icon,
    colors,
    current,
    onPick,
    onClear,
}: {
    label: string;
    icon: ReactNode;
    colors: string[];
    current?: string;
    onPick: (color: string) => void;
    onClear: () => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useOutsideClose(open, () => setOpen(false));

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                title={label}
                aria-label={label}
                aria-expanded={open}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setOpen((value) => !value)}
                className="relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-200 [&_svg]:h-4 [&_svg]:w-4"
            >
                {icon}
                <span className="absolute right-1.5 bottom-1 left-1.5 h-1 rounded-full" style={{ backgroundColor: current ?? 'transparent' }} />
            </button>
            {open && (
                <div className="absolute top-full left-0 z-20 mt-1 w-52 rounded-lg border border-neutral-200 bg-white p-3 shadow-xl">
                    <p className="mb-2 text-xs font-semibold text-neutral-500">{label}</p>
                    <div className="grid grid-cols-5 gap-2">
                        {colors.map((color) => (
                            <button
                                key={color}
                                type="button"
                                title={color}
                                aria-label={`${label} ${color}`}
                                onMouseDown={(event) => event.preventDefault()}
                                onClick={() => {
                                    onPick(color);
                                    setOpen(false);
                                }}
                                className={cn('h-7 w-7 rounded-md border border-neutral-200', current === color && 'ring-2 ring-brand-blue ring-offset-1')}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-2 border-t border-neutral-100 pt-3">
                        <label className="flex items-center gap-2 text-xs text-neutral-600">
                            Autre
                            <input
                                type="color"
                                defaultValue={current ?? '#0876ce'}
                                onChange={(event) => onPick(event.target.value)}
                                className="h-7 w-9 cursor-pointer rounded border border-neutral-200"
                            />
                        </label>
                        <button
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                onClear();
                                setOpen(false);
                            }}
                            className="text-xs font-semibold text-neutral-600 underline hover:text-neutral-900"
                        >
                            Réinitialiser
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function SpacerMenu({ onPick }: { onPick: (size: 'sm' | 'md' | 'lg' | 'xl') => void }) {
    const [open, setOpen] = useState(false);
    const ref = useOutsideClose(open, () => setOpen(false));
    const sizes = [
        ['sm', 'Petit (16 px)'],
        ['md', 'Moyen (32 px)'],
        ['lg', 'Grand (64 px)'],
        ['xl', 'Très grand (96 px)'],
    ] as const;

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                title="Insérer un espacement"
                aria-label="Insérer un espacement"
                aria-expanded={open}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => setOpen((value) => !value)}
                className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-neutral-200 [&_svg]:h-4 [&_svg]:w-4"
            >
                <MoveVertical />
            </button>
            {open && (
                <div className="absolute top-full right-0 z-20 mt-1 w-48 rounded-lg border border-neutral-200 bg-white p-1 shadow-xl sm:right-auto sm:left-0">
                    {sizes.map(([size, label]) => (
                        <button
                            key={size}
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => {
                                onPick(size);
                                setOpen(false);
                            }}
                            className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-neutral-100"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
