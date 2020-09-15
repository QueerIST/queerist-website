import React from 'react'
import { Page, PageCover, Separator, BigBanner, TextBlock, HighlightBox, TextBoxList } from '../components'

const About = ({ data }) => (
	<Page data={data}>
		<PageCover data={data} />
		<Separator />
		<TextBlock data={data.text_block_1} small />
		<BigBanner data={data.banners} />
		<TextBlock data={data.text_block_2} small />
		<Separator data={data.separator} />
		<TextBoxList data={data.textboxs} />
		<HighlightBox data={data.highlightbox} />
	</Page>
)


export default About