import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../../mappers/components'
import { hubMapper, seriesMapper } from '../../../../mappers/content'
import { Series as SeriesTemplate } from '../../../templates/Series'

const Series = () => {
  const { projectos: rawProjectos, hub: rawHub, serie: rawSerie } = useData<Data>()

  const parentPage = hubMapper(rawHub.data.attributes, pageMapper(rawProjectos.data.attributes.Meta))

  const series = seriesMapper(rawSerie.data.attributes, parentPage)
  return (
    <SeriesTemplate series={series} rawSerie={rawSerie} />
  )
}

export default Series
