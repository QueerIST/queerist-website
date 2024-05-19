import { useState, useEffect } from 'react'

import axios from 'axios'
import { useParams } from 'react-router-dom'

import { BigBanner } from '../components/Banners'
import EventTile from '../components/EventTile'
import HighlightBox from '../components/HighlightBox'
import { IconList } from '../components/Lists'
import Page from '../components/Page'
import { SubPageCover } from '../components/PageCover'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, separatorMapper, textBlockMapper } from '../mappers/components'
import { hubMapper, seriesMapper } from '../mappers/content'
import { type APIResponseData, type APIResponseSingle } from '../types/strapi'

const SubPage = () => {
  const { hub } = useParams()
  const [data, setData] = useState<APIResponseData<'api::hub.hub'>>()

  useEffect(() => {
    async function fetchData () {
      const data = await axios.get<APIResponseSingle<'api::hub.hub'>>(`https://queerist.tecnico.ulisboa.pt/a/pi/slugify/slugs/hub/${hub}`, {
        params: {
          populate: {
            Image: { populate: '*' },
            Logo: { populate: '*' },
            Body: {
              on: {
                'blocks.text-block': {
                  populate: ['Button', 'Button.Link']
                },
                'blocks.big-banner': {
                  populate: ['Image', 'Button', 'Button.Link']
                },
                'blocks.highlightbox': { populate: ['Button', 'Button.Link'] },
                'blocks.icons-list': { populate: '*' },
                'blocks.separator': { populate: '*' }
              }
            },
            Series: { populate: ['Image', 'Logo', 'Events', 'Events.Image'] }
          }
        }
      })
      setData(data.data.data)
    }
    fetchData().catch((error) => { console.log(error) })
  }, [hub])

  if (data === undefined) return null

  return (
    <Page data={hubMapper(data.attributes, 'projects')}>
      <SubPageCover {...hubMapper(data.attributes, 'projects')}/>
      {data.attributes.Body?.map((block, i) => {
        if (block.__component === 'blocks.text-block') {
          return <TextBlock {...textBlockMapper(block)} key={i} />
        } else if (block.__component === 'blocks.big-banner') {
          return <BigBanner {...bigBannerMapper(block)} key={i} />
        } else if (block.__component === 'blocks.icons-list') {
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

export default SubPage
