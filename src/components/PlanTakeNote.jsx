import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Others.scss'
import ToTakeList from './ToTakeList'
import airport from '../assets/airport.jpg'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[55rem] md:h-[50rem] lg:h-[45rem] opacity-40`,
	container_all: `flex justify-between items-center h-[55rem] md:h-[50rem] lg:h-[45rem] p-5 md:p-10 lg:p-20 mt-[1rem]`,
	container_window: `h-[50rem] md:h-[45rem] lg:h-[35vh] w-[90vw] md:w-[85vw] lg:w-[60vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	h1: `text-4xl font-bold py-2 flex justify-center text-center`,
	h3: `text-2xl font-bold py-2 flex justify-center text-sky-900 text-center`,
	// container_small: `flex flex-col py-2`,
	component_container: `flex justify-center gap-[5%] md:h-[30rem] md:h-[20rem] w-[100%] md:w-[100%] rounded-xl`,
}

const PlanTakeNote = () => {
	return (
		<>
			<div className=''>
				<img src={airport} alt='' className={style.background} />
				<div className={style.container_all}>
					<div className={style.container_window}>
						<h1 className={style.h1}>Already have something on your mind?</h1>
						<h3 className={style.h3}>Take a note before you lose it!</h3>
						<div className={style.component_container}>
							<ToTakeList />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PlanTakeNote
