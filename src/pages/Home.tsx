import { type AxiosResponse } from 'axios'
import { useLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import { TextBoxList, IconList } from '../components/Lists'
import MainCover from '../components/MainCover'
import Page from '../components/Page'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, pageMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { type APIResponseSingle } from '../types/strapi'

export const Home = () => {
  const response = useLoaderData() as AxiosResponse< APIResponseSingle<'api::main-page.main-page'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  return (
    <Page data={pageMapper(data.attributes.Meta)} home>
      <MainCover />
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
