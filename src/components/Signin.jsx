import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/Others.scss'
import OurLatestOffers from './OurLatestOffers'
import island from '../assets/island.jpg'
import palmSwing from '../assets/palmSwing.jpg'
import { UserAuth } from '../context/AuthContext'

const style = {
	background: `hidden lg:block -z-10 absolute bg-fixed w-[300rem] h-[60rem] opacity-40`,
	background_mobile: `lg:hidden -z-10 absolute sm:bg-fixed w-[70rem] md:w-[100rem] h-[65rem] md:h-[90rem] opacity-40`,
	container_all_: `flex flex-col-reverse lg:flex-row justify-center md:justify-between items-center p-5 md:p-15 lg:p-20 `,
	line: `hidden lg:block w-[0.1em] h-[35rem] border-right bg-slate-400 xl:mx-10`,
	container_left_: `h-[50vh] md:h-[55vh] lg:h-[40rem] w-[90vw] md:w- lg:w-  md:m-10 lg:mr-2 p-10 bg-slate-200/70 rounded-3xl`,
	container_right_: `h-[52vh] md:h-[70vh] lg:h-[40rem] w-[90vw] md:w- lg:w- mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl text-center`,
	header_left: `text-xl md:text-2xl lg:text-3xl font-bold py-2`,
	subheader_left: `text-base md:text-base lg:text-xl p-2 md:p-0`,
	form: `flex flex-col justify-between h-[20rem]`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium md:text-sm lg:text-base`,
	inputs: `border p-3 text-lg rounded-md md:text-xl lg:text-2xl`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white text-sm md:text-base lg:text-lg`,
	header_right: `text-xl md:text-3xl  font-bold py-2 `,
	p_quote: `font-thin text-center py-2 italic text-lg md:text-xl`,
	p_quoteAuthor: `text-center text-base`,
	component_container: `max-w-[60rem] h-[15rem] md:h-[25rem] mx-auto m-4 border-2 border-grey-300 bg-slate-100/60 rounded-xl bg-gradient-to-r from-[var(--primary-dark)] via-green-300 to-[var(--primary-light)] p-1`,
	h3_component: `p-2 text-center text-white md:text-xl lg:text-2xl`,
	div_component: `flex justify-center mb-1`,
	component: `w-[11rem] md:w-[25rem] lg:w-[30rem] h-[rem] md:h-[15rem] lg:h-[25rem] drop-shadow-xl`,
}
const Signin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const { signIn } = UserAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		try {
			await signIn(email, password)
			navigate('/home')
		} catch (e) {
			setError(e.message)
			console.log(e.message)
		}
	}

	return (
		<>
			<div className=''>
				<img src={island} alt='' className={style.background} />
				<img src={palmSwing} alt='' className={style.background_mobile} />
				<div className={style.container_all_}>
					<div className={style.container_left_}>
						<div>
							<h1 className={style.header_left}>Sign in to your account</h1>
							<p className={style.subheader_left}>
								Don't have an account yet?{' '}
								<Link to='/signup' className='underline'>
									Sign up.
								</Link>
							</p>
						</div>
						<form onSubmit={handleSubmit} className={style.form}>
							<div className={style.container_small}>
								<label className={style.label}>Email Address</label>
								<input onChange={e => setEmail(e.target.value)} className={style.inputs} type='email' />
							</div>
							<div className={style.container_small}>
								<label className={style.label}>Password</label>
								<input onChange={e => setPassword(e.target.value)} className={style.inputs} type='password' />
							</div>
							<button className={style.button}>Sign In</button>
						</form>
					</div>
					<div className={style.line}></div>
					<div className={style.container_right_}>
						<div>
							<h1 className={style.header_right}>Why not allow yourself some vacation?</h1>
							<p className={style.p_quote}>"Nothing is more expensive than a missed opportunity"</p>
							<p className={style.p_quoteAuthor}>H.Jackson Brown Jr.</p>
						</div>
						<div className={style.component_container}>
							<h3 className={style.h3_component}> New locations coming up this summer! </h3>
							<div className={style.div_component}>
								<div className={style.component}>
									<OurLatestOffers />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Signin
