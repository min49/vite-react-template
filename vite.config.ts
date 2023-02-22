/// <reference types="vitest" />
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

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
