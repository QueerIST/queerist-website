import react from '@vitejs/plugin-react-swc'
import { loadEnv } from 'vite'
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

import manifest from './public/manifest.json'

export default function defineConfig ({ mode }) {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      watch: { usePolling: true }
    },
    plugins: [
    // Include React plugin to serve `/@react-refresh` and transform HTML to
    // inject this dependency.
      react(),
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2
          }
        }
      }),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: manifest as ManifestOptions }
      )
    ],
    base: env.VITE_BASE_URL
  }
}
