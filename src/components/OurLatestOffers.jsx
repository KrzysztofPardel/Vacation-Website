import React, { useState, useEffect } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import SelectsOffer from './SelectsOffer'
import imageone from '../assets/imageone.jpg'
import imagetwo from '../assets/imagetwo.jpg'
import imagethree from '../assets/imagethree.jpg'
import imagefour from '../assets/imagefour.jpg'
import imagefive from '../assets/imagefive.jpg'
import imagesix from '../assets/imagesix.jpg'
// import { images } from './assets'

const sliderData = [
	{
		component: <SelectsOffer bg={imageone} text='Grande Antigua' />,
	},
	{
		component: <SelectsOffer bg={imagethree} text='The Bahamas' />,
	},
	{
		component: <SelectsOffer bg={imagefive} text='Cayman Islands' />,
	},
]

const OurLatestOffers = () => {
	const [slide, setSlide] = useState(0)

	const prevSlide = () => {
		setSlide(slide === 0 ? sliderData.length - 1 : slide - 1)
	}
	//if index=0, set the element to the last, otherwise decrement it by 1
	const nextSlide = () => {
		setSlide(slide === sliderData.length - 1 ? 0 : slide + 1)
	}
	//if index=last element of the array, set the element to 0, otherwise increment it by 1

	return (
		<>
			<div className='w-full h-full relative flex justify-center items-center'>
				<BsArrowLeftSquareFill
					onClick={prevSlide}
					className='absolute top-[85%] -left-12 text-white cursor-pointer  bg-[#709dff] text-lg'
					loop
				/>
				<BsArrowRightSquareFill
					onClick={nextSlide}
					className='absolute top-[85%] -right-12 text-white cursor-pointer  bg-[#709dff] text-lg'
					loop
				/>
				{sliderData.map((item, index) => (
					<div
						key={index}
						className={
							index == slide ? 'opacity-100 transition-duration: 550ms' : 'opacity-0 transition-duration: 550ms'
						}>
						{index === slide && <div className='rounded-md shadow-sm bg-contain bg-no-repeat'>{item.component}</div>}
					</div>
				))}
			</div>
		</>
	)
}
// const [count, setCount] = useState(0)
// const [mouseOver, setMouseOver] = useState('')

// useEffect(() => {
// 	if (mouseOver) {
// 		const timer = setInterval(() => {
// 			setCount(prevCount => (prevCount + 1) % images.length)
// 		}, 1000)
// 		return () => clearInterval(timer)
// 	} else {
// 		setCount(0)
// 	}
// }, [mouseOver])

// return (
// 	<div className=''>
// 		<div className='' onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
// 			<img src={images[count].source} alt={images.name} />
// 			<p>count is {count}</p>
// 		</div>
// 	</div>
// )
export default OurLatestOffers
