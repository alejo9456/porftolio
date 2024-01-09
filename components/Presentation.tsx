"use client"
export const Presentation = () => {
 
  return (
    <section id="home" className='flex flex-col items-center justify-center h-full py-24'>
        <h1 className="flex gap-4 items-center text-2xl md:text-4xl lg:text-6xl my-20 lg:my-24 animate-fadeIn">Hola, soy Alejandro Villanueva <span className="animate-waving-hand">👋</span></h1>
        <p className='m-auto mb-10 lg:text-2xl animate-fadeIn text-brightTurquoise'>FullStack Developer</p>
        <a href="https://getonbrd-prod.s3.amazonaws.com/uploads/cv/dad72f44edae1628a9c5122d07e1ac38/alejandro-villanueva-cv.pdf?X-Amz-Expires=86400&X-Amz-Date=20240109T191713Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJT5MYUSOEN4SITVA%2F20240109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=a0b75a088becb0dd2a40601ecb6d9d5364eb806e2984e9b86d100d2650710d32" target="_blank" rel="noopener noreferrer" className="max-w-48 mb-10 bg-brightTurquoise bg opacity-90 hover:bg-opacity-80 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2">
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
