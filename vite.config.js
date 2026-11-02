import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => ({
  base: mode === 'standalone' ? './' : '/dossier-professionnel-role-humain-ia/',
  plugins: mode === 'standalone' ? [viteSingleFile()] : [],
  build: { outDir: mode === 'standalone' ? 'standalone' : 'dist', target: 'es2022',
    assetsInlineLimit: mode === 'standalone' ? 1000000 : 4096 },
  server: { host: '127.0.0.1', strictPort: true, port: 5175 },
  preview: { host: '127.0.0.1', strictPort: true, port: 4175 }
}));
