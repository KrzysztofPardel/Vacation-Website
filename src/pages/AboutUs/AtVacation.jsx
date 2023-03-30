import React from 'react'
import manandgiraffe from '../../assets/manandgiraffe.jpg'

const style = {
	bg: `w-full h-auto relative`,
	container: `flex flex-col items-center lg:flex-row-reverse`,
	image_container: `w-[100vw] lg:w-[70vw]`,
	image: `w-[100%] h-full lg:object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	text_container: `w-[80vw] md:w-[60vw] lg:w-[30vw] h-auto flex flex-col justify-center text-center p-5 bg-white`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 mr-1 text-5xl`,
	description: `py-2 text-black text-justify text-xl`,
}
const AtVacation = () => {
	return (
		<>
			<div className={style.bg}>
				<div className={style.image_container}>
					<div className={style.container_image}>
						<img src={manandgiraffe} alt='friends sitting' className={style.image} />
					</div>
					<div className={style.text_container}>
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

export default AtVacation
