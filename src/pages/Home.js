import React from 'react'
import { MainCover, TextBlock, Banners, Page } from '../components'

const Home = ({ data }) => (
	<Page>
		<MainCover />
		<TextBlock data={data.text_block} />
		<Banners data={data.banners} />
	</Page>
)


export default Home