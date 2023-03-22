import React from 'react'
import '../scss/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import WhyUsHero from '/src/components/WhyUsHero.jsx'
import WhyUsOurTeam from '/src/components/WhyUsOurTeam.jsx'
import WhyUsWhether from '/src/components/WhyUsWhether.jsx'
import Footer from '/src/components/Footer.jsx'
import WhyUsJoinUs from './WhyUsJoinUs'
import WhyUsAtVacation from './WhyUsAtVacation'

const WhyUs = () => {
	return (
		<>
			<Navbar />
			<WhyUsHero />
			<WhyUsOurTeam />
			<WhyUsWhether />
			<WhyUsAtVacation />
			<WhyUsJoinUs />
			<Footer />
		</>
	)
}

export default WhyUs
