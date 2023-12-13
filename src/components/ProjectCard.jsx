
import { HiLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const ProjectCard = ({ project }) => {

    const { title, image, description, techstack, previewLink, githubLink } = project;
    return (
			<div className='rounded-xl mt-10 overflow-hidden bg-slate-800 text-slate-300'>
				<div className='h-full flex flex-col'>
					<div>
						<img src={image} alt='' loading='lazy' />
					</div>
					<div className='p-4 flex flex-col flex-grow'>
						<h1 className='font-semibold text-lg pt-1'>{title}</h1>
						<p className='pt-4 font-light text-sm'>{description}</p>
						<h3 className='font-medium pt-4'>
							Tech Stack :{' '}
							<span className='font-light text-sm'>{techstack}</span>
						</h3>
					</div>
					<div className='flex flex-row justify-between mb-4 px-3'>
						<div className='flex items-center'>
							<HiLink className='fill-white inline-block min-w-fit' />
							<a
								href={previewLink}
								target='_blank'
								rel='noreferrer noopener'
								className='underline underline-offset-4 pl-2 font-light text-slate-500'
							>
								Live Preview
							</a>
						</div>
						<div className='flex items-center'>
							<FaGithub className='fill-white inline-block min-w-fit' />
							<a
								href={githubLink}
								target='_blank'
								rel='noreferrer noopener'
								className='underline underline-offset-4 pl-2 font-light text-slate-500'
							>
								View Code
							</a>
						</div>
					</div>
				</div>
			</div>
		)
};

export default ProjectCard;