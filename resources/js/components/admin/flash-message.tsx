import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { CheckCircle2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

/** Affiche le message de succes renvoye par le serveur (session « success »). */
export default function FlashMessage() {
    const { flash } = usePage<SharedData & { flash?: { success?: string | null } }>().props;
    const message = flash?.success;
    const [visible, setVisible] = useState(Boolean(message));

    useEffect(() => {
        setVisible(Boolean(message));
        if (!message) return;
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, [message]);

    if (!visible || !message) return null;

    return (
        <div role="status" className="flex items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {message}
            </span>
            <button type="button" onClick={() => setVisible(false)} aria-label="Fermer" className="rounded p-1 hover:bg-emerald-100">
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}
