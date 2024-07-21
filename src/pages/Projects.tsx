import { useEffect, useState } from 'react'

import axios from 'axios'

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
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

export const Projects = () => {
  const [data, setData] = useState<APIResponseData<'api::project-page.project-page'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::project-page.project-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/project-page', {
        params: {
          populate: {
            Meta: { populate: '*' },
            Hubs: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] },
            Body: {
              on: {
                'blocks.text-block': {
                  populate: ['Button', 'Button.Link', 'Button.Link.File']
                },
                'blocks.big-banner': {
                  populate: ['Image', 'Button', 'Button.Link', 'Button.Link.File']
                },
                'blocks.small-banners-list': {
                  populate: ['Banners', 'Banners.Logo', 'Banners.Button', 'Banners.Button.Link', 'Banners.Button.Link.File']
                },
                'blocks.icons-list': {
                  populate: ['Icons', 'Icons.Logo']
                },
                'blocks.highlightbox': { populate: ['Button', 'Button.Link', 'Button.Link.File'] },
                'blocks.text-boxes-list': { populate: '*' },
                'blocks.separator': { populate: '*' }
              }
            }
          }
        }
      })
      setData(data.data.data)
    }
    fetchData().catch((error) => { console.log(error) })
  }, [])

  if (data === undefined) { return null }

  return (
    <Page data={pageMapper(data.attributes.Meta)}>
      <PageCover {...pageMapper(data.attributes.Meta)} />
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
