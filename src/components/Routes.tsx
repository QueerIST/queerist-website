import { Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './Layout'
import untypedData from '../data.json'
import { About, Events, Home, Projects, SubPage } from '../pages'
import { type Data } from '../types/data'

const data: typeof untypedData & Data = untypedData

const Routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home data={data.main_page} />} />
    <Route path='/sobre' element={<About data={data.about_page} />} />
    <Route
      path='/eventos'
      element={<Events data={data.events_page} />}
    />
    <Route path='/projetos'>
      <Route index element={<Projects data={data.projects_page} />} />
      <Route
        path=':id'
        element={<SubPage parentData={data.projects_page} />}
      />
    </Route>
  </Route>
)

export default Routes
