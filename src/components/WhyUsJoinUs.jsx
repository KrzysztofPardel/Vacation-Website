import React, { useState, useEffect } from 'react'
import baloons from '../assets/baloons.jpg'

const style = {
	container: `w-full h-[50em] relative mt-[1em] static`,
	image: `w-full h-full object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_small: `absolute bottom-60 right-60 w-[35em] h-[20em] flex flex-col justify-center text-center p-5 bg-slate-100`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 inline`,
	description: `py-2 text-black text-justify text-lg`,
}
const WhyUsJoinUs = () => {
	return (
		<>
			<div className={style.container}>
				<img src={baloons} alt='' className={style.image} />
				<div className={style.overlay}></div>
				<div className={style.container_small}>
					<h1 className={style.h1}>
						<p className={style.p}>Join us</p> on a journey of discovery
					</h1>
					<span className={style.description}>
						{' '}
						Join us on a journey of discovery, excitement, and relaxation. Let us take care of all the details, so you
						can focus on enjoying the moment and creating unforgettable memories. Contact us today to start planning
						your dream vacation with Vacation!
					</span>
				</div>
			</div>
		</>
	)
}

export default WhyUsJoinUs
