import { type InjectedHTML as InjectedHTMLProps } from '../types/domain'

import './injectedhtml.css'

export const InjectedHTML = ({ data }: { data: InjectedHTMLProps }) => (
  <div id={data.id} className="injected-html" dangerouslySetInnerHTML={{ __html: data.code }} />
)
