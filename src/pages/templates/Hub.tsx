import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../../components/Banners'
import EventTile from '../../components/EventTile'
import HighlightBox from '../../components/HighlightBox'
import { IconList, TextBoxList } from '../../components/Lists'
import Page from '../../components/Page'
import { HubCover } from '../../components/PageCover'
import Separator from '../../components/Separator'
import TextBlock from '../../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../../mappers/components'
import { hubMapper, seriesMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Hub = () => {
  const response = useRouteLoaderData('p:hub') as AxiosResponse< APIResponseSingle<'api::hub.hub'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  return (
    <Page data={hubMapper(data.attributes, 'projects')}>
      <HubCover {...hubMapper(data.attributes, 'projects')}/>
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
      {data.attributes.Series?.data.map(
        (event, i) => (
          <EventTile key={i} n={i} data={seriesMapper(event.attributes)} />
        ))}
    </Page>
  )
}
