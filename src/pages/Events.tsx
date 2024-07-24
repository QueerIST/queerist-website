import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../components/Banners'
import EventTile from '../components/EventTile'
import HighlightBox from '../components/HighlightBox'
import { TextBoxList, IconList } from '../components/Lists'
import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, pageMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { seriesMapper } from '../mappers/content'
import { type APIResponseSingle } from '../types/strapi'

export const Events = () => {
  const response = useRouteLoaderData('eventos') as AxiosResponse< APIResponseSingle<'api::event-page.event-page'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover {...page} />
      <Separator />
      {data.attributes.Series?.data.map((serie, i) => (
        <EventTile key={i} n={i} data={seriesMapper(serie.attributes)} />
      ))}
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
