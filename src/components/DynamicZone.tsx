import type { Schema } from '@strapi/types'

import { BigBanner, SmallBanners } from '../components/Banners'
import { HighlightBox } from '../components/HighlightBox'
import { InjectedHTML } from '../components/InjectedHTML'
import { TextBoxList, IconList } from '../components/Lists'
import { Separator } from '../components/Separator'
import { TextBlock } from '../components/TextBlock'
import { bigBannerMapper, highlightBoxMapper, iconsMapper, injectedHTMLMapper, separatorMapper, smallBannersMapper, textBlockMapper, textBoxesMapper } from '../mappers/components'
import { type GetValue } from '../types/strapi'

type DynamicZones = GetValue<Schema.Attribute.DynamicZone<
[
  'blocks.big-banner',
  'blocks.text-block',
  'blocks.highlightbox',
  'blocks.separator',
  'blocks.icons-list',
  'blocks.text-boxes-list',
  'blocks.small-banners-list',
  'blocks.html'
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
    } else if (block.__component === 'blocks.html') {
      return <InjectedHTML data={injectedHTMLMapper(block)} key={i} />
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (block.__component === 'blocks.separator') {
      return <Separator data={separatorMapper(block)} key={i} />
    }
    return undefined
  })
}
