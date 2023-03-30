import React from 'react'
// import '../styles/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import AvailabilitiesHero from '/src/pages/Availabilities/AvailabilitiesHero.jsx'
import AvailabilitiesPlane from '/src/pages/Availabilities/AvailabilitiesPlane.jsx'
import AvailabilitiesStay from '/src/pages/Availabilities/AvailabilitiesStay'
import AvailabilitiesCarRental from '/src/pages/Availabilities/AvailabilitiesCarRental'
import AvailabilitiesPay from '/src/pages/Availabilities/AvailabilitiesPay'
import Footer from '/src/components/Footer.jsx'

const Availabilities = () => {
	return (
		<>
			<Navbar />
			<AvailabilitiesHero />
			<AvailabilitiesPlane />
			<AvailabilitiesStay />
			<AvailabilitiesCarRental />
			<AvailabilitiesPay />
			<Footer />
		</>
	)
}

export default Availabilities
