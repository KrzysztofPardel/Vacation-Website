import React, { useState, useEffect } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import ToTakeList from './ToTakeList'
const style={
	
}
const sliderData = [
	{
		url: 'https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600',
	},
	{
		url: 'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/4577423/pexels-photo-4577423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/4514032/pexels-photo-4514032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/67566/palm-tree-palm-ocean-summer-67566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600',
	},
	{
		url: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/3369569/pexels-photo-3369569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/2105912/pexels-photo-2105912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		url: 'https://images.pexels.com/photos/3802414/pexels-photo-3802414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
]

const Carousel = () => {
	const [slide, setSlide] = useState(0)

	const prevSlide = () => {
		setSlide(slide === length - 1 ? 0 : slide + 1)
	}
	const nextSlide = () => {
		setSlide(slide === 0 ? length - 1 : slide - 1)
	}

	return (
		<>
			<div className='max-w-[1240px] h-[10] mx-auto py-16 relative flex justify-center items-center'>
				<BsArrowLeftSquareFill
					onClick={prevSlide}
					className='absolute top-[50%] text-3xl text-white cursor-pointer left-20 bg-[#709dff]'
					loop
				/>
				<BsArrowRightSquareFill
					onClick={nextSlide}
					className='absolute top-[50%] text-3xl text-white cursor-pointer right-20 bg-[#709dff]'
					loop
				/>
				{sliderData.map((item, index) => (
					<div
						key={index}
						className={
							index == slide ? 'opacity-100 transition-duration: 550ms' : 'opacity-0 transition-duration: 550ms'
						}>
						{index === slide && <img className='w-full rounded-md shadow-2xl' src={item.url} alt='/' />}
					</div>
				))}
			</div>
		</>
	)
}

export default Carousel
