import React from 'react'
import carrental from '../../assets/carrental.jpg'
const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[55rem] opacity-40`,
	container_all_: `flex w-[100vw] h-[55rem] justify-between items-center p-5 md:p-15 lg:p-20 mt-[1rem]`,
	container_left_: `h-[45rem] md:h-[35rem] lg:h-[65vh] w-[80vw] md:w-[75vw] lg:w-[60vw] mx-auto p-10 bg-slate-200/70 rounded-3xl`,
	header_left: `text-4xl font-bold py-2 flex justify-center text-grey-500`,
	container_small: `flex-col py-2`,
	container_top: `flex flex-col md:flex-row justify-evenly items-center`,
	input_container: `flex flex-col md:flex-row items-start justify-start md:justify-around`,
	label: `py-2 font-medium`,
	inputs: `flex block md:inline border p-2 md:p-3 w-[10rem] md:w-[15rem] lg:w-[17rem] xl:w-[20rem] rounded-lg`,
	input_age: `border p-3 w-[4em] h-[2.5em] rounded-md ml-[0.5em]`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-900 w-[7em] p-2 my-2 text-white`,
	select: `border rounded-lg p-2 text-center ml-[0.5em]`,
	divforbutton: `flex justify-center mt-5`,
}
const CarRental = () => {
	return (
		<>
			<div className=''>
				<img src={carrental} alt='' className={style.background} />
				<div className={style.container_all_}>
					<div className={style.container_left_}>
						<h1 className={style.header_left}>Need a car?</h1>
						<div className={style.container_top}>
							<div>
								<label className=''>Type</label>
								<select className={style.select}>
									<option>Microcar</option>
									<option>A-segment</option>
									<option>B-segment</option>
									<option>C-segment</option>
									<option>D-segment</option>
									<option>E-segment</option>
									<option>F-segment</option>
									<option>Minivan</option>
									<option>Luxury Vehicles</option>
									<option>Sports Vehicles</option>
									<option>SUVs</option>
									<option>Off-road Vehicles</option>
								</select>
							</div>
							<div>
								<input type='radio' className='' />
								<label className=''>Drop-off at different location</label>
							</div>
							<div>
								<label>Driver's age</label>
								<input type='number' className={style.input_age} />
							</div>
						</div>
						<form>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Pick up location</label>
									<input className={style.inputs} type='text' placeholder='New Town, Key West, Florida' />
								</div>
							</div>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Pick-up date</label>
									<input className={style.inputs} type='date' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>Time</label>
									<input className={style.inputs} type='time' />
								</div>
							</div>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Drop-off date</label>
									<input className={style.inputs} type='date' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>Time</label>
									<input className={style.inputs} type='time' />
								</div>
							</div>
						</form>
						<div className={style.divforbutton}>
							<button className={style.button}>Proceed</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CarRental
