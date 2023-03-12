import React, { useState } from "react";
import {  Bars3Icon  } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { MenuMobile } from './components/MenuMobile'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <header className="bg-[#00040f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">

        {/* LOGO */}
        <div className="flex lg:flex-1">
          <Link to='/' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
        </div>

        {/* BOTON MENU */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={handleOpen}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* NAVBAR */}
        <div className="hidden lg:flex lg:gap-x-12">

        {/* ENLACES */}
          <a href="#" className="text-sm font-semibold leading-6 text-white">Nosotros</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Blog</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Empresas</a>
          
        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/login" className="text-sm font-semibold leading-6 text-white">
            Iniciar Sesión <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>

        </div>

      </nav>

      {/* MENU CONTENT */}
      <MenuMobile open={mobileMenuOpen} setOpen={setMobileMenuOpen}/>

    </header>
  )
}
