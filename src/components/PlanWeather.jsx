import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Others.scss'
import WeatherApp from './WeatherApp'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[55rem] md:h-[50rem] lg:h-[45rem] opacity-40`,
	container_all: ``,
	container_window: ` h-[50rem] md:h-[45rem] lg:h-[35vh] w-[90vw] md:w-[85vw] lg:w-[60vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	h1: `text-4xl font-bold py-2 flex justify-center text-center`,
	h3: `text-2xl font-bold py-2 flex justify-center text-sky-900 text-center`,
	container_small: `flex flex-col py-2`,
	component_container: `flex flex-col items-start gap-[5%] md:flex-row md:justify-evenly md:items-start md:h-[30rem] md:h-[20rem] w-[15rem] rounded-xl`,
}

const PlanTakeNote = () => {
	return (
		<>
			<div className=''>
				<div className={style.container_all}>
					<h1 className={style.h1}>Want to know the weather at your destination?</h1>
					<WeatherApp />
				</div>
			</div>
		</>
	)
}

export default PlanTakeNote
