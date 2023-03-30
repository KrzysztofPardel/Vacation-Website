import React from 'react'
// import '../styles/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import PlanHero from '/src/pages/Plan/PlanHero.jsx'
import PlanWhyWait from '/src/pages/Plan/PlanWhyWait'
import PlanQuestions from '/src/pages/Plan/PlanQuestions'
import PlanTakeNote from '/src/pages/Plan/PlanTakeNote'
import PlanWeather from '/src/pages/Plan/PlanWeather'
import Footer from '/src/components/Footer.jsx'


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
