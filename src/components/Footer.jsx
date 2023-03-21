import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
const style = {
	bg: `w-full bg-gray-100 py-16'`,
	container: `max-w-[1240px] mx-auto flex flex-col px-4`,
	container_socialMedia: `sm:flex text-center justify-between items-center`,
	container_icons_socialMedia: `flex justify-between w-full sm:max-w-[280px] my-4`,
	container_links: `flex justify-between`,
}
const Footer = () => {
	return (
		<div className={style.bg}>
			<div className={style.container}>
				<div className={style.container_socialMedia}>
					<h1 className=''>Vacation.</h1>
					<div className={style.container_icons_socialMedia}>
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
				</div>
				<div className={style.container_links}>
					<ul className='lg:flex'>
						<Link to='/' className='p-4'>
							About
						</Link>
						<Link to='/' className='p-4'>
							Partnership
						</Link>
						<Link to='/' className='p-4'>
							Careers
						</Link>
						<Link to='/' className='p-4'>
							News
						</Link>
						<Link to='/' className='p-4'>
							Advertising
						</Link>
					</ul>
					<ul className='text-right lg:flex'>
						<Link to='/' className='p-4'>
							Home
						</Link>
						<Link to='/' className='p-4'>
							Destinations
						</Link>
						<Link to='/' className='p-4'>
							View
						</Link>
						<Link to='/' className='p-4'>
							Book
						</Link>
						<Link to='/home/takelist' className='p-4'>
							Plan
						</Link>
						<Link to='/home/weatherapp' className='p-4'>
							Wheather
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
