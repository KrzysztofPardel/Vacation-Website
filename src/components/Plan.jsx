import React from 'react'
import '../scss/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import PlanHero from '/src/components/PlanHero.jsx'
import PlanRecommendations from '/src/components/PlanRecommendations.jsx'
import Footer from '/src/components/Footer.jsx'

const Plan = () => {
	return (
		<>
			<Navbar />
			<PlanHero />
			<PlanRecommendations />
			<Footer />
		</>
	)
}

export default Plan
