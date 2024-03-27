import { publicPath } from '../helpers/links'
import { isSubPageMeta } from '../helpers/types'
import { type PagesMeta } from '../types/domain'

import './pagecover.css'

function PageBackground (props: PagesMeta) {
  const { name, description, bgColor, textColor } = props
  return (
    <div className='page-background' style={{ backgroundColor: bgColor, color: textColor }}>
      {isSubPageMeta(props) && props.logoLink !== undefined && <img src={publicPath(props.logoLink)} alt={`Logo ${name}`} />}
      <h1>{name}</h1>
      {!isSubPageMeta(props) && <p>{description}</p>}
    </div>
  )
}

function PageImage (props: PagesMeta) {
  const { imgLink, name, description } = props
  return (
    <div className='page-image'>
      {isSubPageMeta(props)
        ? (
          <div className='page-image-group'>
            <div className='page-image-child'>
              <img src={publicPath(imgLink)} alt={name} />
            </div>
            <div
              className='page-image-child'
              style={{ backgroundColor: props.imgBgColor, color: props.textColor }}
            >
              <p>{description}</p>
            </div>
          </div>
          )
        : (
          <div className='page-image-group'>
            <img src={publicPath(imgLink)} alt={name} />
          </div>
          )}
    </div>
  )
}

const PageCover = (props: PagesMeta) =>
  <>
    <PageBackground {...props} />
    <PageImage {...props} />
  </>

export default PageCover
