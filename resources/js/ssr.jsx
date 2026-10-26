import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route } from 'ziggy-js';

const appName = import.meta.env.VITE_APP_NAME || 'webprint.ma';

// Rendu serveur : chaque page arrive avec son HTML complet (textes, titres, liens),
// puis app.tsx l'hydrate dans le navigateur. Le titre suit la meme regle que app.tsx.
createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title.includes(appName) ? title : `${title} | ${appName}`),
        resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
        setup: ({ App, props }) => {
            // route() est global dans le navigateur (directive @routes) ; on le recree ici
            // a partir de la config Ziggy partagee par HandleInertiaRequests.
            const ziggy = page.props.ziggy;
            globalThis.route = (name, params, absolute) =>
                route(name, params, absolute, { ...ziggy, location: new URL(ziggy.location) });

            return <App {...props} />;
        },
    }),
);
