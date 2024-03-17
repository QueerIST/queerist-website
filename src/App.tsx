// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Routes } from './components'

const App = () => {
  const router = createBrowserRouter(Routes, { basename: import.meta.env.BASE_URL })

  return <RouterProvider router={router} />
}

export default App
