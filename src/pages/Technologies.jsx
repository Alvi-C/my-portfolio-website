
import Button from '../components/Button'
import { techStackDetails } from '../webData'

const Technologies = () => {
	const {
		html,
		css,
		tailwind,
		js,
		react,
		tanstackQuery,
		nodeJs,
		expressJs,
		mongodb,
		vscode,
		git,
		github,
		npm,
		postman,
		figma,
		notion,
		firebase,
		vercel,
		netlify
	} = techStackDetails

	return (
		<div className='container-size flex flex-col items-center justify-center text-center'>
			<div className='mt-10'>
				<h1 className='text-2xl text-gradient-secondary md:text-4xl xl:text-5xl xl:leading-tight font-semibold'>
					Tech Stack
				</h1>
				<p className='text-slate-300 font-light py-2 lg:max-w-3xl mb-10'>
					Technologies I have been working with:
				</p>
			</div>
			<div>
				<h1 className='text-xl text-slate-100 xl:text-2xl font-bold mb-10'>
					Development
				</h1>
			</div>
			<div className='w-full px-3 mb-16'>
				<div className='flex flex-wrap items-center justify-center gap-6 md:gap-10'>
					<img src={html} className='w-12 md:w-16' title='html' alt='' />
					<img src={css} className='w-12 md:w-16' title='CSS' alt='' />
					<img
						src={tailwind}
						className='w-12 md:w-16'
						title='Tailwind CSS'
						alt=''
					/>
					<img src={js} className='w-12 md:w-16' title='JavaScript' alt='' />
					<img src={react} className='w-12 md:w-16' title='React' alt='' />
					<img
						src={tanstackQuery}
						className='w-12 md:w-16'
						title='Tanstack'
						alt=''
					/>
					<img src={nodeJs} className='w-12 md:w-16' title='Node' alt='' />
					<img
						src={expressJs}
						className='w-16 md:w-24'
						title='Express'
						alt=''
					/>
					<img src={mongodb} className='w-12 md:w-16' title='MongoDB' alt='' />
				</div>
			</div>
			<div>
				<h1 className='text-xl text-slate-100 xl:text-2xl font-bold mb-10'>
					Tools
				</h1>
			</div>
			<div className='w-full mb-16'>
				<div className='flex flex-wrap items-center justify-center gap-6 lg:gap-10'>
					<img
						src={vscode}
						className='w-12 md:w-16'
						title='Visual Studio Code'
						alt=''
					/>
					<img src={git} className='w-12 md:w-16' title='Git' alt='Git' />
					<img
						src={github}
						className='w-12 md:w-16'
						title='Github'
						alt='Github'
					/>
					<img src={figma} className='w-8 md:w-10' title='Figma' alt='Figma' />
					<img src={npm} className='h-10 md:h-12' title='NPM' alt='NPM' />
					<img
						src={postman}
						className='w-12 md:w-16'
						title='Postman'
						alt='Postman'
					/>
					<img
						src={notion}
						className='w-12 md:w-16'
						title='Notion'
						alt='Notion'
					/>
				</div>
			</div>
			<div>
				<h1 className='text-xl text-slate-100 xl:text-2xl font-bold mb-10'>
					Deployment
				</h1>
			</div>
			<div className='w-full'>
				<div className='flex flex-wrap items-center justify-center gap-6 lg:gap-10'>
					<img src={firebase} className='w-32' title='firebase' alt='' />
					<img src={vercel} className='w-32' title='vercel' alt='' />
					<img src={netlify} className='w-32' title='netlify' alt='' />
				</div>
			</div>
			<div className='my-14'>
				<Button title='check my projects' link='/projects' />
			</div>
		</div>
	)
}

export default Technologies
