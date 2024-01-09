

import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row md:justify-between items-center justify-center p-4 border-t border-willSand'>
        <p className='mx-auto mb-2'>Alejandro Villanueva Lima, Perú</p>
        <ul className='flex gap-5 justify-center'>
            <li className="cursor-pointer">
                <a href="https://www.frontendmentor.io/profile/alejo9456" target='_blank'>
                    <img className='w-6' src="icon-frontend-mentor.svg" alt="frontend mentor" />
                </a>
            </li>
            <li className="cursor-pointer">
                <a href="https://github.com/alejo9456" target='_blank'>
                    <img className='w-6' src="icon-github.svg" alt="Github profile" />
                </a>
            </li>
            <li className="cursor-pointer">
                <a href="https://www.linkedin.com/in/alejandro-villanueva-fernandez/" target='_blank'>
                    <img className='w-6' src="icon-linkedin.svg" alt="Linkedin profile" />
                </a>
            </li>
        </ul>
    </footer>
  )
}
