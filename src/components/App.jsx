import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signin from '/src/pages/Authorization/Signin.jsx'
import Signup from '/src/pages/Authorization/Signup.jsx'
import ProtectedRoute from '/src/pages/Home/ProtectedRoute.jsx'
import Home from '/src/pages/Home/Home.jsx'
import WhyUs from '/src/pages/AboutUs/AboutUs.jsx'
import TakeList from '/src/components/ToTakeList.jsx'
import WeatherApp from '/src/components/WeatherApp.jsx'
import { AuthContextProvider } from '../context/AuthContext'
import Availabilities from '../pages/Availabilities/Availabilities'
import Plan from '../pages/Plan/Plan.jsx'
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
					<Route path='/home/whyus' element={<WhyUs />} />
					<Route path='/home/availabilities' element={<Availabilities />} />
					<Route path='/home/plan' element={<Plan />} />
					<Route path='/home/takelist' element={<TakeList />} />
					<Route path='/home/weatherapp' element={<WeatherApp />} />
				</Routes>
			</AuthContextProvider>
		</div>
	)
}
export default App
