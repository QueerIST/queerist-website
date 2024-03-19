import react from '@vitejs/plugin-react-swc'
import { loadEnv } from 'vite'
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
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2
          }
        }
      })
    ],
    base: env.VITE_BASE_URL
  }
}
