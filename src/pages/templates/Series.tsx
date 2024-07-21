import { useState, useEffect } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

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
import { type APIResponseData, type APIResponseSingle } from '../../types/strapi'

export const Series = () => {
  const { serie } = useParams()
  const [data, setData] = useState<APIResponseData<'api::serie.serie'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::serie.serie'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/serie/${serie}`, {
        params: {
          populate: {
            Image: { populate: '*' },
            Logo: { populate: '*' },
            Hub: { populate: '*' },
            Events: { populate: ['Image'] },
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
  }, [serie])

  if (data === undefined) return null

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
