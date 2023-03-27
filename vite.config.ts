import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'build'
  },
  resolve: {
    mainFields: [] // needed for react-moment: https://github.com/vitejs/vite/issues/7376
  }
});
