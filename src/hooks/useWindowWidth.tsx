import { useEffect, useState } from "react";

const useWindowWidth = () => {
	const [windowWidth, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleSize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleSize);

		return (
			window.removeEventListener('resize', handleSize)
		)
		// console.log(windowWidth);
	}, [windowWidth])

	return windowWidth;
}


export default useWindowWidth;