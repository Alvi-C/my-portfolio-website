import { Link } from "react-router-dom";


const Button = ({title, link}) => {
    return (
			<div className='text-center'>
				<Link
					className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'
					to={`${link}`}
				>
                    {title}
					<svg
						className='flex-shrink-0 w-4 h-4'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='m9 18 6-6-6-6' />
					</svg>
				</Link>
			</div>
		)
};

export default Button;