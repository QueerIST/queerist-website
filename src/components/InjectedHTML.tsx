import './injectedhtml.css'

export const InjectedHTML = ({ data }: { data: string }) => (
  <div className="injected-html" dangerouslySetInnerHTML={{ __html: data }} />
)
