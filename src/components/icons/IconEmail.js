import React from 'react';

const IconEmail = ({ size }) => {
	return (
		<svg className={`h-${size} w-${size} fill-current`} id="Email" xmlns=" http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" >
			<path d="M14.608,12.172c0,0.84,0.239,1.175,0.864,1.175c1.393,0,2.28-1.775,2.28-4.727c0-4.512-3.288-6.672-7.393-6.672
	c-4.223,0-8.064,2.832-8.064,8.184c0,5.112,3.36,7.896,8.52,7.896c1.752,0,2.928-0.192,4.727-0.792l0.386,1.607
	c-1.776,0.577-3.674,0.744-5.137,0.744c-6.768,0-10.393-3.72-10.393-9.456c0-5.784,4.201-9.72,9.985-9.72
	c6.024,0,9.215,3.6,9.215,8.016c0,3.744-1.175,6.6-4.871,6.6c-1.681,0-2.784-0.672-2.928-2.161
	c-0.432,1.656-1.584,2.161-3.145,2.161c-2.088,0-3.84-1.609-3.84-4.848c0-3.264,1.537-5.28,4.297-5.28
	c1.464,0,2.376,0.576,2.782,1.488l0.697-1.272h2.016v7.057H14.608z M11.657,9.004c0-1.319-0.985-1.872-1.801-1.872
	c-0.888,0-1.871,0.719-1.871,2.832c0,1.68,0.744,2.616,1.871,2.616c0.792,0,1.801-0.504,1.801-1.896V9.004z"/>
		</svg >
	);
}

IconEmail.defaultProps = { size: 4 }

export default IconEmail;