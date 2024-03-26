import { type ReactNode } from 'react'

import { NavLink } from 'react-router-dom'

import Button from './Button'
import { publicPath } from '../helpers/links'
import { type SmallBanners as SmallBannersProps, type BigBanner as BigBannerProps, type SmallBanner as SmallBannerProps } from '../types/domain'

import './banners.css'

const BigBanner = ({ name, imgLink, button }: BigBannerProps) => (
  <div className='big-banner banner'>
    {button !== undefined &&
    <div className='big-banner-button'>
      <Button
            actionComp='BigBanner'
            actionName={`Entra ${name}`}
            borderColor={button.linkTextColor}
            color={button.linkTextColor}
          >
        <NavLink
              to={{ pathname: button.linkPage, hash: '#' + button.linkId }}
            >
          {button.linkText}
        </NavLink>
      </Button>
    </div>}
    <img src={publicPath(imgLink)} alt={name} />
  </div>
)

function SmallBanner ({ name, label, logoLink, bgColor, textColor, button }: SmallBannerProps) {
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
          actionName={`Entra ${name}`}
          borderColor={button.linkTextColor }
          color={button.linkTextColor}
        >
          <NavLink
            to={{ pathname: button.linkPage, hash: '#' + button.linkId }}
          >
            {button.linkText}
          </NavLink>
        </Button>}
      </div>
    </div>
  )
}

const SmallBannersWrap = ({ children }: { children: ReactNode }) => (
  <div className='small-banners'>
    {children}
  </div>
)

const SmallBanners = ({ banners }: { banners: SmallBannersProps }) => (
  <SmallBannersWrap>
    {banners.map((smallBanner, i) => (
      <SmallBanner
        key={i}
       {...smallBanner}
      />
    ))}
  </SmallBannersWrap>
)

export { BigBanner, SmallBanners }
