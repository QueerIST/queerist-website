import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

import { Image } from './Image'
import { SizeTypes } from '../helpers/image'

export const TextRenderer = ({ data }: { data: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={data}
      blocks={{
        paragraph: ({ children }) => <p>{children}</p>,
        image: ({ image }) => <Image src={image as never} sizes={{ mobile: { type: SizeTypes.Proportion, proportion: 1 }, desktop: { type: SizeTypes.Proportion, proportion: 1 } }} className='width100'/>
      }}
    />
  )
}
