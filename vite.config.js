import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Where the built site lives:
// - GitHub Pages (built in GitHub Actions): https://<user>.github.io/<repo-name>/
// - Hostinger (diyajha.in) and anywhere else: the domain root "/"
// GITHUB_REPOSITORY ("owner/repo") is only set inside GitHub Actions.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repoName ? `/${repoName}/` : '/';

export default defineConfig(() => ({
  base,
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
