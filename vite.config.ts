/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const conditionalPlugins = mode === 'test' ? [] : [eslint()]

  return {
    resolve: {
      alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'lcov'],
      },
    },
    plugins: [react(), ...conditionalPlugins],
  }
})
