import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is hosted at https://<user>.github.io/diya-jha-portfolio/,
// so production builds need that sub-path as the base.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/diya-jha-portfolio/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: false,
  },
  preview: {
    port: 3000,
  },
}));
