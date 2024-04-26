"use client"
export const Presentation = () => {
 
  return (
    <section id="home" className='flex flex-col items-center justify-center h-full py-24'>
        <h1 className="flex gap-4 items-center text-2xl md:text-4xl lg:text-6xl my-20 lg:my-24 animate-fadeIn">Hola, soy Alejandro Villanueva <span className="animate-waving-hand">👋</span></h1>
        <p className='m-auto mb-10 lg:text-2xl animate-fadeIn text-brightTurquoise'>FullStack Developer</p>
        <a href="https://drive.google.com/file/d/1etmBtikbxmCcJSH9zKTtDnhByBw1KGOy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="max-w-48 mb-10 bg-brightTurquoise bg opacity-90 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2">
          Ver CV
        </a>
        <ul className='flex gap-5 justify-center mb-10'>
          <li className="cursor-pointer">
            <a href="https://www.frontendmentor.io/profile/alejo9456" target='_blank'>
              <img className='w-10' src="icon-frontend-mentor.svg" alt="frontent mentor" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://github.com/alejo9456" target='_blank'>
              <img className='w-10' src="icon-github.svg" alt="Github profile" />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/alejandro-villanueva-fernandez/" target='_blank'>
              <img className='w-10' src="icon-linkedin.svg" alt="Linkedin profile" />
            </a>
          </li>
        </ul>
    </section>
  )
}
