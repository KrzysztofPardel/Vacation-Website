import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/Others.scss'
import OurLatestOffers from './OurLatestOffers'
import island from '../assets/island.jpg'
import { UserAuth } from '../context/AuthContext'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../firebase'
const style = {
	background: `-z-10 absolute bg-fixed w-[100vw] h-[100vh] opacity-40`,
	container_all_: `flex justify-between items-center p-20`,
	line: `w-[0.1em] h-[35rem] border-right bg-slate-400 mx-10`,
	container_left_: `h-[65vh] max-w-[30vw] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	container_right_: ` h-[65vh] max-w-[700px] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl text-center`,
	header_left: `text-2xl font-bold py-2`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium`,
	inputs: `border p-3`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white`,
	header_right: `text-2xl font-bold py-2 text-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]`,
	p_quote: `font-thin text-center py-2 italic`,
	p_quoteAuthor: `text-center text-base`,
	component_container: `max-w-[50em] max-h-[30em] mx-auto m-4 border-2 border-grey-300 bg-slate-100/60 rounded-xl bg-gradient-to-r from-[var(--primary-dark)] via-green-300 to-[var(--primary-light)] p-1`,
	h3_component: `p-2 text-center text-white`,
	div_component: `flex justify-center mb-1`,
	component: `w-[15em] h-[11em] drop-shadow-xl`,
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
				<div className={style.container_all_}>
					<div className={style.container_left_}>
						<div>
							<h1 className={style.header_left}>Sign in to your account</h1>
							<p className='py-2'>
								Don't have an account yet?{' '}
								<Link to='/signup' className='underline'>
									Sign up.
								</Link>
							</p>
						</div>
						<form onSubmit={handleSubmit}>
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
