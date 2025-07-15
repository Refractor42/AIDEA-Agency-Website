import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AIDEA-Agency-Website/',  // <-- replace 'aidea' with your repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-icons': ['lucide-react']
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild'
  }
});
