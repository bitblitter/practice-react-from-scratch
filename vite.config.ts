import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    root: './',
    server: {
        port: 3000,
    },
    build: {
        outDir: './dist',
    },
    plugins: [react()],
});