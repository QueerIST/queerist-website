import { useState } from 'react'

import classNames from 'classnames'

import Expand from './../svg/expand.svg?react'
import { OutlineButton } from './Button'
import { EventGallery } from './EventGallery'
import { usePage } from '../api/use'
import { gap } from '../helpers/ga4'
import { publicPath } from '../helpers/links'
import { type Series } from '../types/domain'

import './tile.css'

export const EventTile = ({ data, n, inline = false }: { data: Series, n: number, inline?: boolean }) => {
  const { id, name, description, imgLink, logoLink, bgColor, textColor, events, seeMoreText, path } = data

  const [open, setOpen] = useState(false)
  const [page] = usePage()
  const dir = n % 2 !== 0 ? 'left' : 'right'
  const openClass = inline && open && 'open'

  let link, className, action
  if (inline) {
    action = gap('select_content', {
      content_type: 'event-tile',
      content_id: id,
      content_action: !open ? 'open' : 'close'
    })
    link = { onClick: () => { setOpen(!open) } }
    className = classNames('tile-info-b', 'tile-info-button', openClass)
  } else {
    action = gap('navigate_item', {
      type: 'event-tile',
      list_id: page.id,
      item_index: n,
      link_text: seeMoreText ?? 'Ver mais',
      link_page: id
    })
    link = { linkPage: path }
    className = 'tile-info-b'
  }

  return (
    <div id={id}>
      <div
      data-aos={`flip-${dir}`} className={classNames('tile-info', dir, inline && 'tile-info-inline')} style={{ backgroundColor: bgColor, color: textColor }}
    >
        <div className={classNames('tile-info-text', openClass)}>
          {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
          <h3 className='tile-info-text-text'>{name}</h3>
          <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
          {events !== undefined &&
          <OutlineButton
            action={action}
            link={link}
            button={{ linkTextColor: textColor }}
            className={className}
          >
            {seeMoreText ?? 'Ver mais'}
            {inline && <Expand fill={textColor} />}
          </OutlineButton>
          }
        </div>
        <div className='tile-info-img'>
          <img className={classNames(openClass)} src={publicPath(imgLink)} alt={name} />
          {inline && events !== undefined && <EventGallery open={open} data={events} />}
        </div>
      </div>
    </div>
  )
}
