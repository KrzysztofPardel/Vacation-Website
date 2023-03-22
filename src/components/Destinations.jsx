import React from 'react'
import imageone from '../assets/imageone.jpg'
import imagetwo from '../assets/imagetwo.jpg'
import imagethree from '../assets/imagethree.jpg'
import imagefour from '../assets/imagefour.jpg'
import imagefive from '../assets/imagefive.jpg'
const style = {
	container: `max-w-[1240px] mx-auto py-16 px-4 text-center`,
	img_container: `grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4`,
	img_bigger: `w-full h-full object-cover col-span-2 md:col-span-3 row-span-2`,
	img_regular: `w-full h-full object-cover`,
}

const Destinations = () => {
	return (
		<div className={style.container}>
			<h1>Unexpected islands</h1>
			<p className='py-4'>See & Do</p>
			<div className={style.img_container}>
				<img className={style.img_bigger} src={imageone} alt='/' />
				<img className={style.img_regular} src={imagetwo} alt='/' />
				<img className={style.img_regular} src={imagethree} alt='/' />
				<img className={style.img_regular} src={imagefour} alt='/' />
				<img className={style.img_regular} src={imagefive} alt='/' />
			</div>
		</div>
	)
}

export default Destinations
