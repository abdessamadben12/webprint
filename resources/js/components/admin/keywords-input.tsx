import { X } from 'lucide-react';
import { useState, type KeyboardEvent } from 'react';

interface KeywordsInputProps {
    id: string;
    /** Mots-cles separes par des virgules (format enregistre en base). */
    value: string;
    onChange: (value: string) => void;
    max?: number;
}

function split(value: string): string[] {
    return value
        .split(',')
        .map((keyword) => keyword.trim())
        .filter(Boolean);
}

/** Saisie de mots-cles sous forme d'etiquettes : Entree ou virgule pour valider. */
export default function KeywordsInput({ id, value, onChange, max = 15 }: KeywordsInputProps) {
    const [draft, setDraft] = useState('');
    const keywords = split(value);

    const add = (raw: string) => {
        const additions = split(raw).filter((keyword) => !keywords.some((existing) => existing.toLowerCase() === keyword.toLowerCase()));
        if (additions.length === 0) return;
        onChange([...keywords, ...additions].slice(0, max).join(', '));
        setDraft('');
    };

    const remove = (index: number) => onChange(keywords.filter((_, i) => i !== index).join(', '));

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            add(draft);
        } else if (event.key === 'Backspace' && draft === '' && keywords.length > 0) {
            remove(keywords.length - 1);
        }
    };

    return (
        <div className="focus-within:border-brand-blue flex min-h-[2.75rem] flex-wrap items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-2 py-1.5">
            {keywords.map((keyword, index) => (
                <span key={keyword} className="bg-brand-blue/10 text-brand-blue inline-flex items-center gap-1 rounded-md py-1 pr-1 pl-2 text-xs font-medium">
                    {keyword}
                    <button type="button" onClick={() => remove(index)} aria-label={`Retirer ${keyword}`} className="hover:bg-brand-blue/15 rounded p-0.5">
                        <X className="h-3 w-3" />
                    </button>
                </span>
            ))}
            {keywords.length < max && (
                <input
                    id={id}
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    onKeyDown={onKeyDown}
                    onBlur={() => add(draft)}
                    onPaste={(event) => {
                        const text = event.clipboardData.getData('text');
                        if (text.includes(',')) {
                            event.preventDefault();
                            add(text);
                        }
                    }}
                    placeholder={keywords.length === 0 ? 'Ex. bâche publicitaire, impression Casablanca' : 'Ajouter...'}
                    className="min-w-[8rem] flex-1 bg-transparent px-1 py-1 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                />
            )}
        </div>
    );
}
