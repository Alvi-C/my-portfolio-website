
import { aboutMe } from '../webData'
import hi from '../assets/others/hi.png'
import Button from '../components/Button';

const HomePage = () => {
    return (
			<div>
				<div className=''>
					<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12'>
						<div className='flex items-center justify-center'>
							<img src={hi} className='w-[12rem] mt-10' alt='' />
							{/* <h1 className='block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
								Hi
							</h1> */}
						</div>
						<div className='space-y-8'>
							<h1 className='block font-bold text-center text-gradient text-4xl'>
								I&apos;m {aboutMe.name}
							</h1>
							<div className='max-w-3xl text-center mx-auto'>
								<h2 className='text-2xl font-semibold text-gradient-secondary mb-3'>
									{aboutMe.title}
								</h2>
								<p className='text-lg text-gray-400'>{aboutMe.description}</p>
							</div>
							<Button title='more about me' link='/technologies' />
						</div>
					</div>
				</div>
			</div>
		)
};

export default HomePage;