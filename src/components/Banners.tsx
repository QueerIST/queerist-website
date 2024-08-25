import { type PropsWithChildren } from 'react'

import { OutlineButton } from './Button'
import { usePage } from '../api/use'
import { gap } from '../helpers/ga4'
import { pageId, publicPath } from '../helpers/links'
import { type SmallBanners as SmallBannersProps, type BigBanner as BigBannerProps, type SmallBanner as SmallBannerProps } from '../types/domain'

import './banners.css'

export const BigBanner = ({ id, name, imgLink, button }: BigBannerProps) => {
  return (
    <div id={id} className='big-banner banner'>
      {button !== undefined &&
      <div className='big-banner-button'>
        <OutlineButton
          action={gap('navigate_content', {
            type: 'big_banner',
            link_text: button.text,
            link_page: pageId(button.link.linkPage)
          })}
          link={button.link}
          button={button.button}
        >
          {button.text}
        </OutlineButton>
      </div>}
      <img src={publicPath(imgLink)} alt={name} />
    </div>
  )
}

function SmallBanner ({ n, name, label, logoLink, bgColor, textColor, button }: SmallBannerProps & { n: number }) {
  const [page] = usePage()
  return (
    <div className='small-banner banner' data-aos='zoom-in' style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='small-banner-content'>
        <h2 className='small-banner-text'>{name}</h2>
        <p className='small-banner-text'>{label}</p>
        <div className='small-banner-img'>
          <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
        </div>
        {button !== undefined &&
        <OutlineButton
          action={gap('navigate_item', {
            type: 'small_banner',
            item_index: n,
            list_id: page.id,
            link_text: button.text,
            link_page: pageId(button.link.linkPage)
          })}
          link={button.link}
          button={button.button}>
          {button.text}
        </OutlineButton>
        }
      </div>
    </div>
  )
}

const SmallBannersWrap = (props: PropsWithChildren<{ id?: string }>) => (
  <div className='small-banners'>
    {props.children}
  </div>
)

export const SmallBanners = ({ id, banners }: SmallBannersProps) => (
  <SmallBannersWrap id={id}>
    {banners.map((smallBanner, i) => (
      <SmallBanner
        key={i}
        n={i}
       {...smallBanner}
      />
    ))}
  </SmallBannersWrap>
)
