import React from 'react'
const style = {
	img: `w-full h-full object-cover`,
	overlay: `bg-gray-900/20 absolute top-0 left-0 w-full h-full`,
	p: `left-1 bottom-1 text-sm font-bold text-white absolute`,
}
const SelectsOffer = ({ bg, text }) => {
	return (
		<div className='relative'>
			<img className={style.img} src={bg} alt='/' />
			<div className={style.overlay}>
				<p className={style.p}>{text}</p>
			</div>
		</div>
	)
}

export default SelectsOffer
