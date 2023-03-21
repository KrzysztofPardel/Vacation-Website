import React from 'react'
import { IoCallSharp, IoCafe, IoEarthSharp } from 'react-icons/io5'
const style = {
	container: `max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16`,
	left_container: `lg:col-span-2 flex flex-col justify-evenly`,
	right_container: `border text-center h-auto`,
	long_p: `py-4 text-justify`,
	services_container: `grid sm:grid-cols-2 gap-8 py-4`,
	services_container_icons: `flex flex-col lg:flex-row items-center text-center`,
	services_container_text: `flex flex-col justify-center items-center`,
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nobis, illo beatae eius provident non
						consequuntur dolores ad. Illum nisi magni aspernatur rem amet vitae, tempora, cupiditate ex delectus totam
						ad sed minima sint aliquid ducimus esse! Laborum quia cum id blanditiis, a quis labore architecto maiores
						natus, deleniti, nemo amet tenetur cumque officia reiciendis repellendus. Fugit cupiditate voluptate
						quibusdam eaque, ut, beatae amet magnam, quasi vitae voluptatum sint quos nisi? Sequi doloremque tenetur
						reiciendis id, nulla perferendis incidunt. Consequuntur ipsam nesciunt eaque nisi distinctio inventore at
						laudantium vel, fugiat vero tenetur? Animi error ab expedita commodi a odio nisi.
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
