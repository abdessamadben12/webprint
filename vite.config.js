import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],

    esbuild: {
        jsx: 'automatic',
    },

    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                        return 'react';
                    }

                    if (id.includes('node_modules/@inertiajs/react')) {
                        return 'inertia';
                    }

                    if (id.includes('node_modules/lucide-react') || id.includes('node_modules/framer-motion')) {
                        return 'ui';
                    }
                },
            },
        },
    },

    resolve: {
        alias: {
            '@image': fileURLToPath(new URL('./resources/js/image', import.meta.url)),
        },
    },

    server: {
        host: '0.0.0.0',
        port: 5173,
        strictPort: true,

        allowedHosts: [
            'https://webprint.ma',
            'localhost:5173',
            'localhost:8000',
        ],

        cors: {
            origin: [
                "https://webprint.ma",
                "http://localhost:5173",
                "http://localhost:8000",
                "http://127.0.0.1:5173",
                "http://127.0.0.1:8000",
            ],
            credentials: true,
        },

        // hmr: {
        //     host: 'https://webprint.ma',
        //     protocol: 'wss',
        //     clientPort: 443,
        // },
        hmr: {
            host: 'localhost',
            protocol: 'http',
            clientPort: 5173,
        },
    },
});
