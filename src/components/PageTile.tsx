import { OutlineButton } from './Button'
import { Image } from './Image'
import { usePage } from '../api/use'
import { gap } from '../helpers/ga4'
import { type Hub } from '../types/domain'

import './tile.css'

export function PageTile ({ data, n }: { data: Hub, n: number }) {
  const [page] = usePage()
  const { id, name, description, img, logo, bgColor, textColor, seeMoreText, path } = data

  return (
    <div id={id}>
      <div
      data-aos='zoom-in' className='tile-info page-tile-info' style={{ color: textColor }}
    >
        <Image src={img} alt={`Capa de ${name}`} />
        <div className='tile-info-text'>
          <div className='page-tile-info-bg' style={{ backgroundColor: bgColor }} />
          {logo &&
          <div className='tile-info-text-img'>
            <Image src={logo} alt={`Logo de ${name}`} />
          </div>}
          <h2 className='tile-info-text-text'>{name}</h2>
          <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
          <OutlineButton
            action={gap('navigate_item', {
              type: 'page-list',
              list_id: page.id,
              item_index: n,
              link_text: seeMoreText,
              link_page: id
            })}
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
