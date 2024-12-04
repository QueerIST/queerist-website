import { type BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

export const TextRenderer = ({ data }: { data: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={data}
      blocks={{
        paragraph: ({ children }) => <p >{children}</p>
      }}
    />
  )
}
