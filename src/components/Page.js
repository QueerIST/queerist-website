import React from 'react'

function Page({ children }) {
	return (
		<div data-aos="fade-left">
			{children}
		</div>
	)
}

export default Page