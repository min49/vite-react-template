/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const conditionalPlugins = mode === 'test' ? [] : [eslint()]

  return {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'lcov'],
      },
    },
    plugins: [react(), tsconfigPaths(), ...conditionalPlugins],
  }
})
