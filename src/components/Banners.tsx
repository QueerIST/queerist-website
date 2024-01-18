import { type ReactNode } from 'react'

import { NavLink } from 'react-router-dom'

import { Button } from '.'
import { publicPath } from '../helpers'
import { type DBanners, type DSmallBanner } from '../types/data'
import { type BigBanner as BigBannerProps, type SmallBanner as SmallBannerProps } from '../types/domain'

import './banners.css'

const BigBannerInfo = ({ name, imgLink, textColor, linkText, linkPage, linkId }: BigBannerProps) => (
  <div className='big-banner banner'>
    {linkText !== undefined &&
    <div className='big-banner-button'>
      <Button
            actionComp='BigBanner'
            actionName={`Entra ${name}`}
            borderColor={textColor}
            color={textColor}
          >
        <NavLink
              to={{ pathname: linkPage, hash: '#' + linkId }}
            >
          {linkText}
        </NavLink>
      </Button>
    </div>}
    <img src={publicPath(imgLink)} alt={name} />
  </div>
)

function SmallBanner ({ name, label, logoLink, bgColor, textColor, linkText, linkPage, linkId }: SmallBannerProps) {
  return (
    <div className='small-banner banner' data-aos='zoom-in' style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='small-banner-content'>
        <h2 className='small-banner-text'>{name}</h2>
        <p className='small-banner-text'>{label}</p>
        <div className='small-banner-img'>
          <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
        </div>
        <Button
          actionComp='SmallBanner'
          actionName={`Entra ${name}`}
          borderColor={textColor}
          color={textColor}
        >
          <NavLink
            to={{ pathname: linkPage, hash: '#' + linkId }}
          >
            {linkText}
          </NavLink>
        </Button>
      </div>
    </div>
  )
}

const SmallBannersWrap = ({ children }: { children: ReactNode }) => (
  <div className='small-banners'>
    {children}
  </div>
)

const BigBanner = ({ data }: { data: DBanners }) => (
  <BigBannerInfo
    name={data.big_banner.name}
    imgLink={data.big_banner.img_link}
    textColor={data.big_banner.text_color}
    linkText={data.big_banner.link_text}
    linkPage={data.big_banner.link_page}
    linkId={data.big_banner.link_id}
  />
)

const SmallBanners = ({ data }: { data: DSmallBanner[] }) => (
  <SmallBannersWrap>
    {data.map((smallBanner, i) => (
      <SmallBanner
        key={i}
        name={smallBanner.name}
        label={smallBanner.label}
        logoLink={smallBanner.logo_link}
        bgColor={smallBanner.bg_color}
        textColor={smallBanner.text_color}
        linkText={smallBanner.link_text}
        linkPage={smallBanner.link_page}
        linkId={smallBanner.link_id}
      />
    ))}
  </SmallBannersWrap>
)

export { BigBanner, SmallBanners }
