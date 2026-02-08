import type { Schema, Struct } from '@strapi/strapi'

export interface BlocksBigBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_big_banners'
  info: {
    displayName: 'BigBanner'
    icon: 'picture'
  }
  attributes: {
    AltName: Schema.Attribute.String & Schema.Attribute.Required
    Button: Schema.Attribute.Component<'links.outline-link', false>
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required
    Slug: Schema.Attribute.String
  }
}

export interface BlocksHighlightbox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_highlightboxes'
  info: {
    description: ''
    displayName: 'HighlightBox'
    icon: 'information'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Button: Schema.Attribute.Component<'links.block-button', false>
    Slug: Schema.Attribute.String
    Subtitle: Schema.Attribute.Text & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface BlocksHtml extends Struct.ComponentSchema {
  collectionName: 'components_blocks_htmls'
  info: {
    description: ''
    displayName: 'HTML'
    icon: 'hashtag'
  }
  attributes: {
    Code: Schema.Attribute.Text & Schema.Attribute.Required
    Slug: Schema.Attribute.String
  }
}

export interface BlocksIcon extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icons'
  info: {
    description: ''
    displayName: '_Icon'
  }
  attributes: {
    Label: Schema.Attribute.String
    Logo: Schema.Attribute.Media<'images'>
    Name: Schema.Attribute.String & Schema.Attribute.Required
    URL: Schema.Attribute.String
  }
}

export interface BlocksIconsList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icons_lists'
  info: {
    description: ''
    displayName: 'IconsList'
    icon: 'chartBubble'
  }
  attributes: {
    Icons: Schema.Attribute.Component<'blocks.icon', true> &
    Schema.Attribute.Required &
    Schema.Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    Slug: Schema.Attribute.String
  }
}

export interface BlocksSeparator extends Struct.ComponentSchema {
  collectionName: 'components_blocks_separators'
  info: {
    displayName: 'Separator'
    icon: 'code'
  }
  attributes: {
    Text: Schema.Attribute.String
  }
}

export interface BlocksSmallBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_small_banners'
  info: {
    displayName: '_SmallBanner'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Button: Schema.Attribute.Component<'links.outline-link', false>
    Logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required
    Subtitle: Schema.Attribute.String & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface BlocksSmallBannersList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_small_banners_lists'
  info: {
    displayName: 'SmallBannersList'
    icon: 'filter'
  }
  attributes: {
    Banners: Schema.Attribute.Component<'blocks.small-banner', true> &
    Schema.Attribute.Required &
    Schema.Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    Slug: Schema.Attribute.String
  }
}

export interface BlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_blocks'
  info: {
    displayName: 'TextBlock'
    icon: 'write'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Button: Schema.Attribute.Component<'links.block-button', false>
    Slug: Schema.Attribute.String
    Small: Schema.Attribute.Boolean &
    Schema.Attribute.Required &
    Schema.Attribute.DefaultTo<false>
    Text: Schema.Attribute.Blocks & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Title: Schema.Attribute.String
    TitleColor: Schema.Attribute.String &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
  }
}

export interface BlocksTextBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_boxes'
  info: {
    displayName: '_TextBox'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Text: Schema.Attribute.Text & Schema.Attribute.Required
    Title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface BlocksTextBoxesList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_boxes_lists'
  info: {
    description: ''
    displayName: 'TextBoxesList'
    icon: 'grid'
  }
  attributes: {
    Boxes: Schema.Attribute.Component<'blocks.text-box', true> &
    Schema.Attribute.Required &
    Schema.Attribute.SetMinMax<
    {
      min: 1
    },
    number
    >
    Slug: Schema.Attribute.String
  }
}

export interface LinksBlockButton extends Struct.ComponentSchema {
  collectionName: 'components_links_block_buttons'
  info: {
    displayName: 'BlockButton'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Link: Schema.Attribute.Component<'links.button', false> &
    Schema.Attribute.Required
    Text: Schema.Attribute.String & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
  }
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons'
  info: {
    description: ''
    displayName: '_Link'
  }
  attributes: {
    File: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>
    Page: Schema.Attribute.String
    Web: Schema.Attribute.String
  }
}

export interface LinksOutlineLink extends Struct.ComponentSchema {
  collectionName: 'components_links_outline_links'
  info: {
    description: ''
    displayName: 'OutlineButton'
  }
  attributes: {
    Link: Schema.Attribute.Component<'links.button', false> &
    Schema.Attribute.Required
    Text: Schema.Attribute.String & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.Required &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
  }
}

export interface MetaPageMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_page_metas'
  info: {
    description: ''
    displayName: 'Page Meta'
    icon: 'book'
  }
  attributes: {
    BackgroundColor: Schema.Attribute.String &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
    Description: Schema.Attribute.Text & Schema.Attribute.Required
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required
    Name: Schema.Attribute.String & Schema.Attribute.Required
    Slug: Schema.Attribute.String & Schema.Attribute.Required
    TextColor: Schema.Attribute.String &
    Schema.Attribute.CustomField<'plugin::color-picker.color'>
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
