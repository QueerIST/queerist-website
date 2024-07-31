import { type PropsWithChildren } from 'react'

import { NavLink } from 'react-router-dom'

import { Button } from './Button'
import { usePage } from '../api/use'
import { publicPath } from '../helpers/links'
import { type SmallBanners as SmallBannersProps, type BigBanner as BigBannerProps, type SmallBanner as SmallBannerProps } from '../types/domain'

import './banners.css'

export const BigBanner = ({ id, name, imgLink, button }: BigBannerProps) => {
  const [page] = usePage()
  return (
    <div id={id} className='big-banner banner'>
      {button !== undefined &&
      <div className='big-banner-button'>
        <Button
            actionComp='BigBanner'
            actionName={`Entra ${name} (em ${page.name})`}
            borderColor={button.linkTextColor}
            color={button.linkTextColor}
          >
          <NavLink
              to={{ pathname: button.linkPage, hash: button.linkId !== undefined ? '' + button.linkId : undefined }}
            >
            {button.linkText}
          </NavLink>
        </Button>
      </div>}
      <img src={publicPath(imgLink)} alt={name} />
    </div>
  )
}

function SmallBanner ({ name, label, logoLink, bgColor, textColor, button }: SmallBannerProps) {
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
        <Button
          actionComp='SmallBanner'
          actionName={`Entra ${name} (em ${page.name})`}
          borderColor={button.linkTextColor }
          color={button.linkTextColor}
        >
          <NavLink
            to={{ pathname: button.linkPage, hash: button.linkId !== undefined ? '#' + button.linkId : undefined }}
          >
            {button.linkText}
          </NavLink>
        </Button>}
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
       {...smallBanner}
      />
    ))}
  </SmallBannersWrap>
)
