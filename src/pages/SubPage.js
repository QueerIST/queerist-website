import React from 'react'
import { Page, PageCover, Tile, Separator, TextBlock } from '../components'

const SubPage = ({ id, parentData }) => {
	const data = parentData.sub_pages.find(p => p.id === id)
	return (
		<Page>
			<PageCover parentPage={parentData.name} data={data} />
			<Separator />
			<TextBlock data={data.text_block} />
			{data.events && data.events.map(
				(event, i) => (
					<Tile key={i} n={i} data={event} />
				)
			)}
		</Page>
	)
}


export default SubPage