import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

import { LinkButton } from './Button'
import { Image } from './Image'
import { type Action, gap } from '../helpers/ga4'
import { SizeTypes } from '../helpers/image'
import { pageId } from '../helpers/links'
import { type ButtonLink } from '../types/domain'

export const TextRenderer = ({ data }: { data: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={data}
      blocks={{
        paragraph: ({ children }) => <p>{children}</p>,
        image: ({ image }) => <Image src={image as never} sizes={{ mobile: { type: SizeTypes.Proportion, proportion: 1 }, desktop: { type: SizeTypes.Proportion, proportion: 1 } }} className='width100'/>,
        link: ({ url, children }) => {
          let link: ButtonLink
          let action: Action | undefined

          url ||= ''

          if (url.startsWith('/') || !url.includes('.')) {
            link = { linkPage: url }
          } else {
            if (!url.startsWith('http')) {
              url = 'https://' + url
            }

            const split = url.split('queerist.tecnico.ulisboa.pt')
            if (split.length > 1) {
              link = { linkPage: split[1] }
            } else {
              link = { linkWeb: url }
            }
          }

          if (link.linkPage) {
            action = gap('navigate_content', { type: 'text-renderer', link_page: pageId(link.linkPage), link_text: children?.toString() ?? '' })
          }

          return <LinkButton link={link} action={action}>{children}</LinkButton>
        }
      }}
    />
  )
}
