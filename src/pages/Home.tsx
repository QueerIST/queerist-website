import { BigBanner, SmallBanners } from '../components/Banners'
import HighlightBox from '../components/HighlightBox'
import MainCover from '../components/MainCover'
import Page from '../components/Page'
import TextBlock from '../components/TextBlock'
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
