import React, { useState, useEffect } from 'react'
import manandgiraffe from '../assets/manandgiraffe.jpg'

const style = {
	container: `w-full h-auto relative`,
	container_image: `w-[70vw]`,
	container_all: `flex flex-row-reverse`,
	image: `w-full h-full object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_small: ` w-[30vw] h-auto flex flex-col justify-center text-center p-5 bg-white`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 mr-1 inline`,
	description: `py-2 text-black text-justify text-lg`,
}
const WhyUsAtVacation = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.container_all}>
					<div className={style.container_image}>
						<img src={manandgiraffe} alt='friends sitting' className={style.image} />
					</div>
					<div className={style.container_small}>
						<h1 className={style.h1}>
							At Vacation, <p className={style.p}>we don't just sell </p>
						</h1>
						<span className={style.description}>
							{' '}
							travel, we sell experiences that inspire, delight, and transform. We believe that travel is a powerful
							tool for personal growth, cultural understanding, and environmental sustainability. That's why we're
							committed to promoting responsible tourism practices that preserve the natural and cultural heritage of
							our planet.
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default WhyUsAtVacation