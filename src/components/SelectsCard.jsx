import React from 'react'
const style = {
	img: `w-full h-full object-cover`,
	overlay: `bg-gray-900/30 absolute top-0 left-0 w-full h-full`,
	p: `left-4 bottom-4 text-2xl font-bold text-white absolute`,
}
const SelectsCard = ({ bg, text }) => {
	return (
		<div className='relative'>
			<img className={style.img} src={bg} alt='/' />
			<div className={style.overlay}>
				<p className={style.p}>{text}</p>
			</div>
		</div>
	)
}

export default SelectsCard
