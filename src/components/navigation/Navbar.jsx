
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu3Line } from 'react-icons/ri'
import { MdOutlineClose } from 'react-icons/md'
import logo from '../../../public/logo-white.png'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { socialMediaUrl } from '../../webData'

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false)

	const handleMobileMenuToggle = () => {
		setMobileMenu(!mobileMenu)
	}

	return (
		<nav className='container-size flex items-center justify-between py-2 md:py-4'>
			<div className='flex items-center justify-between w-full'>
				<Link to='/' className='flex items-center gap-1 md:gap-2'>
					<img src={logo} alt='logo' className='w-8 h-8' />
					<div className='flex flex-col'>
						<span className='text-xs font-medium text-white'>Jahedul Huda</span>
						<span className='text-xs font-medium text-white'>Chowdhury</span>
					</div>
				</Link>
				<div className='hidden md:flex items-center gap-5'>
					<ul className='text-sm font-medium text-white sm:flex items-center gap-5'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/technologies'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								Technologies
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/projects'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/contact'
								className={({ isActive }) => (isActive ? 'text-lime-500' : '')}
							>
								Contact
							</NavLink>
						</li>
					</ul>
					<ul className='text-2xl font-medium text-white flex items-center gap-4'>
						<li>
							<a
								href={socialMediaUrl.github}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaGithub />
							</a>
						</li>
						<li>
							<a
								href={socialMediaUrl.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								<IoLogoLinkedin />
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Mobile menu start */}
			<div className='flex items-center justify-end gap-3'>
				{/* Hamburger icons */}
				<div onClick={handleMobileMenuToggle} className='md:hidden'>
					{mobileMenu ? (
						<MdOutlineClose className='text-2xl cursor-pointer fill-white' />
					) : (
						<RiMenu3Line className='text-2xl cursor-pointer fill-white' />
					)}
				</div>
				{/* Mobile menu dropdown */}
				<div
					onClick={handleMobileMenuToggle}
					className={
						mobileMenu
							? 'absolute md:hidden top-[48px] right-0 bg-gradient-to-b from-violet-900/[.97] to-slate-900 text-white w-full px-4 py-7 flex flex-col items-center justify-center text-center transition duration-500'
							: 'hidden'
					}
				>
					<ul className='space-y-4 text-lg'>
						<li className='py-3'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'text-lime-500 border-b border-lime-500' : ''
								}
							>
								Home
							</NavLink>
						</li>
						<li className='py-3'>
							<NavLink
								to='/technologies'
								className={({ isActive }) =>
									isActive ? 'text-lime-500 border-b border-lime-500' : ''
								}
							>
								Technologies
							</NavLink>
						</li>
						<li className='py-3'>
							<NavLink
								to='/projects'
								className={({ isActive }) =>
									isActive ? 'text-lime-500 border-b border-lime-500' : ''
								}
							>
								Projects
							</NavLink>
						</li>
						<li className='py-3'>
							<NavLink
								to='/contact'
								className={({ isActive }) =>
									isActive ? 'text-lime-500 border-b border-lime-500' : ''
								}
							>
								Contact
							</NavLink>
						</li>
					</ul>
					<ul className='text-3xl font-medium text-white flex items-center gap-6 py-4'>
						<li>
							<a
								href={socialMediaUrl.github}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaGithub />
							</a>
						</li>
						<li>
							<a
								href={socialMediaUrl.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								<IoLogoLinkedin />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
