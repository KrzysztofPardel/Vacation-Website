import React from 'react'
import '../scss/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import PlanHero from '/src/components/PlanHero.jsx'
// import PlanRecommendations from '/src/components/PlanRecommendations.jsx'
import Footer from '/src/components/Footer.jsx'
import PlanWhyWait from './PlanWhyWait'
import PlanQuestions from './PlanQuestions'
import PlanTakeNote from './PlanTakeNote'
import PlanWeather from './PlanWeather'

const Plan = () => {
	return (
		<>
			<Navbar />
			<PlanHero />
			<PlanWhyWait />
			<PlanQuestions />
			<PlanTakeNote />
			<PlanWeather />
			<Footer />
		</>
	)
}

export default Plan
