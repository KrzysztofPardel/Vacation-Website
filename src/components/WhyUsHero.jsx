import React, { useState, useEffect } from 'react'
import Death_Valley_Hills from '../assets/Death_Valley_Hills.jpg'

const style = {
	container: `w-full h-screen relative`,
	image: `w-full h-full object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_small: `absolute bottom-20 right-20 w-[35em] h-[20em] flex flex-col justify-center text-center p-5 bg-slate-100`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 inline`,
	description: `py-2 text-black text-justify text-lg`,
}
const WhyUsHero = () => {
	return (
		<>
			<div className={style.container}>
				<img src={Death_Valley_Hills} alt='' className={style.image} />
				<div className={style.overlay}></div>
				<div className={style.container_small}>
					<h1 className={style.h1}>
						At <p className={style.p}>Vacation</p> we believe
					</h1>
					<span className={style.description}>
						{' '}
						that travel is not just a way to escape from the daily routine, but it's also an opportunity to enrich your
						life, broaden your horizons, and create memories that will last a lifetime. Our goal is to help you plan
						your dream vacation that perfectly matches your preferences, needs, and budget.
					</span>
				</div>
			</div>
		</>
	)
}

export default WhyUsHero