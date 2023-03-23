import React from 'react'
import '../scss/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import AvailabilitiesHero from '/src/components/AvailabilitiesHero.jsx'
import Footer from '/src/components/Footer.jsx'

const Availabilities = () => {
	return (
		<>
			<Navbar />
			<AvailabilitiesHero />

			<Footer />
		</>
	)
}

export default Availabilities
