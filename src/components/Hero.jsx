import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import sunset from '../assets/sunset.mp4'
const style = {
	container: `w-[100%] h-screen relative`,
	video: `w-[100%] h-[100%] object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/30`,
	container_center: `absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4`,
	h1: `py-1`,
	h3: `py-2`,
	form: `flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90`,
	input: `bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none`,
}
const Hero = () => {
	return (
		<div className={style.container}>
			<video className={style.video} src={sunset} autoPlay loop muted />
			<div className={style.overlay}></div>
			<div className={style.container_center}>
				<h1 className={style.h1}>Why not allow yourself some vacation?</h1>
				<h3 className={style.h3}>Find your dream destination below</h3>
				<form className={style.form}>
					<div className=''>
						<input type='text' className={style.input} placeholder='Search for destinations ' />
					</div>
					<div className=''>
						<button>
							<AiOutlineSearch size={20} style={{ color: 'white' }} className='icon' />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Hero
