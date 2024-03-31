import { Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import About from '../pages/About'
import Events from '../pages/Events'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import SubPage from '../pages/SubPage'

const Routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='/sobre' element={<About />} />
    <Route
      path='/eventos'
      element={<Events />}
    />
    <Route path='/projetos'>
      <Route index element={<Projects />} />
      <Route
        path=':id'
        element={<SubPage />}
      />
    </Route>
  </Route>
)

export default Routes
