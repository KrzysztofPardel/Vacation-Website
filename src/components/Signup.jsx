import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import island from '../assets/island.jpg'
import { UserAuth } from '../context/AuthContext'
const style = {
	background: `-z-10 absolute bg-fixed w-[100vw] h-[100vh] z-0 opacity-50`,
	container: `max-w-[700px] mx-auto pt-20`,
	header: `text-2xl font-bold py-2`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium`,
	input: `border p-3`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white`,
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
				<img src={island} alt='' className={style.background} />
				<div className={style.container}>
					<div>
						<h1 className={style.header}>Sign up for a free account</h1>
						<p className='py-2'>
							Already have an account?
							<Link to='/' className='underline'>
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
			</div>
		</>
	)
}

export default Signup
