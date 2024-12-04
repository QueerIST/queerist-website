import { type Separator as SeparatorProps } from '../types/domain'

import './separator.css'

export const Separator = ({ data }: { data?: SeparatorProps }) => (
  <div className='separator'>
    <hr />
    {data &&
      <h2>
        {data}
      </h2>
      }
  </div>
)
