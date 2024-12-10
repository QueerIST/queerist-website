import type { Schema, Attribute } from '@strapi/strapi'

export interface BlocksBigBanner extends Schema.Component {
  collectionName: 'components_blocks_big_banners'
  info: {
    displayName: 'BigBanner'
    icon: 'picture'
  }
  attributes: {
    Slug: Attribute.String
    AltName: Attribute.String & Attribute.Required
    Image: Attribute.Media & Attribute.Required
    Button: Attribute.Component<'links.outline-link'>
  }
}

export interface BlocksHighlightbox extends Schema.Component {
  collectionName: 'components_blocks_highlightboxes'
  info: {
    displayName: 'HighlightBox'
    icon: 'information'
    description: ''
  }
  attributes: {
    Slug: Attribute.String
    Title: Attribute.String & Attribute.Required
    Subtitle: Attribute.Text & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Button: Attribute.Component<'links.block-button'>
  }
}

export interface BlocksHtml extends Schema.Component {
  collectionName: 'components_blocks_htmls'
  info: {
    displayName: 'HTML'
    icon: 'hashtag'
    description: ''
  }
  attributes: {
    Code: Attribute.Text & Attribute.Required
    Slug: Attribute.String
  }
}

export interface BlocksIcon extends Schema.Component {
  collectionName: 'components_blocks_icons'
  info: {
    displayName: '_Icon'
  }
  attributes: {
    Name: Attribute.String & Attribute.Required
    Logo: Attribute.Media & Attribute.Required
    URL: Attribute.String
  }
}

export interface BlocksIconsList extends Schema.Component {
  collectionName: 'components_blocks_icons_lists'
  info: {
    displayName: 'IconsList'
    description: ''
    icon: 'chartBubble'
  }
  attributes: {
    Slug: Attribute.String
    Icons: Attribute.Component<'blocks.icon', true> &
    Attribute.Required &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
  }
}

export interface BlocksSeparator extends Schema.Component {
  collectionName: 'components_blocks_separators'
  info: {
    displayName: 'Separator'
    icon: 'code'
  }
  attributes: {
    Text: Attribute.String
  }
}

export interface BlocksSmallBanner extends Schema.Component {
  collectionName: 'components_blocks_small_banners'
  info: {
    displayName: '_SmallBanner'
  }
  attributes: {
    Title: Attribute.String & Attribute.Required
    Subtitle: Attribute.String & Attribute.Required
    Logo: Attribute.Media & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Button: Attribute.Component<'links.outline-link'>
  }
}

export interface BlocksSmallBannersList extends Schema.Component {
  collectionName: 'components_blocks_small_banners_lists'
  info: {
    displayName: 'SmallBannersList'
    icon: 'filter'
  }
  attributes: {
    Slug: Attribute.String
    Banners: Attribute.Component<'blocks.small-banner', true> &
    Attribute.Required &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
  }
}

export interface BlocksTextBlock extends Schema.Component {
  collectionName: 'components_blocks_text_blocks'
  info: {
    displayName: 'TextBlock'
    icon: 'write'
  }
  attributes: {
    Slug: Attribute.String
    Title: Attribute.String & Attribute.Required
    Text: Attribute.Blocks & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    TitleColor: Attribute.String &
    Attribute.CustomField<'plugin::color-picker.color'>
    Small: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>
    Button: Attribute.Component<'links.block-button'>
  }
}

export interface BlocksTextBox extends Schema.Component {
  collectionName: 'components_blocks_text_boxes'
  info: {
    displayName: '_TextBox'
  }
  attributes: {
    Title: Attribute.String & Attribute.Required
    Text: Attribute.Text & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
  }
}

export interface BlocksTextBoxesList extends Schema.Component {
  collectionName: 'components_blocks_text_boxes_lists'
  info: {
    displayName: 'TextBoxesList'
    description: ''
    icon: 'grid'
  }
  attributes: {
    Slug: Attribute.String
    Boxes: Attribute.Component<'blocks.text-box', true> &
    Attribute.Required &
    Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
  }
}

export interface LinksBlockButton extends Schema.Component {
  collectionName: 'components_links_block_buttons'
  info: {
    displayName: 'BlockButton'
  }
  attributes: {
    Text: Attribute.String & Attribute.Required
    TextColor: Attribute.String &
    Attribute.CustomField<'plugin::color-picker.color'>
    BackgroundColor: Attribute.String &
    Attribute.CustomField<'plugin::color-picker.color'>
    Link: Attribute.Component<'links.button'> & Attribute.Required
  }
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons'
  info: {
    displayName: '_Link'
    description: ''
  }
  attributes: {
    File: Attribute.Media
    Page: Attribute.String
    Web: Attribute.String
  }
}

export interface LinksOutlineLink extends Schema.Component {
  collectionName: 'components_links_outline_links'
  info: {
    displayName: 'OutlineButton'
    description: ''
  }
  attributes: {
    Text: Attribute.String & Attribute.Required
    TextColor: Attribute.String &
    Attribute.Required &
    Attribute.CustomField<'plugin::color-picker.color'>
    Link: Attribute.Component<'links.button'> & Attribute.Required
  }
}

export interface MetaPageMeta extends Schema.Component {
  collectionName: 'components_meta_page_metas'
  info: {
    displayName: 'Page Meta'
    icon: 'book'
    description: ''
  }
  attributes: {
    Name: Attribute.String & Attribute.Required
    Description: Attribute.Text & Attribute.Required
    Image: Attribute.Media & Attribute.Required
    BackgroundColor: Attribute.String &
    Attribute.CustomField<'plugin::color-picker.color'>
    TextColor: Attribute.String &
    Attribute.CustomField<'plugin::color-picker.color'>
    Slug: Attribute.String & Attribute.Required
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.big-banner': BlocksBigBanner
      'blocks.highlightbox': BlocksHighlightbox
      'blocks.html': BlocksHtml
      'blocks.icon': BlocksIcon
      'blocks.icons-list': BlocksIconsList
      'blocks.separator': BlocksSeparator
      'blocks.small-banner': BlocksSmallBanner
      'blocks.small-banners-list': BlocksSmallBannersList
      'blocks.text-block': BlocksTextBlock
      'blocks.text-box': BlocksTextBox
      'blocks.text-boxes-list': BlocksTextBoxesList
      'links.block-button': LinksBlockButton
      'links.button': LinksButton
      'links.outline-link': LinksOutlineLink
      'meta.page-meta': MetaPageMeta
    }
  }
}
