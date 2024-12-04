import { LinkButton } from './Button'
import { Image } from './Image'
import { gap } from '../helpers/ga4'
import { type EventMedia } from '../types/domain'

import './imagegallery.css'

export const ImageGallery = ({ data }: { data: EventMedia[] }) => {
  const numberOfCols = 2
  const elsPerCol = Math.ceil(data.length / numberOfCols)

  const children = []

  for (let c = 0; c < numberOfCols; c++) {
    const col = []

    for (let r = 0; r < elsPerCol; r++) {
      const i = (c * elsPerCol) + r

      if (data[i]) {
        const { media, event } = data[i]
        col.push(
          <div key={i} className='image-gallery-cell'>
            <Image src={media}/>
            {event && <label><LinkButton
                className='no-link-decoration'
                link={{ linkPage: event.path }}
                action={gap('navigate_item', {
                  type: 'event-list',
                  list_id: '1',
                  item_index: 1,
                  link_text: 'Ver mais',
                  link_page: '1'
                })}
              >
              de <u>{event.name}</u>
            </LinkButton></label>}
          </div>
        )
      }
    }

    if (col.length) {
      children.push(<div className='image-gallery-column' key={c}>{col}</div>)
    }
  }

  return (
    <div className='image-gallery'>
      {children}
    </div>
  )
}
