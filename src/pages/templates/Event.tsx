import { type AxiosResponse } from 'axios'
import { useLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../../components/Banners'
import { EventInfo } from '../../components/EventInfo'
import HighlightBox from '../../components/HighlightBox'
import { IconList, TextBoxList } from '../../components/Lists'
import Page from '../../components/Page'
import { EventCover } from '../../components/PageCover'
import Separator from '../../components/Separator'
import TextBlock from '../../components/TextBlock'
import { textBlockMapper, bigBannerMapper, smallBannersMapper, textBoxesMapper, highlightBoxMapper, separatorMapper, iconsMapper } from '../../mappers/components'
import { eventMapper } from '../../mappers/content'
import { type APIResponseSingle } from '../../types/strapi'

export const Event = () => {
  const response = useLoaderData() as AxiosResponse< APIResponseSingle<'api::event.event'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  return (
    <Page data={eventMapper(data.attributes)}>
      <EventCover {...eventMapper(data.attributes)}/>
      <EventInfo data={eventMapper(data.attributes)}/>
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
