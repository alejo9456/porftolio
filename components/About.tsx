const skills = [
  {
      name: 'HTML',
      icon: 'html.svg'
  },
  {
      name: 'CSS',
      icon: 'css.svg'
  },
  {
      name: 'JavaScript',
      icon: 'javascript.svg'
  },
  {
      name: 'React',
      icon: 'react.svg'
  },
  {
      name: 'Tailwind',
      icon: 'tailwind.svg'
  },
  {
      name: 'Nextjs',
      icon: 'nextjs.svg'
  },
  {
      name: 'Git',
      icon: 'git.svg'
  },
  {
      name: 'Nestjs',
      icon: 'nestjs.svg'
  },
  {
      name: 'GitHub',
      icon: 'github.svg'
  },
]

export const About = () => {
  return (
    <section id="about" className="py-10 flex flex-col gap-12">
       <h2 className="my-10 font-bold text-4xl pb-2 border-solid border-b-4 border-b-brightTurquoise w-max mx-auto">Sobre Mi</h2>
       <article className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8"> 
          <div className="flex flex-col gap-4">
            <p>Soy un apasionado desarrollador web full stack con un amor por la creación digital. Desde diseñar experiencias cautivadoras en el frontend hasta construir sistemas eficientes en el backend, disfruto cada aspecto del desarrollo web.</p>
            <p>En mi tiempo libre, soy un entusiasta del teatro y del dibujo. Mi vida se equilibra con una dosis diaria de actividad física, ya sea superando límites en el gimnasio o explorando nuevos caminos mientras salgo a correr. Creo firmemente en mantener un equilibrio saludable entre la mente y el cuerpo.</p>
            <p>Mi enfoque en el desarrollo va más allá del código; busco construir experiencias digitales funcionales y emocionantes. Estoy emocionado por la posibilidad de contribuir a proyectos innovadores y crecer tanto en el ámbito profesional como personal.</p>
          </div>       
          <div>
              <h3 className="text-left text-2xl font-medium mb-4">Habilidades:</h3>
              <div className="flex flex-wrap gap-6">
                {
                  skills.map( (skill) => (
                    <div key={skill.name} className="flex flex-col items-center justify-center gap-1">
                      <img src={skill.icon} alt={skill.name} className="w-11 h-12 select-none" />
                      <p>{skill.name}</p>
                    </div>
                  ))
                }
              </div>   
          </div>
       </article>
    </section>
  )
}
