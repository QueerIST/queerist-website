import React, { useRef, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
	const location = useLocation();
	const history = useHistory();
	const prevLocationRef = useRef(location);

	useEffect(() => {
		if (history.action !== 'POP')
			if (location.pathname !== prevLocationRef.current.pathname) {
				document.documentElement.style.scrollBehavior = 'unset';
				setTimeout(() => {
					window.scrollTo(0, 0);
					document.documentElement.style.scrollBehavior = 'smooth';
				}, 0)
			} else {
				window.scrollTo(0, 0);
			}
		prevLocationRef.current = location;
	}, [location, history]);

	return children;
}

export { ScrollToTop }

function scrollOptions(el, start) {
	document.documentElement.style.scrollBehavior = 'unset';
	setTimeout((e) => {
		window.scrollTo(0, 0);
		document.documentElement.style.scrollBehavior = 'smooth';
		el.scrollIntoView({ block: start ? 'start' : 'center' });
	}, 0, el)
}

export { scrollOptions }