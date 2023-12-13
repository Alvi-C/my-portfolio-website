import { Link } from "react-router-dom";
import { IoHeart } from 'react-icons/io5'
import { PiCoffeeFill } from 'react-icons/pi'

const Footer = () => {
    return (
			<footer className='w-full bg-black py-2 fixed bottom-0 text-slate-300'>
				<div className='text-xs text-center w-full flex items-center justify-center gap-1'>
					<p>
						Designed and Coded by{' '}
						<Link
							to='https://github.com'
							className='font-medium'
							target='_blank'
						>
							Alvi
						</Link>{' '}
						with
					</p>
					<div className='flex gap-1'>
						<span className='text-gradient font-medium'>
							{' '}
							<IoHeart className='text-red-500 text-base' />
						</span>{' '}
						&
						<span className='text-gradient font-medium'>
							{' '}
							<PiCoffeeFill className='text-amber-500 text-base' />
						</span>
					</div>
				</div>
			</footer>
		)
};

export default Footer;