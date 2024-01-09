"use client"
import { useState } from "react";
import { Link } from "react-scroll/modules";

interface NavItem {
    label: string,
    page: string
}

const NAV_ITEMS: Array<NavItem> = [

    {
        label: "Inicio",
        page: "home"
    },
    {
        label: "Acerca de",
        page: "about"
    },
    {
        label: "Proyectos",
        page: "projects"
    },
]

export const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="px-4 sm:px-20 fixed top-0 z-50 flex justify-center w-full border-b border-stone-600 bg-inherit">
        <nav className="md:justify-between md:items-center md:flex w-full">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link to="home">
                    <div className="text-2xl text-brightTurquoise font-bold cursor-pointer">
                        {"< alejo.dev />"}
                    </div>
                </Link>
                <div className="md:hidden">
                    <button 
                        className="navbar-burger flex items-center md:hidden"
                        onClick={() => setNavbar(!navbar)}>
                        <img className="w-4 h-4" src={ navbar ?'menu_close.svg':'hamburger_menu.svg'} alt="menu mobile" />
                    </button>
                </div>
            </div>
            <div
                className={`hidden md:flex md:justify-end }`}
            >
                <ul className="flex flex-col justify-center items-center lg:flex-row gap-4">
                    {
                        NAV_ITEMS.map( (item, idx) => (
                            <Link
                            key={idx}
                            to = {item.page}
                            activeClass="active"
                            className="cursor-pointer nav"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={() => setNavbar(!navbar)}
                            >
                            { item.label}
                            </Link>
                        ))
                    }       
                </ul>
            </div>
            <div
                className={`flex justify-center pb-3 md:hidden ${
                navbar ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col lg:flex-row gap-4">
                    {
                        NAV_ITEMS.map( (item, idx) => (
                            <Link
                            key={idx}
                            to = {item.page}
                            activeClass="active"
                            className="cursor-pointer nav"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={() => setNavbar(!navbar)}
                            >
                            { item.label}
                            </Link>
                        ))
                    }       
                </ul>
            </div>
        </nav>        
    </header>
  )
}