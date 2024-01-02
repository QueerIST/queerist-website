import fs from 'fs/promises'
import url from 'url'

import react from '@vitejs/plugin-react-swc'
import { loadEnv, transformWithEsbuild } from 'vite'
import svgr from 'vite-plugin-svgr'

// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp (string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// NOTE: Keep trailing slash to use resulting path in prefix matching.
const srcDir = url.fileURLToPath(new URL('./src/', import.meta.url))
// NOTE: Since ESBuild evaluates this regex using Go's engine, it is not
// clear whether the JS-specific regex escape logic is sound.
const srcJsRegex = new RegExp(`^${escapeRegExp(srcDir)}.*\\.js$`)

const vitePlugin = (isProd) => ({
  name: 'js-in-jsx',
  enforce: 'pre',
  async transform (code, id) {
    // Ignore Rollup virtual modules.
    if (id.startsWith('\0')) {
      return
    }
    // Strip off any "proxy id" component before testing against path.
    // See: https://github.com/vitejs/vite-plugin-react-swc/blob/a1bfc313612a8143a153ce87f52925059459aeb2/src/index.ts#L89
    // See: https://rollupjs.org/plugin-development/#inter-plugin-communication
    [id] = id.split('?')
    if (id.startsWith(srcDir) && id.endsWith('.js')) {
      return await transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
        jsxDev: !isProd
      })
    }
  }
})

const esbuildPlugin = {
  name: 'jsx-loader',
  setup (build) {
    // See: https://github.com/vitejs/vite/discussions/3448#discussioncomment-749919
    build.onLoad({ filter: srcJsRegex }, async args => {
      return {
        contents: await fs.readFile(args.path),
        loader: 'jsx'
      }
    })
  }
}

export default function defineConfig ({ mode }) {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vitePlugin(mode === 'production' || mode === 'github'),
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
    optimizeDeps: {
      esbuildOptions: {
        plugins: [esbuildPlugin]
      }
    },
    base: env.VITE_BASE_URL
  }
}
