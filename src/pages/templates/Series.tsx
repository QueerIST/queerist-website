import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../../components/Banners'
import { InlineEventGallery } from '../../components/EventGallery'
import HighlightBox from '../../components/HighlightBox'
import { IconList, TextBoxList } from '../../components/Lists'
import Page from '../../components/Page'
import { SeriesCover } from '../../components/PageCover'
import Separator from '../../components/Separator'
import TextBlock from '../../components/TextBlock'
import { textBlockMapper, bigBannerMapper, smallBannersMapper, textBoxesMapper, highlightBoxMapper, separatorMapper, iconsMapper } from '../../mappers/components'
import { seriesMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Series = () => {
  const projectsResponse = useRouteLoaderData('p:serie')
  const eventsResponse = useRouteLoaderData('e:serie')

  const response = (projectsResponse !== undefined ? projectsResponse : eventsResponse) as AxiosResponse< APIResponseSingle<'api::serie.serie'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const series = seriesMapper(data.attributes)
  return (
    <Page data={series}>
      <SeriesCover {...series}/>
      <Separator />
      {series.happenings !== undefined && <InlineEventGallery data={series} />}
      {data.attributes.Body?.map((block, i) => {
        if (block.__component === 'blocks.text-block') {
          return <TextBlock {...textBlockMapper(block)} key={i} />
        } else if (block.__component === 'blocks.big-banner') {
          return <BigBanner {...bigBannerMapper(block)} key={i} />
        } else if (block.__component === 'blocks.small-banners-list') {
          return <SmallBanners {...smallBannersMapper(block)} key={i} />
        } else if (block.__component === 'blocks.text-boxes-list') {
          return <TextBoxList {...textBoxesMapper(block)} key={i} />
        } if (block.__component === 'blocks.icons-list') {
          return <IconList {...iconsMapper(block)} key={i} />
        } else if (block.__component === 'blocks.highlightbox') {
          return <HighlightBox {...highlightBoxMapper(block)} key={i} />
        } else {
          return <Separator data={separatorMapper(block)} key={i} />
        }
      })}
    </Page>
  )
}
