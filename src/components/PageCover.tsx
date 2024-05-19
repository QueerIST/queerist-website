import { publicPath } from '../helpers/links'
import { type PageMeta, type SubPageMeta } from '../types/domain'

import './pagecover.css'

export const PageCover = (props: PageMeta) => {
  const { name, imgLink, description, bgColor, textColor } = props
  return (
    <>
      <div className='page-background' style={{ backgroundColor: bgColor, color: textColor }}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <img src={publicPath(imgLink)} alt={name} />
        </div>
      </div>
    </>
  )
}

export const SubPageCover = (props: SubPageMeta) => {
  const { name, imgLink, description, bgColor, textColor } = props
  return (
    <>
      <div className='page-background' style={{ backgroundColor: bgColor, color: textColor }}>
        {props.logoLink !== undefined && <img src={publicPath(props.logoLink)} alt={`Logo ${name}`} />}
        <h1>{name}</h1>
      </div>
      <div className='page-image'>
        <div className='page-image-group'>
          <div className='page-image-child'>
            <img src={publicPath(imgLink)} alt={name} />
          </div>
          <div className='page-image-child'style={{ backgroundColor: props.imgBgColor, color: props.textColor }}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
