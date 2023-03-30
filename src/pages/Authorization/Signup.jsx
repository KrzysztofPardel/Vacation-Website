import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import island from '../../assets/island.jpg'
import palmSwing from '../../assets/palmSwing.jpg'
import { UserAuth } from '../../context/AuthContext'
import { MdOutlineImportantDevices, MdMarkEmailRead } from 'react-icons/md'
import { GiPresent } from 'react-icons/gi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const style = {
	bg: `hidden lg:block -z-10 absolute bg-fixed w-[300rem] h-[60rem] opacity-40`,
	bg_mobile: `lg:hidden -z-10 absolute sm:bg-fixed w-[70rem] md:w-[100rem] h-[75rem] md:h-[75rem] opacity-40`,
	container: `flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center p-5 md:p-15 lg:p-20 `,
	line: `hidden lg:block w-[0.1em] h-[30rem] border-right bg-slate-400 md:mx-0 lg:mx-5 xl:mx-10`,
	container_left: `h-[50vh] md:h-[55vh] lg:h-[35rem] xl:h-[30rem] w-[90vw] m-10 md:mt-[2rem] lg:mr-2 p-10 bg-slate-200/70 rounded-3xl`,
	header_left: `text-xl md:text-2xl lg:text-3xl font-bold py-2`,
	subheader_left: `text-base md:text-base lg:text-xl p-2 md:p-0`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium`,
	input: `border p-3`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full my-2 text-white`,
	container_right: `h-[60vh] md:h-[55vh] lg:h-[35rem] xl:h-[30rem] w-[90vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl text-center`,
	header_right: `text-2xl md:text-3xl font-bold pt-2 underline`,
	p_undeQuote: `font-normal text-xl text-center py-2 italic`,
	span_text: `text-xl md:text-lg m-2`,
	arguments_container: `w-[100%] flex justify-start items-center mb-1`,
	arguments_container_reverse: `w-[100%] flex flex-row-reverse justify-start  items-center mb-1`,
}

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { createUser } = UserAuth()
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		try {
			await createUser(email, password)
			navigate('/account')
		} catch (e) {
			setError(e.message)
			console.log(e.message)
		}
	}

	return (
		<>
			<div className='relative'>
				<img src={island} alt='' className={style.bg} />
				<img src={palmSwing} alt='' className={style.bg_mobile} />
				<div className={style.container}>
					<div className={style.container_left}>
						<div>
							<h1 className={style.header_left}>Sign up for a free account</h1>
							<p className={style.subheader_left}>
								Already have an account?
								<Link to='/' className='underline ml-1'>
									Sign in.
								</Link>
							</p>
						</div>
						<form onSubmit={handleSubmit}>
							<div className={style.container_small}>
								<label className={style.label}>Email Address</label>
								<input onChange={e => setEmail(e.target.value)} className={style.input} type='email' />
							</div>
							<div className={style.container_small}>
								<label className={style.label}>Password</label>
								<input onChange={e => setPassword(e.target.value)} className={style.input} type='password' />
							</div>
							<button className={style.button}>Sign Up</button>
						</form>
					</div>
					<div className={style.line}></div>
					<div className={style.container_right}>
						<h1 className={style.header_right}>How will you benefit </h1>
						<p className={style.p_undeQuote}>from signing up?</p>
						<div className={style.arguments_container}>
							<button>
								<MdOutlineImportantDevices size={30} />
							</button>
							<span className={style.span_text}>Exclusive acess to world-wide renown traveling agency</span>
						</div>
						<div className={style.arguments_container_reverse}>
							<button>
								<MdMarkEmailRead size={30} />
							</button>
							<span className={style.span_text}>Detailed information about our offers sent to your email</span>
						</div>
						<div className={style.arguments_container}>
							<button>
								<GiPresent size={30} />
							</button>
							<span className={style.span_text}>Seasonal discounts and gift-cards to stores with travel equipment</span>
						</div>
						<div className={style.arguments_container_reverse}>
							<button>
								<AiOutlinePlusCircle size={30} />
							</button>
							<span className={style.span_text}>...and much, much more!</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Signup
