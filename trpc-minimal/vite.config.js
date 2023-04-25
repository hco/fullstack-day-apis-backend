import { defineConfig } from 'vite'

export default defineConfig({
    root: './web',
    server: {
        port: 5178,
        proxy: {
            // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
            '/trpc': {
                target: 'http://localhost:9483/',
                rewrite: (path) => path.replace(/^\/trpc/, ''),
            },
        },
    },
})
