import React from 'react'
import airport from '../../assets/airport.jpg'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[60rem] md:h-[55rem] lg:h-[55rem] opacity-40`,
	container_all_: `flex justify-between items-center h-[60rem] md:h-[55rem] lg:h-[55rem] p-5 md:p-10 lg:p-20 mt-[1rem]`,
	container_left_: ` h-[50rem] md:h-[40rem] lg:h-[65vh] w-[80vw] md:w-[75vw] lg:w-[60vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	header_left: `text-4xl font-bold py-2 flex justify-center text-sky-800`,
	container_small: `flex flex-col py-2`,
	container_top: `flex flex-col items-start gap-[5%] md:flex-row md:justify-evenly md:items-center h-[10rem]`,
	container_select: `flex flex-col items-start gap-[5%] md:flex-row md:justify-evenly md:items-center h-[10rem]`,
	input_container: `flex flex-col md:flex-row items-start justify-start md:justify-around`,
	label: `py-2 font-medium`,
	inputs: `flex block md:inline border p-2 md:p-3 w-[10rem] md:w-[15rem] lg:w-[17rem] xl:w-[20rem] rounded-lg`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-900 w-[7em] p-2 my-2 text-white`,
	select: `border rounded-lg p-2 text-center ml-[0.5em]`,
	divforbutton: `flex justify-center mt-5`,
}

const Flight = () => {
	return (
		<>
			<div className=''>
				<img src={airport} alt='' className={style.background} />
				<div className={style.container_all_}>
					<div className={style.container_left_}>
						<h1 className={style.header_left}>Do you need a flight?</h1>
						<div className={style.container_top}>
							<div>
								<input type='radio' className='' />
								<span className=''>Direct flights</span>
							</div>
							<div className={style.container_select}>
								<div>
									<label>Trip</label>
									<select className={style.select}>
										<option>One way</option>
										<option>Round Trip</option>
									</select>
								</div>
								<div>
									<label>Class</label>
									<select className={style.select}>
										<option>Economy</option>
										<option>Premium Economy</option>
										<option>Business</option>
										<option>First Class</option>
									</select>
								</div>
							</div>
						</div>
						<form>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>From</label>
									<input className={style.inputs} type='string' placeholder='Lisbon, Portugal' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>To</label>
									<input className={style.inputs} type='string' placeholder='Key West, Florida' />
								</div>
							</div>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Depart</label>
									<input className={style.inputs} type='date' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>Return</label>
									<input className={style.inputs} type='date' />
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

export default Flight
