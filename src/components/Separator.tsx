import { type Separator as SeparatorProps } from '../types/domain'

import './separator.css'

const Separator = ({ data }: { data?: SeparatorProps }) => (
  <div className='separator'>
    {data !== undefined &&
      <h2>
        {data}
      </h2>
      }
    <hr />
  </div>
)

export default Separator
