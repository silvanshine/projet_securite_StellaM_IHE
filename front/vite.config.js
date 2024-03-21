// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      input: {
        'cas/auth': resolve(__dirname, 'cas/auth/index.html'),
      },
    },
  },
});
