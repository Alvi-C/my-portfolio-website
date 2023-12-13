
import { HiLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    const {
			title,
			image,
			description,
			techstack,
			previewLink,
			githubClientLink,
			githubServerLink,
		} = project
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
							<Link
								to={previewLink}
								target='_blank'
								rel='noreferrer noopener'
								className='underline underline-offset-4 pl-2 text-sm font-light text-slate-500'
							>
								Live Preview
							</Link>
						</div>
						<div className='flex items-center'>
							<FaGithub className='fill-white inline-block min-w-fit' />
							{githubServerLink === '' ? (
								<Link
									to={githubClientLink}
									target='_blank'
									rel='noreferrer noopener'
									className='underline underline-offset-4 pl-2 text-sm font-light text-slate-500'
								>
									view code
								</Link>
							) : (
								<div>
									<span className='text-slate-500 text-sm ml-1 font-light'>code: </span>
									<Link
										to={githubClientLink}
										target='_blank'
										rel='noreferrer noopener'
										className='underline underline-offset-4 text-sm font-light text-slate-500'
									>
										client
									</Link>
									<Link
										to={githubServerLink}
										target='_blank'
										rel='noreferrer noopener'
										className='underline underline-offset-4 pl-2 text-sm font-light text-slate-500'
									>
										server
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		)
};

export default ProjectCard;