import React from 'react'
import Navbar from '/src/components/Navbar.jsx'
import Hero from '/src/pages/AboutUs/Hero.jsx'
import OurTeam from '/src/pages/AboutUs/OurTeam.jsx'
import Whether from '/src/pages/AboutUs/Whether.jsx'
import AtVacation from '/src/pages/AboutUs/AtVacation.jsx'
import JoinUs from '/src/pages/AboutUs/JoinUs.jsx'
import Footer from '/src/components/Footer.jsx'

const WhyUs = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<OurTeam />
			<Whether />
			<AtVacation />
			<JoinUs />
			<Footer />
		</>
	)
}

export default WhyUs
