import { type ServiceDetail } from '@/data/services';
import { useState } from 'react';

export default function ServiceImage({ service, className }: { service: ServiceDetail; className?: string }) {
    const [unavailable, setUnavailable] = useState(false);
    const Icon = service.icon;

    if (unavailable) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-gray-100" role="img" aria-label={service.title}>
                <Icon className="text-brand-blue h-12 w-12" strokeWidth={1.25} aria-hidden="true" />
            </div>
        );
    }

    return (
        <img
            src={service.imageUrl}
            srcSet={
                service.imageUrl.endsWith('.webp') ? `${service.imageUrl.replace('.webp', '-640.webp')} 640w, ${service.imageUrl} 1280w` : undefined
            }
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            alt={service.imageAlt}
            width={1280}
            height={960}
            className={className}
            onError={() => setUnavailable(true)}
            loading="lazy"
            decoding="async"
        />
    );
}
