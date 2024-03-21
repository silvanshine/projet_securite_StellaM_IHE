// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'cas/auth': resolve(__dirname, 'cas/auth/index.html'),
      },
    },
  },
});
