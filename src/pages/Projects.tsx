import { type AxiosResponse } from 'axios'
import { useRouteLoaderData } from 'react-router-dom'

import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import { TextBoxList, IconList } from '../components/Lists'
import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import PageTile from '../components/PageTile'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, pageMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { hubMapper } from '../mappers/content'
import { type APIResponseSingle } from '../types/strapi'

export const Projects = () => {
  const response = useRouteLoaderData('projetos') as AxiosResponse< APIResponseSingle<'api::project-page.project-page'> | undefined>
  if (response.data === undefined) { return null }

  const data = response.data.data

  const page = pageMapper(data.attributes.Meta)
  return (
    <Page data={page}>
      <PageCover {...page} />
      <Separator />
      {data.attributes.Hubs?.data.map((hub, i) => (
        <PageTile key={i} data={hubMapper(hub.attributes, 'projetos')} />
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
