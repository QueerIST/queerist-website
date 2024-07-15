import { useEffect, useState } from 'react'

import axios from 'axios'

import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import { TextBoxList } from '../components/Lists'
import Page from '../components/Page'
import { PageCover } from '../components/PageCover'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, pageMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

export const About = () => {
  const [data, setData] = useState<APIResponseData<'api::about-page.about-page'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::about-page.about-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/about-page', {
        params: {
          populate: {
            Meta: { populate: '*' },
            Separator: { populate: '*' },
            Body: {
              on: {
                'blocks.text-block': {
                  populate: ['Button', 'Button.Link']
                },
                'blocks.big-banner': {
                  populate: ['Image', 'Button', 'Button.Link']
                },
                'blocks.small-banners-list': {
                  populate: ['Banners', 'Banners.Logo', 'Banners.Button', 'Banners.Button.Link']
                },
                'blocks.highlightbox': { populate: ['Button', 'Button.Link'] },
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
      {data.attributes.Body?.map((block, i) => {
        if (block.__component === 'blocks.text-block') {
          return <TextBlock {...textBlockMapper(block)} key={i} />
        } else if (block.__component === 'blocks.big-banner') {
          return <BigBanner {...bigBannerMapper(block)} key={i} />
        } else if (block.__component === 'blocks.small-banners-list') {
          return <SmallBanners banners={smallBannersMapper(block)} key={i} />
        } else if (block.__component === 'blocks.text-boxes-list') {
          return <TextBoxList {...textBoxesMapper(block)} key={i} />
        } else if (block.__component === 'blocks.highlightbox') {
          return <HighlightBox {...highlightBoxMapper(block)} key={i} />
        } else {
          return <Separator data={separatorMapper(block)} key={i} />
        }
      })}
    </Page>
  )
}
