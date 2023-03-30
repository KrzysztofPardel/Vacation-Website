import React, { useState } from 'react'
import axios from 'axios'
import '/src/styles/WeatherApp.scss'

const WeatherApp = () => {
	const [data, setData] = useState({})
	const [location, setLocation] = useState('')

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=eb23bd7c689001f22cfa2d4a4243a2cd`
	//this function serves the purpose of finding the right request through input value
	const searchLocation = event => {
		if (event.key === 'Enter') {
			//this allows for passing the data to the state with Enter click
			axios.get(url).then(response => {
				setData(response.data)
				console.log(response.data)
			})
			setLocation('')
		}
	}

	return (
		<>
			<div className='weatherapp'>
				<div className='search'>
					<input
						value={location}
						onChange={event => setLocation(event.target.value)}
						onKeyDown={searchLocation}
						placeholder='LOCATION '
						type='text'
					/>
				</div>
				<div className='container'>
					<div className='top'>
						<div className='location'>
							<p>{data.name}</p>
						</div>
						<div className='temp'>
							{data.main ? <h1 className='header'>{data.main.temp.toFixed()}°C</h1> : null}
							{/* <h1>{data.main.temp}</h1> */}
						</div>
						<div className='description'>
							{data.weather ? <p>{data.weather[0].main}</p> : null}
							{/* <p>Clouds</p> */}
						</div>
					</div>

					{data.name != undefined && (
						<div className='bottom'>
							<div className='feels'>
								{data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
								{/* <p className='bold'>65°F</p> */}
								<p className='paragraph'>Feels Like</p>
							</div>
							<div className='humidity'>
								{data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
								{/* <p className='bold'>20%</p> */}
								<p className='paragraph'>Humidity</p>
							</div>
							<div className='wind'>
								{data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
								{/* <p className='bold'>12 MPH</p> */}
								<p className='paragraph'>Wind Speed</p>
							</div>
						</div>
					)}
				</div>
				{/* <div className='btn-container_bottom'>
					<Link to='/' className='btn-go_to_login'>
						Login
					</Link>
					<Link to='/expanses' className='btn-go_to_expanses'>
						Expanses
					</Link>
					<Link to='/take' className='btn-go_to_take'>
						Take
					</Link>
				</div> */}
			</div>
		</>
	)
}

export default WeatherApp
