import React from 'react'
// import '../styles/index.scss'
import Navbar from '/src/components/Navbar.jsx'
import Hero from '/src/pages/Availabilities/Hero.jsx'
import Flight from '/src/pages/Availabilities/Flight.jsx'
import Stay from '/src/pages/Availabilities/Stay'
import CarRental from '/src/pages/Availabilities/CarRental'
import Pay from '/src/pages/Availabilities/Pay'
import Footer from '/src/components/Footer.jsx'

const Availabilities = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Flight />
			<Stay />
			<CarRental />
			<Pay />
			<Footer />
		</>
	)
}

export default Availabilities
