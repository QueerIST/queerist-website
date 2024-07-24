import type { Attribute } from '@strapi/strapi'

import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import { TextBoxList, IconList } from '../components/Lists'
import Separator from '../components/Separator'
import TextBlock from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { type GetValue } from '../types/strapi'

type DynamicZones = GetValue<Attribute.DynamicZone<
[
  'blocks.big-banner',
  'blocks.text-block',
  'blocks.highlightbox',
  'blocks.separator',
  'blocks.icons-list',
  'blocks.text-boxes-list',
  'blocks.small-banners-list'
]
>>

export const DynamicZone = ({ data }: { data?: DynamicZones }) => {
  return data?.map((block, i) => {
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
  })
}
