import { Route, createRoutesFromElements } from 'react-router-dom'

import { Layout } from './Layout'
import { fetchAboutPage, fetchEvent, fetchEventsPage, fetchHub, fetchMainPage, fetchProjectsPage, fetchSeries } from '../api/loaders'
import { About } from '../pages/About'
import { Events } from '../pages/Events'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Event } from '../pages/templates/Event'
import { Hub } from '../pages/templates/Hub'
import { Series } from '../pages/templates/Series'

export const Routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} loader={fetchMainPage} />
    <Route path='/sobre' element={<About />} loader={fetchAboutPage} />
    <Route path='/eventos' loader={fetchEventsPage} id='eventos'>
      <Route index element={<Events />} />
      <Route path=':serie' loader={fetchSeries} id='e:serie'>
        <Route index element={<Series />} />
        <Route path=':event' element={<Event />} loader={fetchEvent} id='e:event' />
      </Route>
    </Route>
    <Route path='/projetos' loader={fetchProjectsPage} id='projetos'>
      <Route index element={<Projects />} />
      <Route path=':hub' loader={fetchHub} id='p:hub'>
        <Route index element={<Hub />} />
        <Route path=':serie' loader={fetchSeries} id='p:serie'>
          <Route index element={<Series />} />
          <Route path=':event' element={<Event />} loader={fetchEvent} id='p:event' />
        </Route>
      </Route>
    </Route>
  </Route>
)
