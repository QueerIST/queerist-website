import { type PropsWithChildren } from 'react'

import classNames from 'classnames'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

import Launch from './../svg/launch.svg?react'
import { BlockButton, LinkButton } from './Button'
import { Image } from './Image'
import { usePage } from '../api/use'
import { WrapDelayed } from '../helpers/delay'
import { gap } from '../helpers/ga4'
import { SizeTypes } from '../helpers/image'
import { type Events, type Event } from '../types/domain'

import './eventgallery.css'

const EventGalleryWrap = (props: PropsWithChildren<{ open: boolean }>) => (
  <ul className={classNames('event-gallery', !props.open && 'closed')}>
    {props.children}
  </ul>
)

const EventGalleryItem = ({ n, id, name, open = true, detached = false, detailed, date, location, img, link, parentPage, path }: Event & { open?: boolean, detached?: boolean, detailed?: boolean, n: number }) => {
  const nameDetails = detailed ? ` // ${parentPage.name}` : ''
  const [page] = usePage()
  return (
    <li className='event-gallery-item' id={id}>
      <div className='event-gallery-item-img'>
        <WrapDelayed load={open}>
          <Image src={img} alt={`Thumbnail da capa do evento ${name}`} sizes={{ mobile: { proportion: 0.28, height: 80, type: SizeTypes.Fixed }, desktop: { proportion: 0.28, height: 80, type: SizeTypes.Fixed } }} />
        </WrapDelayed>
      </div>
      <div className='event-gallery-item-text'>
        <h3>{`${name}${nameDetails}`}</h3>
        <span className='event-gallery-item-launch icon-svg'>
          <p>{format(date, 'dd MMM yyyy, HH\'h\'mm', { locale: pt })} @ {location.specific ?? location.name}</p>
          {!detached &&
          <LinkButton link={{ linkWeb: link }}>
            <Launch />
          </LinkButton>
          }
        </span>
        <BlockButton
          action={gap('navigate_item', {
            type: 'event-list',
            list_id: detailed ? page.id : parentPage.id,
            item_index: n,
            link_text: 'Ver mais',
            link_page: id
          })}
          link={{ linkPage: path }}
          button={{ linkBackgroundColor: parentPage.bgColor, linkTextColor: parentPage.textColor }}
        >
          {'Ver mais'}
        </BlockButton>
      </div>
    </li>
  )
}

export function EventGallery ({ data, open }: { data: Events, open: boolean }) {
  return (
    <EventGalleryWrap open={open}>
      {data.map((event, i) => (
        <EventGalleryItem
          n={i}
          key={i}
          open={open}
          {...event}
        />
      ))}
    </EventGalleryWrap>
  )
}

export const InlineEventGallery = ({ data, detailed, reduced = false }: { data: Events, reduced?: boolean, detailed?: boolean }) => (
  <div className={classNames('event-gallery-inline', reduced && 'event-gallery-reduced')}>
    <ul className='event-gallery'>
      {data.map((event, i) => (
        <EventGalleryItem
          n={i}
          key={i}
          detached
          detailed={detailed}
          {...event}
        />
      ))}
    </ul>
  </div>
)
