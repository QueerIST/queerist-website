import react from '@vitejs/plugin-react-swc'
import vike from 'vike/plugin'
import { loadEnv } from 'vite'
import checker from 'vite-plugin-checker'
import { cjsInterop } from 'vite-plugin-cjs-interop'
import svgr from 'vite-plugin-svgr'

export default function defineConfig ({ mode }: { mode: string }) {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      watch: { usePolling: true }
    },
    plugins: [
    // Include React plugin to serve `/@react-refresh` and transform HTML to
    // inject this dependency.
      react(),
      vike({ prerender: false }),
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2
          }
        }
      }),
      checker({
        typescript: true,
        eslint: {
          // for example, lint .ts and .tsx
          lintCommand: 'eslint . --ext ts,tsx'
        }
      }),
      cjsInterop({
        // Add broken npm package here
        dependencies: [
          // Apply patch to root import:
          'react-headroom',
          'react-helmet-async'
        ]
      })
    ],
    base: env.VITE_BASE_URL
  }
}
