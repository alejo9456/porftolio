'use client'
import { useState } from "react";

interface Project {
    id: number;
    projectTitle: string;
    image: string;
    description: string;
    url_github: string;
    url_live_demo: string;
    technologies: string[];
  }
  
interface ProjectItemProps {
    project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ( { project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyles = {
    transform: isHovered ? 'scale(1.4) rotate(-6deg)' : 'scale(1.2) rotate(-12deg)',
    transition: 'transform 0.3s ease-in-out',

  };

    return (
        <section className="hover:scale-105 grid grid-cols-2 gap-8 h-[350px] md:h-[300px] relative rounded-[2rem] bg-wildSand transition-colors duration-300 ease-in-out text-ebonyClay overflow-hidden z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >   
            <div className="flex flex-col justify-center p-4">
              <h2 className="text-lg md:text-xl 2xl:text-3xl font-medium text-gray-800 select-none">{ project.projectTitle}</h2>
                <ul className="flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden">
                  {
                    project.technologies.map( (technologie, id) => (
                      <li key={id} className="project-tags mr-2 my-1 border-dotted border-2 border-brightTurquoise  py-1 px-2 rounded">
                          {technologie}
                      </li>
                    ))
                  }
                </ul>
                <div className="flex gap-4 mt-1 md:mt-2 text-xs md:text-sm 2xl:text-base font-semibold transition-all ease-in-out duration-300"
                >
                  {project.url_live_demo &&
                    <a className="text-neutral-100 bg-ebonyClay hover:opacity-90 font-bold py-2 px-4 rounded-lg" href={project.url_live_demo} target="_blank">Live</a>
                  }
                  { project.url_github &&
                    <a className="text-neutral-100 bg-ebonyClay hover:opacity-90 font-bold py-2 px-4 rounded-lg" href={project.url_github} target="_blank">Repositorio</a>
                  }
                </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden -rotate-12 relative  top-2 -right-12 -z-20 drop-shadow-xl"
            style={containerStyles}
            >
            <img className="w-full h-full object-cover" src={project.image} alt={project.projectTitle} />
            </div>
        </section>
    );    
};
  