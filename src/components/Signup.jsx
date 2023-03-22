import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import island from '../assets/island.jpg'
import { UserAuth } from '../context/AuthContext'
import { MdOutlineImportantDevices, MdMarkEmailRead } from 'react-icons/md'
import { GiPresent } from 'react-icons/gi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const style = {
	background: `-z-10 absolute bg-fixed w-[100vw] h-[100vh] opacity-50`,
	container_all: `flex justify-between items-center p-20`,
	container_left: `h-[65vh] w-[25em] mx-auto m-10 p-10 bg-slate-200/70 rounded-3xl`,
	line: `w-[0.1em] h-[35em] border-right bg-black mx-10`,
	container_right: `h-[65vh] flex flex-col justify-start items-center max-w-[700px] mx-auto p-10 bg-slate-200/70 rounded-3xl text-center`,
	header: `text-2xl font-bold py-2`,
	container_small: `flex flex-col py-2`,
	label: `py-2 font-medium`,
	input: `border p-3`,
	button: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full my-2 text-white`,
	header_right: `text-3xl font-bold pt-2 underline`,
	p_undeQuote: `font-normal text-xl text-center py-2 italic`,
	span_text: `text-xl m-2`,
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
				<img src={island} alt='' className={style.background} />
				<div className={style.container_all}>
					<div className={style.container_left}>
						<div>
							<h1 className={style.header}>Sign up for a free account</h1>
							<p className='py-2'>
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
