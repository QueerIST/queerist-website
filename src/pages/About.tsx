import { Page, PageCover, Separator, BigBanner, TextBlock, TextBoxList } from '../components'
import { type DAboutPage } from '../types/data'

const About = ({ data }: { data: DAboutPage }) => (
  <Page data={data}>
    <PageCover data={data} />
    <Separator />
    <TextBlock data={data.text_block_1} small />
    <BigBanner data={data.big_banner} />
    <TextBlock data={data.text_block_2} small />
    <Separator data={data.separator} />
    <TextBoxList data={data.textboxs} />
  </Page>
)

export default About
