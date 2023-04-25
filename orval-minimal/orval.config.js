import { defineConfig } from 'orval';

module.exports = defineConfig({
    'swapi': {
        input: './autobahnen.yaml',
        output: {
            target: './api',
            override: {
                mutator: {
                    path: './axios.ts',
                    name: 'customInstance',
                }
            }
        }
    }
});
