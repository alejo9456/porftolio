
import { ProjectItem } from './ProjectItem';


  const projectsInfo = [
    {
      id: 1,
      projectTitle: 'Sitio web de posgrado de Administracion',
      image: '/img/proyecto-posgrado-administracion.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: '',
      url_live_demo: 'https://posgradoadministracion.unmsm.edu.pe/',
      technologies: [
        "Nextjs",
        "TailwindCSS",
        "Formik",
      ]
    },
    {
      id: 2,
      projectTitle: 'Gestor de contenidos de la UNMSM',
      image: 'img/proyecto-cm-unmsm.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: '',
      url_live_demo: 'https://sisbib.unmsm.edu.pe/',
      technologies: [
        "Angular",
        "TailwindCSS",
        "Angular Material",
      ]
    },
    {
      id: 3,
      projectTitle: 'Sitio web Biblioteca Pedro Zulen | UNMSM',
      image: 'img/proyecto-biblioteca-pedro-zulen.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: '',
      url_live_demo: 'https://sisbib.unmsm.edu.pe/',
      technologies: [
        "Php",
        "Bootstrap",
        "HTML",
        "CSS"
      ]
    },
    {
      id: 4,
      projectTitle: 'Sitio Web Facultad de Educacion',
      image: 'img/proyecto-educacion.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: '',
      url_live_demo: 'https://educacion.unmsm.edu.pe/',
      technologies: [
        "Nextjs",
        "TailwindCSS",
        "Formik",
      ]
    },
    {
      id: 5,
      projectTitle: 'Sitio Web Facultad de Farmácia y Bioquímica',
      image: 'img/proyecto-farmacia.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: '',
      url_live_demo: 'https://farmacia.unmsm.edu.pe/',
      technologies: [
        "Nextjs",
        "TailwindCSS",
        "Formik",
      ]
    },
    {
      id: 6,
      projectTitle: 'Advice Generator',
      image: 'img/proyecto-advice-generator.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: 'https://github.com/alejo9456/advice-generator-app-main',
      url_live_demo: 'https://advice-generator-app-main-cyan.vercel.app/',
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      id: 7,
      projectTitle: 'Rest countries',
      image: 'img/proyecto-rest-countries.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: 'https://github.com/alejo9456/rest-countries-api-with-color-theme',
      url_live_demo: 'https://rest-countries-api-with-color-theme-livid.vercel.app/',
      technologies: [
        "Angular",
        "TailwindCSS",
      ]
    },
    {
      id: 8,
      projectTitle: 'Todo App',
      image: 'img/proyecto-todo-app.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: 'https://github.com/alejo9456/todo-app',
      url_live_demo: 'https://todo-app-gamma-plum.vercel.app/',
      technologies: [
        "React",
        "TailwindCSS",
        "React Beautifull DND",
        "Vite",
      ]
    },
    {
      id: 9,
      projectTitle: 'Sunnyside',
      image: 'img/proyecto-sunnyside.png',
      description: 'Este proyecto tuvo como objetivo visibilizar el liderazgo académico e investigativo de la Universidad NacionalMayor de San Marcos y estableció las bases para la estandarizacióny optimización de sus sitios web secundarios',
      url_github: 'https://github.com/alejo9456/sunnyside-agency-landing-page',
      url_live_demo: 'https://sunnyside-agency-landing-page-flax.vercel.app/',
      technologies: [
        "TailwindCSS",
        "HTML",
        "CSS"
      ]
    },
  ];

export const Projects = () => {
  return (
    <section id="projects" className='w-full flex flex-col py-10'>
        <h2 className='mx-auto my-10 font-bold text-4xl pb-2 border-solid border-b-4 border-b-brightTurquoise w-max'>Proyectos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 justify-between ease-in'>
          {
            projectsInfo.map( (project) => (
              <ProjectItem key={project.id} project={ project}/>
            ))
          }
        </div>
    </section>
  )
}
