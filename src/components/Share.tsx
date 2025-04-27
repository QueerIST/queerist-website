import ReactGA from 'react-ga4'
import { shareOnMobile } from 'react-mobile-share'

import Arrow from './../svg/arrow.svg?react'
import { LinkButton } from './Button'
import { fullPath } from '../helpers/links'
import { type PageMeta } from '../types/domain'

import './share.css'

export const Share = ({ page }: { page: PageMeta }) => (
  <LinkButton
    className='share'
    link={{
      onClick: () => {
        shareOnMobile({
          text: page.description,
          url: fullPath(page),
          title: `${page.name} | QueerIST`
        })
        ReactGA.event('share', { method: 'native', item_id: page.id })
      }
    }}>
    <Arrow />
  </LinkButton>
)
