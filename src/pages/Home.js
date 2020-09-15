import React from 'react'
import { MainCover, TextBlock, BigBanner, SmallBanners, Page } from '../components'

const Home = ({ data }) => (
	<Page data={data}>
		<MainCover />
		<TextBlock data={data.text_block} />
		<BigBanner data={data.banners} />
		<SmallBanners data={data.banners.small_banners} />
	</Page>
)


export default Home