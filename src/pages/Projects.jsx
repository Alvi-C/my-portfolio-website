

import ProjectCard from '../components/ProjectCard';
import { projectDetails } from '../webData'


const Projects = () => {

    return (
			<div className='container-size py-10 mb-20 px-5'>
				<div>
					<h1 className='text-2xl text-gradient-secondary md:text-4xl xl:text-5xl xl:leading-tight font-semibold text-center'>
						Projects
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10'>
						{projectDetails.map(project => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		)
};

export default Projects;