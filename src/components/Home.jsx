import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import Destinations from './Destinations'
import Footer from './Footer'
import Hero from './Hero'
import Search from './Search'
import Selects from './Selects'
import Navbar from '/src/components/Navbar.jsx'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Destinations />
			<Search />
			<Selects />
			<Carousel />
			<Footer />
		</div>
	)
}

export default Home
