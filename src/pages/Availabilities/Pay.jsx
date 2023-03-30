import React, { useState } from 'react'
import payment from '../../assets/payment.jpg'
import { FaCcMastercard, FaCcVisa, FaCcJcb } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

const style = {
	background: `object-cover -z-10 absolute w-[100vw] h-[60rem] md:h-[55rem] opacity-40 `,
	container_all_: `flex w-[100vw] h-[60rem] md:h-[55rem] justify-between items-center p-5 md:p-15 lg:p-20 mt-[1rem]`,
	container_window: `h-[90%] -md:h-[50rem] lg:h-[35rem] w-[20rem] sm:w-[25rem] md:w-[35rem] lg:w-[70rem] xl:w-[60rem] flex flex-col lg:flex-row justify-center items-center mx-auto p-10 bg-slate-800/70 rounded-3xl`,
	container_leftSide: `h-[10-rem] md:h-[15-rem] flex flex-col items-center`,
	header_h1: `font-thin py-1 text-white`,
	subheader_h3: `text-white `,
	container_booked: `h-[10rem] md:h-[10rem] lg:h-[25rem] w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[20rem] bg-white rounded-lg`,
	line: `hidden lg:block h-[28rem] w-[0.1rem] bg-black m-[1rem]`,
	container_rightSide: `flex flex-col items-center w-[100%]`,
	header_left: `text-4xl font-bold py-2 flex justify-center text-white`,
	container_icons: `flex justify-center gap-[5%] text-white w-[100%]`,
	container_small: `flex justify-center flex-col py-1 w-[15rem]`,
	container_top: `flex justify-evenly items-center`,
	input_container: `flex flex-col md:flex-row justify-center lg:justify-start gap-[1%] md:gap-[5%]`,
	label: `py-2 font-medium text-white`,
	inputs: `border p-2 w-[15rem] md:w-[12rem] md:w-[15rem] rounded-lg`,
	input_cardNUmber: `p-2 flex w-[90%] rounded-lg`,
	input_small: `border p-2 w-[5rem] rounded-lg`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-900 w-[7rem] p-2 my-2 text-white`,
	button_icon: `border text-5xl md:text-6xl h-[100%] md:h-[100%] lg:h-[100%] w-[100%] md:w-[100%] lg:w-[100%] p-1 md:p-2 lg:p-2 xl:p-3`,
	divforbutton: `flex justify-center mt-[1rem] md:mt-[5rem]`,
}
const Pay = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<>
			<div className=''>
				<img src={payment} alt='/' className={style.background} />
				<div className={style.container_all_}>
					<div className={style.container_window}>
						<div className={style.container_leftSide}>
							<h1 className={style.header_h1}>As of now</h1>
							<h3 className={style.subheader_h3}>you are booking</h3>
							<div className={style.container_booked}></div>
						</div>
						<div className={style.line}></div>
						<div className={style.container_rightSide}>
							<h1 className={style.header_left}>Invoice</h1>
							<div className={style.container_icons}>
								<button className={style.button_icon}>
									<FaCcMastercard />
								</button>
								<button className={style.button_icon}>
									<FaCcVisa />
								</button>
								<button className={style.button_icon}>
									<FaCcJcb />
								</button>
								<button className={style.button_icon}>
									<SiAmericanexpress />
								</button>
							</div>
							<form>
								<div className={style.input_container}>
									<div className={style.container_small}>
										<label className={style.label}>Card number</label>
										<input className={style.inputs} type='number' placeholder='1234 5678 9012 3456' />
									</div>
									<div className={style.container_small}>
										<label className={style.label}>Name on the card</label>
										<input className={style.inputs} type='text' placeholder='ex. John Smith' />
									</div>
								</div>

								<div className={style.input_container}>
									<div className={style.container_small}>
										<label className={style.label}>Expiry date</label>
										<input className={style.input_small} type='number' placeholder='ex.07/27' />
									</div>
									<div className={style.container_small}>
										<label className={style.label}>CVC</label>
										<input className={style.input_small} type='number' placeholder='ex. 565' />
									</div>
								</div>
							</form>
							<div className={style.divforbutton}>
								<button className={style.button}>Proceed</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Pay
