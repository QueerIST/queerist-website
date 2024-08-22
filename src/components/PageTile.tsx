import { OutlineButton } from './Button'
import { usePage } from '../api/use'
import { publicPath } from '../helpers/links'
import { type Hub } from '../types/domain'

import './tile.css'

export function PageTile ({ data, n }: { data: Hub, n: number }) {
  const [page] = usePage()
  const { id, name, description, imgLink, logoLink, bgColor, textColor, seeMoreText, path } = data

  return (
    <div id={id}>
      <div
      data-aos='zoom-in' className='tile-info page-tile-info' style={{ color: textColor }}
    >
        <img src={publicPath(imgLink)} alt={name} />
        <div className='tile-info-text'>
          <div className='page-tile-info-bg' style={{ backgroundColor: bgColor }} />
          {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
          <h2 className='tile-info-text-text'>{name}</h2>
          <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
          <OutlineButton
            action={{
              type: 'page-list',
              name: 'navigate_item',
              item_list_name: page.name,
              item_list_id: page.id,
              items: [{
                index: n,
                item_id: id,
                item_name: name,
                link_text: seeMoreText,
                link_page: path
              }]
            }}
            link={{ linkPage: path }}
            button={{ linkTextColor: textColor }}
            className='tile-info-b'
          >
            {seeMoreText}
          </OutlineButton>
        </div>
      </div>
    </div>
  )
}
