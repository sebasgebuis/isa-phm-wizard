import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte({
            emitCss: false
        })
    ],
    base:"/isa-phm-wizard",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})
