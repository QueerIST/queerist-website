interface LabelWithOptions {
  'navigate_item': {
    type: string
    list_id: string
    item_index: number
    link_page: string
    link_text: string
  }
  'navigate_content': {
    type: string
    link_page: string
    link_text: string
  }
  'select_content': {
    content_type: string
    content_id: string
    content_action: string
  }
}

export interface Action {
  name: string
  params: unknown
}

export function gap<LabelKey extends keyof LabelWithOptions> (name: LabelKey,
  params: LabelWithOptions[LabelKey]): Action {
  return { name, params }
}
