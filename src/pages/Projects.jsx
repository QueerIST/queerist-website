import React from 'react'
import { Page, PageCover, Tile, Separator } from '../components'

const Projects = ({ data }) => (
	<Page data={data}>
		<PageCover data={data} />
		<Separator data={data.separator} />
		{data.sub_pages && data.sub_pages.map(
			(page, i) => (
				<Tile key={i} n={i} data={page} parentPage={data.id} />
			)
		)}
	</Page>
)


export default Projects