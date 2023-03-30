import React from 'react'
import recommendations from '../../assets/recommendations.jpg'

const style = {
	container: `w-full h-auto relative mt-[1em]`,
	container_image: `w-[100vw]`,
	container_all: `flex flex-col items-center lg:flex-row-reverse lg:items-start w-[100%]`,
	image: `w-[100%] h-full md:object-cover`,
	overlay: `absolute w-full h-full top-0 left-0 bg-gray-900/25`,
	container_small: `w-[80vw] md:w-[60vw] lg:w-[30vw] h-auto flex flex-col justify-center text-center p-5 bg-white`,
	h1: `py-1 text-black`,
	p: `italic text-slate-400 drop-shadow-2xl contrast-100 mr-1 inline text-4xl`,
	description: `py-2 text-black text-justify text-xl`,
}
const PlanWhyWait = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.container_all}>
					<div className={style.container_image}>
						<img src={recommendations} alt='friends sitting' className={style.image} />
					</div>
					<div className={style.container_small}>
						<h1 className={style.h1}>
							So<p className={style.p}> why </p> wait?
						</h1>
						<span className={style.description}> Start planning your dream vacation with us today.</span>
						<span className={style.description}>
							{' '}
							<b className=''>First of all</b>, think about everything you need to plan. We have prepared a detailed
							list of questions that will help you think though it all.{' '}
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default PlanWhyWait
