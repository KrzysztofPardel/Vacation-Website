import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Others.scss'
import OurLatestOffers from './OurLatestOffers'
import questions from '../assets/questions.jpg'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[105rem] md:h-[80rem] lg:h-[95rem] opacity-40`,
	container_all: `flex justify-between items-center h-[105rem] md:h-[80rem] lg:h-[95rem] p-5 md:p-10 lg:p-20 mt-[1rem]`,
	container_window: ` h-[100rem] md:h-[75rem] lg:h-[75vh] w-[80vw] md:w-[75vw] lg:w-[60vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	header: `text-4xl font-bold py-2 flex justify-center text-sky-800`,
	container_small: `flex flex-col py-2`,
	container_top: `flex flex-col items-start gap-[5%] md:flex-row md:justify-evenly md:items-center h-[65rem]`,
	li_question: `font-semibold text-lg md:text-xl`,
	pages_link: `ml-[3rem] text-base inline underline hover:no-underline text-slate-500 hover:text-sky-800`,
}

const PlanQuestions = () => {
	return (
		<>
			<div className=''>
				<img src={questions} alt='' className={style.background} />
				<div className={style.container_all}>
					<div className={style.container_window}>
						<h1 className={style.header}>Questions to think through:</h1>
						<div className={style.container_top}>
							<ol className=''>
								<li className={style.li_question}>1. Where do you want to go? </li>

								<li className={style.li_question}>2. When do you want to go?</li>

								<li className={style.li_question}>3. How long do you want to stay?</li>

								<li className={style.li_question}>4. What is your budget for the trip?</li>
								<li className={style.li_question}>5. What activities do you want to do while on the trip?</li>
								<li className={style.li_question}>6. What type of accommodation do you prefer?</li>
								<li className={style.li_question}>7. What type of transportation do you plan to use?</li>
								<li className={style.li_question}>8. What are the visa and entry requirements for the destination?</li>
								<li className={style.li_question}>
									9. What is the weather like in the destination during the time of travel?
								</li>
								<li className={style.li_question}>10. What is the local culture and customs of the destination?</li>
								<li className={style.li_question}>11. What is the exchange rate and currency of the destination?</li>
								<li className={style.li_question}>
									12. What are the potential health risks of the destination and what vaccinations do you need?
								</li>
								<li className={style.li_question}>13. Are there any language barriers in the destination?</li>
								<li className={style.li_question}>14. What are the emergency contact numbers for the destination?</li>
								<li className={style.li_question}>
									15. What are the rules and regulations for traveling during the COVID-19 pandemic?
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PlanQuestions
