import React, { useState } from 'react'
import payment from '../assets/payment.jpg'
import { FaCcMastercard, FaCcVisa, FaCcJcb } from 'react-icons/fa'
import { SiAmericanexpress } from 'react-icons/si'

const style = {
	background: `-z-10 absolute w-[100vw] h-[100vh] opacity-40 mt-[3em] `,
	container_all_: `flex w-[100vw] h-[100vh] justify-between items-center p-20`,
	container_window: `h-[35rem] w-[50rem] flex justify-center mx-auto m-10 -mb-[0.5rem] p-10 bg-slate-800/70 rounded-3xl`,
	container_leftSide: `flex flex-col items-center`,
	header_h1: `font-thin py-1 text-white`,
	subheader_h3: `text-white `,
	container_booked: `h-[20rem] w-[15rem] bg-white rounded-lg`,
	line: `h-[28rem] w-[0.1rem] bg-black m-[1rem]`,
	container_rightSide: `w-[60%]`,
	header_left: `text-4xl font-bold py-2 flex justify-center text-white`,
	icons_container: `flex justify-between text-white`,
	container_small: `flex justify-center flex-col py-1 w-[15rem]`,
	container_top: `flex justify-evenly items-center`,
	input_container: `flex justify-start gap-[5%]`,
	label: `py-2 font-medium text-white`,
	inputs: `border p-2 w-[12rem] rounded-lg`,
	input_cardNUmber: `p-2 flex w-[90%] rounded-lg`,
	input_conteiner_price: `flex w-[90%] rounded-lg`,
	input_small: `border p-2 w-[5rem] rounded-lg `,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-900 w-[7rem] p-2 my-2 text-white`,
	divforbutton: `flex justify-center mt-[5rem]`,
}
const AvailabilitiesPay = () => {
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
							<div className={style.icons_container}>
								<button className=''>
									<FaCcMastercard size={75} />
								</button>
								<button className=''>
									<FaCcVisa size={75} />
								</button>
								<button className=''>
									<FaCcJcb size={75} />
								</button>
								<button className=''>
									<SiAmericanexpress size={75} />
								</button>
							</div>
							<form>
								<div className={style.input_container}>
									<div className={style.container_small}>
										<label className={style.label}>Card number</label>
										<input className={style.input_cardNUmber} type='number' placeholder='1234 5678 9012 3456' />
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

export default AvailabilitiesPay
