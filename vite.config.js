import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site at https://<user>.github.io/<repo-name>/,
// so production builds use the repo name as the base path.
// GITHUB_REPOSITORY ("owner/repo") is set automatically inside GitHub Actions.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'diya-jha-portfolio';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
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
