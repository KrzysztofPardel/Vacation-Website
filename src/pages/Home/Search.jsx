import React from 'react'
import { IoCallSharp, IoCafe, IoEarthSharp } from 'react-icons/io5'
const style = {
	container: `max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16`,
	left_container: `lg:col-span-2 flex flex-col justify-evenly`,
	right_container: `border text-center h-auto`,
	long_p: `py-4 text-justify text-xl`,
	services_container: `grid sm:grid-cols-2 gap-8 py-4`,
	services_container_icons: `flex flex-col lg:flex-row items-center text-center`,
	services_container_text: `flex flex-col justify-center items-center text-xl`,
	button_BookNow: `bg-gray-800 text-gray-200 py-2`,
	form: `w-full`,
	destinations_container: `flex flex-col my-2`,
	destinations_select: `border rounded-md p-2`,
	div_checkInOut: `flex flex-col my-4`,
	input_checkInOut: `border rounded-md p-2`,
	button_check: `flex justify-center items-center w-full my-4 cursor-pointer`,
	o: ``,
}
const Search = () => {
	return (
		<div className={style.container}>
			<div className={style.left_container}>
				<div>
					<h2>Vacations for couples, families and groups.</h2>
					<h3>Choose your discount!</h3>
					<p className={style.long_p}>
						Escape to a tropical paradise with Vacation, your ultimate travel companion! Indulge in the beauty of an
						island getaway with the sound of the waves and the warm sun on your skin. Our short vacation packages are
						tailored to your preferences and budget, offering a variety of activities, such as snorkeling, surfing, and
						relaxing spa treatments. Explore the local culture and cuisine, while unwinding in a luxurious resort or a
						cozy beach bungalow. Let Vacation take care of the details, while you immerse yourself in an unforgettable
						island experience. Book now and make memories that will last a lifetime!
					</p>
				</div>
				<div className={style.services_container}>
					<div className={style.services_container_icons}>
						<button>
							<IoCallSharp size={50} />
						</button>
						<div className={style.services_container_text}>
							<h3 className='py-2'>WE LEAD IN:</h3>
							<p className='p-2'>Availability to the customer</p>
						</div>
					</div>
					<div className={style.services_container_icons}>
						<button>
							<IoEarthSharp size={50} />
						</button>
						<div className={style.services_container_text}>
							<h3 className='py-2'>WE LEAD IN:</h3>
							<p className='p-2'>Worldwide connections</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.right_container}>
				<p className='pt-2'>GET AN ADDITIONAL 25% OFF</p>
				<p className='py-4'>24 HOURS LEFT</p>
				<p className={style.button_BookNow}>BOOK NOW AND SAVE</p>

				<form className={style.form}>
					<div className={style.destinations_container}>
						<label>Destination</label>
						<select className={style.destinations_select}>
							<option>Grande Antigua</option>
							<option>Turks and Caicos</option>
							<option>The Bahamas</option>
							<option>Barbados</option>
							<option>Cayman Islands</option>
							<option>Curacao</option>
						</select>
					</div>
					<div className={style.div_checkInOut}>
						<label>Check-In</label>
						<input className={style.input_checkInOut} type='date' />
					</div>
					<div className={style.div_checkInOut}>
						<label>Check-Out</label>
						<input className={style.input_checkInOut} type='date' />
					</div>
					<button className={style.button_check}>
						Check Availabilities <IoCafe size={20} style={{ marginLeft: '0.5em' }} />
					</button>
				</form>
			</div>
		</div>
	)
}

export default Search
