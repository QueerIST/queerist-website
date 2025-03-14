import { DynamicZone } from '../../components/DynamicZone'
import { InlineEventGallery } from '../../components/EventGallery'
import { ImageGallery } from '../../components/ImageGallery'
import { Page } from '../../components/Page'
import { SeriesCover } from '../../components/PageCover'
import { Separator } from '../../components/Separator'
import { type Series as SeriesProps } from '../../types/domain'
import { type APIResponseSingle } from '../../types/strapi'

export const Series = ({ series, rawSerie }: { series: SeriesProps, rawSerie: APIResponseSingle<'api::serie.serie'> }) => {
  return (
    <Page data={series}>
      <SeriesCover data={series} />
      <Separator />
      {series.events && <InlineEventGallery data={series.events} />}
      {!!series.eventMedia?.length && <>
        <Separator data='Galeria'/>
        <ImageGallery data={series.eventMedia}/>
      </>}
      <DynamicZone data={rawSerie.data.attributes.Body} />
    </Page>
  )
}
