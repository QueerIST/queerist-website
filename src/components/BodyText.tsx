import { type BlocksContent } from '@strapi/blocks-react-renderer'

import { TextRenderer } from './TextRenderer'

import './bodytext.css'

export const BodyText = ({ data }: { data: BlocksContent }) => (
  <div className='body-text'>
    <TextRenderer data={data} />
  </div>
)
