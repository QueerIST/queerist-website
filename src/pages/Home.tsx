import { useEffect, useState } from 'react'

import axios from 'axios'

import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import MainCover from '../components/MainCover'
import Page from '../components/Page'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, pageMapper, smallBannersMapper, textBlockMapper } from '../mappers/components'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

export const Home = () => {
  const [data, setData] = useState<APIResponseData<'api::main-page.main-page'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::main-page.main-page'>>('https://queerist.tecnico.ulisboa.pt/a/pi/main-page', {
        params: {
          populate: {
            Meta: { populate: '*' },
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
                'blocks.highlightbox': { populate: ['Button', 'Button.Link'] }
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
    <Page data={pageMapper(data.attributes.Meta)} home>
      <MainCover />
      {data.attributes.Body?.map((block, i) => {
        if (block.__component === 'blocks.text-block') {
          return <TextBlock {...textBlockMapper(block)} key={i} />
        } else if (block.__component === 'blocks.big-banner') {
          return <BigBanner {...bigBannerMapper(block)} key={i} />
        } else if (block.__component === 'blocks.small-banners-list') {
          return <SmallBanners banners={smallBannersMapper(block)} key={i} />
        } else {
          return <HighlightBox {...highlightBoxMapper(block)} key={i} />
        }
      })}
    </Page>
  )
}
