import React from 'react'
import aerialbeach from '../assets/aerialbeach.jpg'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4, TbCircleNumber5 } from 'react-icons/tb'
import arrow from '../assets/arrow.png'

// TbHexagonNumber1
const style = {
	container: `w-full h-screen relative`,
	image: `w-full h-full object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_all: `w-[90%] lg:w-[80%] h-[20rem] flex flex-col justify-center p-1 bg-slate-100/40 absolute left-0 right-0 ml-auto mr-auto text-center translate-y-2/4 rounded-full`,
	h1: `text-4xl md:text-6xl lg:text-6xl text-white`,
	h3: `mb-[1em] mt-[0.25em] underline decoration-indigo-500 text-white text-2xl md:text-3xl lg:text-4xl italic text-slate-100`,
	container_for_small: `flex justify-center items-center`,
	small_container: `flex flex-col justify-center items-center`,
	button_icon: `border text-3xl md:text-5xl h-[100%] md:h-[100%] lg:h-[100%] p-0 md:p-1 lg:p-4`,
	span: `font-bold text-white drop-shadow-2xl`,
	arrow_image: `hidden sm:block md:block w-[3rem] sm:w-[2rem] md:w-[3rem] lg:w-[6rem] -mb-0 md:-mb-10 lg:-mb-16`,
	// description: `py-2 text-black text-justify text-2xl`,
}
const AvailabilitiesHero = () => {
	return (
		<>
			<div className={style.container}>
				<img src={aerialbeach} alt='' className={style.image} />
				<div className={style.overlay}>
					<div className={style.container_all}>
						<h1 className={style.h1}>Only five steps away</h1>
						<h3 className={style.h3}>from your dream journey</h3>
						<div className={style.container_for_small}>
							<div className={style.small_container}>
								<button className={style.button_icon}>
									<TbCircleNumber1 />
								</button>
								<span className={style.span}>Check</span>
							</div>
							<img src={arrow} alt='arrow' className={style.arrow_image} />
							<div className={style.small_container}>
								<button className={style.button_icon}>
									<TbCircleNumber2 />
								</button>
								<span className={style.span}>Choose</span>
							</div>
							<img src={arrow} alt='arrow' className={style.arrow_image} />
							<div className={style.small_container}>
								<button className={style.button_icon}>
									<TbCircleNumber3 />
								</button>
								<span className={style.span}>Pay</span>
							</div>
							<img src={arrow} alt='arrow' className={style.arrow_image} />
							<div className={style.small_container}>
								<button className={style.button_icon}>
									<TbCircleNumber4 />
								</button>
								<span className={style.span}>Travel</span>
							</div>
							<img src={arrow} alt='arrow' className={style.arrow_image} />
							<div className={style.small_container}>
								<button className={style.button_icon}>
									<TbCircleNumber5 />
								</button>
								<span className={style.span}>Enjoy</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AvailabilitiesHero
