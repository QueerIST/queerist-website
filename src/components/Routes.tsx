import { Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import About from '../pages/About'
import Event from '../pages/Event'
import Events from '../pages/Events'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Series from '../pages/Series'
import SubPage from '../pages/SubPage'

const Routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='/sobre' element={<About />} />
    <Route path='/eventos'>
      <Route index element={<Events />} />
      <Route path=':serie'>
        <Route index element={<Series />} />
        <Route path=':event' element={<Event />} />
      </Route>
    </Route>
    <Route path='/projetos'>
      <Route index element={<Projects />} />
      <Route path=':hub'>
        <Route index element={<SubPage />} />
        <Route path=':serie'>
          <Route index element={<Series />} />
          <Route path=':event' element={<Event />} />
        </Route>
      </Route>
    </Route>
  </Route>
)

export default Routes
