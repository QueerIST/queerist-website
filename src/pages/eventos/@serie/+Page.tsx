import { useData } from 'vike-react/useData'

import { type Data } from './+data'
import { pageMapper } from '../../../mappers/components'
import { seriesMapper } from '../../../mappers/content'
import { Series as SeriesTemplate } from '../../templates/Series'

const Series = () => {
  const { eventos: rawEventos, serie: rawSerie } = useData<Data>()

  const parentPage = pageMapper(rawEventos.data.attributes.Meta)

  const series = seriesMapper(rawSerie.data.attributes, parentPage)
  return (
    <SeriesTemplate series={series} rawSerie={rawSerie} />
  )
}

export default Series
