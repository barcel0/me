import React from 'react';

const IconYouTube = ({ size }) => {
	const remSize = `${size * 0.25}rem`;
	const style = {
		width: remSize,
		height: remSize
	}
	return (
		<svg className={`fill-current`} style={style} version="1.1" id="Youtube" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			viewBox="0 0 20 20" enablebackground="new 0 0 20 20" >
			<path d="M10,2.3C0.172,2.3,0,3.174,0,10s0.172,7.7,10,7.7s10-0.874,10-7.7S19.828,2.3,10,2.3z M13.205,10.334
					l-4.49,2.096C8.322,12.612,8,12.408,8,11.974V8.026C8,7.593,8.322,7.388,8.715,7.57l4.49,2.096
					C13.598,9.85,13.598,10.15,13.205,10.334z"/>
		</svg>
	);
}

IconYouTube.defaultProps = { size: 4 }

export default IconYouTube;


