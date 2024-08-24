import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // This is needed for testing React components
    setupFiles: './src/setupTests.js', // Optional: For global setups like jest-dom
  },
});
