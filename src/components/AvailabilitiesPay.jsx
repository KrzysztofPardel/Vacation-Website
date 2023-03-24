import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const AvailabilitiesPay = () => {
	const [number, setNumber] = useState('')
	const [name, setName] = useState('')
	const [expiry, setExpiry] = useState('')
	const [cvc, setCvc] = useState('')
	const [focus, setFocus] = useState('')
	return (
		<>
			<div className='w-scren h-screen'>
				<Cards number={number} name={number} expiry={expiry} cvc={cvc} focused={focus} />
				<form action='' className=''>
					<input
						type='tel'
						name='number'
						placeholder='Card NUmber'
						value={number}
						onChange={e => setNumber(e.target.value)}
						onFocus={e => setFocus(e.target.name)}
						className=''
					/>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						onFocus={e => setFocus(e.target.name)}
						className=''
					/>
					<input
						type='text'
						name='expiry'
						placeholder='MM/YY Expiry'
						value={expiry}
						onChange={e => setExpiry(e.target.value)}
						onFocus={e => setFocus(e.target.name)}
						className=''
					/>
					<input
						type='tel'
						name='cvc'
						placeholder='CVC'
						value={cvc}
						onChange={e => setCvc(e.target.value)}
						onFocus={e => setFocus(e.target.name)}
						className=''
					/>
				</form>
			</div>
		</>
	)
}

export default AvailabilitiesPay
