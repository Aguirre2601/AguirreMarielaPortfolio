import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Mismo alias que tsconfig paths
    },
  },
  test: {
    environment: 'jsdom',    // Simula un navegador para probar componentes
    globals: true,           // Permite usar describe/it/expect sin importar
    include: [
      '__tests__/**/*.test.ts',
      '__tests__/**/*.test.tsx',
    ],
    setupFiles: [], // Agregar aquí si necesitás setup global (ej. mocks)
  },
})