import { MainCover, TextBlock, BigBanner, SmallBanners, Page, HighlightBox } from '../components'
import { type DMainPage } from '../types/data'

const Home = ({ data }: { data: DMainPage }) => (
  <Page data={data}>
    <MainCover />
    <TextBlock data={data.text_block} />
    <BigBanner data={data.banners.big_banner} />
    <SmallBanners data={data.banners.small_banners} />
    <HighlightBox data={data.highlightbox} />
  </Page>
)

export default Home
