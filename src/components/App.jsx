import { useState } from 'react'
import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signin from '/src/components/Signin.jsx'
import Signup from '/src/components/Signup.jsx'
import ProtectedRoute from '/src/components/ProtectedRoute.jsx'
import Home from '/src/components/Home.jsx'
import WhyUs from '/src/components/WhyUs.jsx'
import TakeList from '/src/components/ToTakeList.jsx'
import WeatherApp from '/src/components/WeatherApp.jsx'
import { AuthContextProvider } from '../context/AuthContext'
import Availabilities from './Availabilities'
const App = () => {
	return (
		<div>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/home'
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					{/* <Route path='/home' element={<Home />} /> */}
					<Route path='/home/whyus' element={<WhyUs />} />
					<Route path='/home/availabilities' element={<Availabilities />} />
					<Route path='/home/takelist' element={<TakeList />} />
					<Route path='/home/weatherapp' element={<WeatherApp />} />
				</Routes>
			</AuthContextProvider>
		</div>
	)
}
export default App
