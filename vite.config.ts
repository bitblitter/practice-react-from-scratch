import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import path from 'path';

export default defineConfig({
    root: './',
    server: {
        port: 3000,
    },
    build: {
        outDir: './dist',
    },
    plugins: [
        sassDts({
            enabledMode: ['development', 'production'],
            sourceDir: path.resolve(__dirname, './src'),
        }),
        react()
    ],
});