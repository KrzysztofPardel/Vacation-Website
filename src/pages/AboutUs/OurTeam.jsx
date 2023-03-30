import React from 'react'
import Friends from '../../assets/Friends.jpg'

const style = {
	bg: `w-full h-auto relative mt-[1em]`,
	image_container: `w-[100vw]`,
	container: `flex flex-col items-center lg:flex-row-reverse lg:items-start w-[100%]`,
	image: `w-[100%] h-full md:object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	text_container: `w-[80vw] md:w-[60vw] lg:w-[30vw] h-auto flex flex-col justify-center text-center p-5 bg-white`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 mr-1 inline text-5xl`,
	description: `py-2 text-black text-justify text-xl`,
}
const OurTeam = () => {
	return (
		<>
			<div className={style.bg}>
				<div className={style.container}>
					<div className={style.image_container}>
						<img src={Friends} alt='friends sitting' className={style.image} />
					</div>
					<div className={style.text_container}>
						<h1 className={style.h1}>
							<p className={style.p}>Our </p> team
						</h1>
						<span className={style.description}>
							{' '}
							of experienced travel experts is dedicated to providing personalized and exceptional service to our
							clients. We understand that each traveler is unique, and we take the time to listen to your preferences
							and understand your needs to create a tailor-made itinerary that exceeds your expectations.
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default OurTeam
