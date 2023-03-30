import React from 'react'
import accommodation from '../../assets/accommodation.jpg'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[55rem] md:h-[55rem] lg:h-[55rem] opacity-40`,
	container_all_: `flex justify-between items-center h-[55rem] md:h-[55rem] p-5 md:p-10 lg:p-20 mt-[1rem]`,
	container_left_: `h-[50rem] md:h-[55rem] lg:h-[65vh] w-[80vw] md:w-[75vw] lg:w-[60vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	header_left: `text-4xl font-bold py-2 flex justify-center text-orange-800`,
	container_small: `flex flex-col py-2`,
	container_top: `flex flex-col md:flex-row justify-evenly items-center w-[100%]`,
	housing_type: `flex justify-between md: mb-[1rem]`,
	housing_numberOf: `flex flex justify-between mb-[1rem]`,
	input_container: `flex flex-col lg:flex-row justify-start gap-[5%] w-[100%]`,
	label: `flex justify-center md:justify-start py-2 font-medium`,
	inputs: `border p-2 md:p-3 w-[15rem] md:w-[10rem] lg:w-[13rem] xl:w-[20rem] rounded-lg`,
	input_conteiner_price: `flex justify-center w-auto rounded-lg`,
	input_return: `border p-2 md:p-3 w-[10rem] md:w-[15rem] lg:w-[17rem] xl:w-[20rem] rounded-lg`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-900 w-[7em] p-2 my-2 text-white`,
	select: `border rounded-lg p-2 text-center ml-[0.5em]`,
	divforbutton: `flex justify-center mt-5`,
}
const AvailabilitiesStay = () => {
	return (
		<>
			<div className=''>
				<img src={accommodation} alt='/' className={style.background} />
				<div className={style.container_all_}>
					<div className={style.container_left_}>
						<h1 className={style.header_left}>Do you need a stay?</h1>
						<div className={style.container_top}>
							<div className={style.housing_type}>
								<div>
									<label>Type of place</label>
									<select className={style.select}>
										<option>Shared room</option>
										<option>Entire place</option>
										<option>Private room</option>
									</select>
								</div>
								<div>
									<label>Property type</label>
									<select className={style.select}>
										<option>House</option>
										<option>Apartment</option>
										<option>Guest house</option>
										<option>Hotel</option>
									</select>
								</div>
							</div>
							<div className={style.housing_numberOf}>
								<div>
									<label>Adults</label>
									<select className={style.select}>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8+</option>
									</select>
								</div>
								<div>
									<label>Kids</label>
									<select className={style.select}>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8+</option>
									</select>
								</div>
								<div>
									<label>Bedrooms</label>
									<select className={style.select}>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8+</option>
									</select>
								</div>
								<div>
									<label>Beds</label>
									<select className={style.select}>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8+</option>
									</select>
								</div>
							</div>
						</div>
						<form>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Min.price</label>
									<input className={style.inputs} type='number' placeholder='ex. 25' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>Max.price</label>
									<div className={style.input_conteiner_price}>
										<input className={style.inputs} type='number' placeholder='ex. 250' />
										<select className={style.select}>
											<option>USD</option>
											<option>EUR</option>
											<option>GBP</option>
											<option>AUD</option>
											<option>CAD</option>
											<option>CHF</option>
											<option>CNH</option>
											<option>PLN</option>
										</select>
									</div>
								</div>
							</div>
							<div className={style.input_container}>
								<div className={style.container_small}>
									<label className={style.label}>Depart</label>
									<input className={style.inputs} type='date' />
								</div>
								<div className={style.container_small}>
									<label className={style.label}>Return</label>
									<input className={style.input_return} type='date' />
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

export default AvailabilitiesStay
