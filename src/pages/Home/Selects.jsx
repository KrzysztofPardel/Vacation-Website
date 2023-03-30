import React from 'react'
import imageone from '../../assets/imageone.jpg'
import imagetwo from '../../assets/imagetwo.jpg'
import imagethree from '../../assets/imagethree.jpg'
import imagefour from '../../assets/imagefour.jpg'
import imagefive from '../../assets/imagefive.jpg'
import imagesix from '../../assets/imagesix.jpg'
import SelectsCard from '/src/pages/Home/SelectsCard'
const style={
	bg:`max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4`,
} 
const Selects = () => {
	return (
		<div className={style.bg}>
			<SelectsCard bg={imageone} text='Grande Antigua' />
			<SelectsCard bg={imagetwo} text='Turks and Caicos' />
			<SelectsCard bg={imagethree} text='The Bahamas' />
			<SelectsCard bg={imagefour} text='Barbados' />
			<SelectsCard bg={imagefive} text='Cayman Islands' />
			<SelectsCard bg={imagesix} text='Curacao' />
		</div>
	)
}

export default Selects
