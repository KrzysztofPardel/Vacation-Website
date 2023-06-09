import React from 'react'
import hydroplane from '../../assets/hydroplane.jpg'
import indianwoman from '../../assets/indianwoman.jpg'
import tent from '../../assets/tent.jpg'
import tropicalwooden from '../../assets/tropicalwooden.jpg'
import twoparrots from '../../assets/twoparrots.jpg'
const style = {
	bg: `w-full h-auto relative`,
	container: `flex flex-col items-center lg:flex-row`,
	image_container: `w-[100vw] lg:w-[70vw] grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4`,
	img_bigger: `w-full h-full object-cover col-span-2 md:col-span-3 row-span-2`,
	img_regular: `w-full h-full object-cover`,
	text_container: `w-[80vw] md:w-[60vw] lg:w-[30vw] h-auto flex flex-col justify-center text-center p-5 bg-white`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 mr-1 text-5xl`,
	description: `py-2 text-black text-justify text-xl`,
}
const Whether = () => {
	return (
		<>
			<div className={style.bg}>
				<div className={style.container}>
					<div className={style.image_container}>
						<img className={style.img_bigger} src={tent} tent alt='/' />
						<img className={style.img_regular} src={indianwoman} alt='/' />
						<img className={style.img_regular} src={hydroplane} alt='/' />
						<img className={style.img_regular} src={tropicalwooden} alt='/' />
						<img className={style.img_regular} src={twoparrots} alt='/' />
					</div>
					<div className={style.text_container}>
						<h1 className={style.h1}>
							Whether you're <p className={style.p}>looking for </p>
						</h1>
						<span className={style.description}>
							{' '}
							an exotic adventure, a relaxing beach getaway, a romantic honeymoon, a family-friendly vacation, or a
							cultural immersion, we've got you covered. With our extensive network of trusted partners and suppliers,
							we can offer you exclusive access to the world's most iconic destinations, luxury accommodations, and
							authentic experiences.
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Whether
