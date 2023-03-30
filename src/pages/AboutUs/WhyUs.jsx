import React from 'react'
// import '../styles/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import WhyUsHero from '/src/pages/AboutUs/WhyUsHero.jsx'
import WhyUsOurTeam from '/src/pages/AboutUs/WhyUsOurTeam.jsx'
import WhyUsWhether from '/src/pages/AboutUs/WhyUsWhether.jsx'
import WhyUsAtVacation from '/src/pages/AboutUs/WhyUsAtVacation.jsx'
import WhyUsJoinUs from '/src/pages/AboutUs/WhyUsJoinUs.jsx'
import Footer from '/src/components/Footer.jsx'

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
