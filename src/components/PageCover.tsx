import { publicPath } from '../helpers/links'
import { isDataSubPageMeta, isSubPageMeta } from '../helpers/types'
import { type DPage } from '../types/data'
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

const PageCoverInfo = (props: PagesMeta) => (
  <>
    <PageBackground {...props} />
    <PageImage {...props} />
  </>
)

const PageCover = ({ data, parentPage }: { data: DPage, parentPage?: string }) =>
  <PageCoverInfo
    name={data.name}
    description={data.description}
    textColor={data.text_color}
    bgColor={data.bg_color}
    imgLink={data.img_link}
    {...(isDataSubPageMeta(data, parentPage) && {
      parentPage,
      logoLink: data.logo_link,
      imgBgColor: data.img_bg_color
    })}
  />

export default PageCover
