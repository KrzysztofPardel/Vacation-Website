import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/Others.scss'
import { UserAuth } from '../context/AuthContext'
import { onAuthStateChanged } from '@firebase/auth'
import { auth } from '../firebase'
const style = {
	container: `max-w-[700px] mx-auto my-16 p-4`,
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
			<div className='background'>
				<div className={style.container}>
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
			</div>
		</>
	)
}

export default Signin
