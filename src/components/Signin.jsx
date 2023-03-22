import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/Others.scss'
import OurLatestOffers from './OurLatestOffers'
import island from '../assets/island.jpg'
import { UserAuth } from '../context/AuthContext'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../firebase'
const style = {
	background: `-z-10 absolute bg-fixed w-[100vw] h-[100vh] opacity-40`,
	container_all: `flex justify-between items-center p-20`,
	line: `w-[0.1em] h-[35rem] border-right bg-black mx-10`,
	container_left: `max-w-[700px] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	container_right: `max-w-[700px] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	header: `text-2xl font-bold py-2`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium`,
	inputs: `border p-3`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white`,
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
				<div className={style.container_all}>
					<div className={style.container_left}>
						<div>
							<h1 className={style.header}>Sign in to your account</h1>
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
					<div className={style.container_right}>
						<div>
							<h1 className={style.header}>Why not allow yourself some vacation?</h1>
							<p className='py-4'>"Nothing is more expensive than a missed opportunity"</p>
							<span className='text-center'>H.Jackson Brown Jr.</span>
						</div>
						<div className='max-w-[50em] max-h-[30em] mx-auto m-4 border-2 border-grey-500 bg-slate-200 rounded-xl'>
							<h3 className='p-2 text-center'> Our hottest opportunities </h3>
							<div className='flex justify-center'>
								<div className='w-[15em] h-[11em]'>
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
