import React from 'react'
import '../scss/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import AvailabilitiesHero from '/src/components/AvailabilitiesHero.jsx'
import AvailabilitiesPlane from '/src/components/AvailabilitiesPlane.jsx'
import Footer from '/src/components/Footer.jsx'
import AvailabilitiesStay from './AvailabilitiesStay'
import AvailabilitiesCarRental from './AvailabilitiesCarRental'

const Availabilities = () => {
	return (
		<>
			<Navbar />
			<AvailabilitiesHero />
			<AvailabilitiesPlane />
			<AvailabilitiesStay />
			<AvailabilitiesCarRental />
			<Footer />
		</>
	)
}

export default Availabilities
