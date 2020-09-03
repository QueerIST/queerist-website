import React from 'react'
import { fullPath, fullPathSlashless } from '../helpers'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router'

const Page = ({ data, location, children }) => (
	<div /*data-aos="fade-left"*/>
		<Helmet
			defaultTitle="QueerIST – Incluir, informar, dialogar"
			titleTemplate="%s – QueerIST"
			defer={false}
		>
			{/* HTML Meta Tags */}
			{!data.home && <title>{data.name}</title>}
			<meta name="description" content={data.description} />

			{/* Google / Search Engine Tags */}
			<meta itemprop="name" content={data.name} />
			<meta itemprop="description" content={data.description} />
			<meta itemprop="image" content={fullPath(data.img_link)} />

			{/* Facebook Meta Tags */}
			<meta property="og:url" content={fullPathSlashless(location.pathname)} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={data.name} />
			<meta property="og:description" content={data.description} />
			<meta property="og:image" content={fullPath(data.img_link)} />

			{/* Twitter Meta Tags */}
			<meta name="twitter:site" content="@queerist" />
			<meta name="twitter:card" content="summary_large_image" />
			{/* <meta name="twitter:card" content="summary" /> */}
		</Helmet>
		{children}
	</div>
)

export default withRouter(Page)