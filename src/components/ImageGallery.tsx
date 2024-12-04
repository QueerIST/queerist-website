import { LinkButton } from './Button'
import { Image } from './Image'
import { usePage } from '../api/use'
import { gap } from '../helpers/ga4'
import { SizeTypes } from '../helpers/image'
import { type EventMedia } from '../types/domain'

import './imagegallery.css'

export const ImageGallery = ({ data }: { data: EventMedia[] }) => {
  const [page] = usePage()
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
            <Image src={media} sizes={{ mobile: { type: SizeTypes.Proportion, proportion: 1 }, desktop: { type: SizeTypes.Limit, proportion: 0.5, maxWidth: 1000 } }}/>
            {event && <label>
              <LinkButton
                className='no-link-decoration'
                link={{ linkPage: event.path }}
                action={gap('navigate_item', {
                  type: 'image-gallery',
                  list_id: page.id,
                  item_index: i,
                  link_text: `de ${event.name}`,
                  link_page: event.id
                })}
              >
                de <u>{event.name}</u>
              </LinkButton>
            </label>}
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
