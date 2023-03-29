import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
const style = {
	container: `flex w-[100%] justify-between items-center h-20 px-4 absolute z-10 text-white`,
	logo_Vacation: `block text-base md:text-lg`,
	pages_ul: `hidden md:flex`,
	pages_link: `p-4 hover:bg-slate-100/30 rounded-full text-xs md:text-sm lg:text-lg text-center`,
	container_icons: `hidden md:flex `,
	p_icons: `mr-2 text-base text-xs md:text-sm lg:text-lg`,
	icon_Person: `mr-2`,
	icon_Search: `mr-2`,
	icon_LogOut: `mr-2`,
	mobile_Nav: `md:hidden z-10`,
	mobile_NavShown: `absolute text-black left-0 top-0 w-full bg-gray-100/90 px-1 md:px-2 lg:px-4 py-7 flex flex-col`,
	mobile_NavHidden: `absolute left-[-100%]`,
	mobile_container_icons: `flex justify-center md:text-sm`,
	mobile_p_icons: `mr-2 text-sm md:text-sm lg:text-lg text-[#5651e5]`,
	mobile_icon: `mr-2 text-sm md:text-sm lg:text-lg text-[#709dff] cursor-pointer `,
}
const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [logo, setLogo] = useState(false)
	const { user, logout } = UserAuth()
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logout()
			navigate('/')
			console.log('You are logged out')
		} catch (e) {
			console.log(e.message)
		}
	}
	const handleNav = () => {
		setNav(!nav)
		setLogo(!logo)
	}
	return (
		<div className={style.container}>
			{/* //without absolute nav won't be transparent */}
			<div>
				<h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
					Vacation.
				</h1>
			</div>
			<ul className={style.pages_ul}>
				<Link to='/home' className={style.pages_link}>
					Home
				</Link>
				<Link to='/home/whyus' className={style.pages_link}>
					About Us
				</Link>
				<Link to='/home/availabilities' className={style.pages_link}>
					Availabilities
				</Link>
				<Link to='/home/plan' className={style.pages_link}>
					Plan
				</Link>
			</ul>
			<div className={style.container_icons}>
				<p className={style.p_icons}>Welcome : {user && user.email}</p>
				<BsPerson className={style.icon_Person} size={25} />
				<BiSearch onClick={handleLogout} className={style.icon_Search} size={25} />
				<AiOutlineLogout onClick={handleLogout} className={style.icon_LogOut} size={25} />
			</div>
			{/* Hamburger */}
			<div onClick={handleNav} className={style.mobile_Nav}>
				{nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
			</div>
			{/* Mobile menu dd */}
			<div onClick={handleNav} className={nav ? style.mobile_NavShown : style.mobile_NavHidden}>
				<ul className=''>
					<h1 className='border-b'>Vacation.</h1>
					<li className='border-b'>Home</li>
					<li className='border-b'>About Us</li>
					<li className='border-b'>Travel</li>
					<li className='border-b'>View</li>
					<li className='border-b'>Book</li>
					<li className='border-b'>Plan</li>
					<li className='border-b'>Weather</li>
					<div className='flex flex-col'>
						<button className='my-6'>Search</button>
						<button className='my-6'>Account</button>
					</div>

					<div className={style.mobile_container_icons}>
						<p className={style.mobile_p_icons}>Welcome : {user && user.email}</p>
						<BsPerson className={style.mobile_icon} size={30} />
						<BiSearch onClick={handleLogout} className={style.mobile_icon} size={30} />
						<AiOutlineLogout onClick={handleLogout} className={style.mobile_icon} size={30} />
					</div>

					<div className='flex justify-between'>
						<Link to='https://www.facebook.com/' className='mr-2'>
							<FaFacebook size={30} style={{ color: '#709dff' }} className='icons' />
						</Link>
						<Link to='https://twitter.com/' className='mr-2'>
							<FaTwitter size={30} style={{ color: '#709dff' }} className='icons' />
						</Link>
						<Link to='https://www.instagram.com/' className='mr-2'>
							<FaInstagram size={30} style={{ color: '#709dff' }} className='icons' />
						</Link>
						<Link to='https://www.youtube.com/' className='mr-2'>
							<FaYoutube size={30} style={{ color: '#709dff' }} className='icons' />
						</Link>
						<Link to='https://www.pinterest.com/' className='mr-2'>
							<FaPinterest size={30} style={{ color: '#709dff' }} className='icons' />
						</Link>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
