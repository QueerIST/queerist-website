export const InjectedHTML = ({ data }: { data: string }) => (
  <div className="highlightbox tile-info-text-text" dangerouslySetInnerHTML={{ __html: data }} />
)
