import React from 'react'
import worldmap from '../assets/worldmap.jpg'

const style = {
	container: `w-full h-screen relative`,
	image: `w-full h-full object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_small: `absolute bottom-20 right-2 sm:right-10 md:right-20 w-[22rem] md:w-[35rem] h-[20em] flex flex-col justify-center text-center p-3 md:p-5 bg-slate-100`,
	h1: `py-1 text-black text-3xl md:text-4xl`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 inline text-4xl md:text-5xl`,
	description: `py-2 text-black text-justify text-base md:text-2xl`,
}
const PlanHero = () => {
	return (
		<>
			<div className={style.container}>
				<img src={worldmap} alt='' className={style.image} />
				<div className={style.overlay}></div>
				<div className={style.container_small}>
					<h1 className={style.h1}>
						<p className={style.p}>We believe</p>
					</h1>
					<span className={style.description}>
						{' '}
						that every journey is an opportunity to create unforgettable memories. That's why we're passionate about
						helping you plan the perfect trip, tailored to your unique interests and preferences. From breathtaking
						natural wonders to vibrant cultural experiences, we'll help you discover the world in a way that suits you
						best. With meticulous attention to detail and personalized service, our team is dedicated to ensuring that
						every aspect of your trip is seamless and stress-free.
					</span>
				</div>
			</div>
		</>
	)
}

export default PlanHero
