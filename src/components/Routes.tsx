import { Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import { About } from '../pages/About'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Event } from '../pages/templates/Event'
import { Hub } from '../pages/templates/Hub'
import { Series } from '../pages/templates/Series'

export const Routes = createRoutesFromElements(
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
        <Route index element={<Hub />} />
        <Route path=':serie'>
          <Route index element={<Series />} />
          <Route path=':event' element={<Event />} />
        </Route>
      </Route>
    </Route>
  </Route>
)
