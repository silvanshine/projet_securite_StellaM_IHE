// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        auth: resolve(__dirname, 'auth/index.html'),
        form: resolve(__dirname, 'form/index.html'),
      },
    },
  },
});
