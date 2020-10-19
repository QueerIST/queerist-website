import React from 'react'
import { Page, PageCover, Tile, Separator, TextBlock, IconList, HighlightBox } from '../components'

const SubPage = ({ id, parentData }) => {
	const data = parentData.sub_pages.find(p => p.id === id)
	return (
		<Page data={data}>
			<PageCover data={data} isSubPage />
			<Separator data={data.separator} />
			{data.icons && <IconList data={data.icons} />}
			<TextBlock data={data.text_block} />
			{data.highlightbox && <HighlightBox data={data.highlightbox} />}
			{data.text_block_2 && <TextBlock data={data.text_block_2} small />}
			{data.events && <>
				<Separator data={data.separator_events} />
				{data.events.map(
					(event, i) => (
						<Tile key={i} n={i} data={event} />
					)
				)}
			</>
			}

		</Page>
	)
}


export default SubPage