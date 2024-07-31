import { useSeriesData } from '../../api/use'
import { DynamicZone } from '../../components/DynamicZone'
import { InlineEventGallery } from '../../components/EventGallery'
import { Page } from '../../components/Page'
import { SeriesCover } from '../../components/PageCover'
import { Separator } from '../../components/Separator'
import { pageMapper } from '../../mappers/components'
import { hubMapper, seriesMapper } from '../../mappers/content'

export const Series = () => {
  const { projectos: rawProjectos, eventos: rawEventos, hub: rawHub, serie: rawSerie } = useSeriesData()
  let parentPage

  if (rawProjectos !== undefined) {
    parentPage = hubMapper(rawHub.data.attributes, pageMapper(rawProjectos.data.attributes.Meta))
  } else {
    parentPage = pageMapper(rawEventos.data.attributes.Meta)
  }

  const series = seriesMapper(rawSerie.data.attributes, parentPage)
  return (
    <Page data={series}>
      <SeriesCover data={series} />
      <Separator />
      {series.events !== undefined && <InlineEventGallery data={series.events} />}
      <DynamicZone data={rawSerie.data.attributes.Body} />
    </Page>
  )
}
