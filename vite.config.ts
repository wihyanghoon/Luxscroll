// vite.config.ts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'LuxScroll',
            fileName: 'luxscroll',
            formats: ['es', 'umd'],
        },
        outDir: 'dist',
    },
    plugins: [dts()],
});