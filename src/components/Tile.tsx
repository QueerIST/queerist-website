import { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { EventGallery, Button } from '.'
import Expand from './../svg/expand.svg?react'
import { publicPath } from '../helpers/links'
import { isDataEventWithHappenings, isDataSubPage, isEventWithHappenings } from '../helpers/types'
import { type DHappening, type DTile } from '../types/data'
import { type EventWithHappenings, type Event, type SubPage } from '../types/domain'
// import Launch from './../svg/launch.svg?react'

import './tile.css'

function PageTileInfo ({ id, parentPage, name, description, imgLink, logoLink, bgColor, textColor, seeMoreText }: Omit<SubPage, 'textBlock' | 'imgBgColor'>) {
  const EventTypeInfoButton = (
    <NavLink
      className='tile-info-b'
      to={{ pathname: `/${parentPage}/${id}` }}
    >
      {seeMoreText}
      {/* <Launch fill={textColor} /> */}
    </NavLink>
  )
  return (
    <div
      data-aos='zoom-in' className='tile-info page-tile-info' style={{ color: textColor }}
    >
      <img src={publicPath(imgLink)} alt={name} />
      <div className='tile-info-text'>
        <div className='page-tile-info-bg' style={{ backgroundColor: bgColor }} />
        {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
        <h2 className='tile-info-text-text'>{name}</h2>
        <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
        <Button actionComp='PageTile' actionName={`Entra ${name} (em ${parentPage})`} borderColor={textColor} color={textColor}>
          {EventTypeInfoButton}
        </Button>
      </div>
    </div>
  )
}

const EventTileInfo = (props: Omit<Event, 'happenings'> & { happenings?: DHappening[] }) => {
  const { n, id, name, description, imgLink, logoLink, bgColor, textColor } = props

  const [open, setOpen] = useState(false)
  const location = useLocation()
  const dir = n % 2 !== 0 ? 'left' : 'right'
  const openClass = open ? 'open' : ''

  const EventTypeInfoButton = (props: EventWithHappenings) => (
    <button
      onClick={() => { setOpen(!open) }}
      className={`tile-info-b tile-info-button ${openClass}`}
    >
      {props.seeMoreText}
      <Expand fill={textColor} />
    </button>
  )

  useEffect(() => {
    if (location.hash.split('-')[0] === `#${id}`) { setOpen(true) }
  }, [location, id])

  return (
    <div
      data-aos={`flip-${dir}`} className={`tile-info ${dir}`} style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className={`tile-info-text ${openClass}`}>
        {logoLink !== undefined &&
          <div className='tile-info-text-img'>
            <img src={publicPath(logoLink)} alt={`Logo ${name}`} />
          </div>}
        <h3 className='tile-info-text-text'>{name}</h3>
        <p className='tile-info-text-desc tile-info-text-text'>{description}</p>
        {isEventWithHappenings(props) &&
          <Button actionComp='EventTile' actionName={`Clica ${name}`} actionLabel={open ? 'Close' : 'Open'} borderColor={textColor} color={textColor}>
            {EventTypeInfoButton(props)}
          </Button>}
      </div>
      <div className='tile-info-img'>
        <img className={openClass} src={publicPath(imgLink)} alt={name} />
        {isEventWithHappenings(props) && <EventGallery id={id} open={open} data={props.happenings} />}
      </div>
    </div>
  )
}

const Tile = ({ n, data, parentPage }: { n: number, data: DTile, parentPage?: string }) => (
  <div id={data.id}>
    {!isDataSubPage(data, parentPage)
      ? (
        <EventTileInfo
          n={n}
          id={data.id}
          name={data.name}
          description={data.description}
          imgLink={data.img_link}
          logoLink={data.logo_link}
          bgColor={data.bg_color}
          textColor={data.text_color}
          {...(isDataEventWithHappenings(data) && {
            happenings: data.happenings,
            seeMoreText: data.see_more_text
          })}
        />
        )
      : (
        <PageTileInfo
          id={data.id}
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          parentPage={parentPage!}
          name={data.name}
          description={data.description}
          imgLink={data.img_link}
          logoLink={data.logo_link}
          bgColor={data.bg_color}
          textColor={data.text_color}
          seeMoreText={data.see_more_text}
        />
        )}
  </div>
)

export default Tile
