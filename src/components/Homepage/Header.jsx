import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <header className="bg-[#00040f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">

        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
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
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Iniciar Sesión <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        </div>

      </nav>

      {/* MENU CONTENT */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        
        <div className="fixed inset-0 z-10" />

        {/* MENU */}

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* HEADER MENU */}

          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/*  */}
          <div className="mt-6 flow-root">

            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* ENLACES */}
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Nosotros</a>
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Blog</a>
                <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Empresas</a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar Sesión</a>
              </div>
              {/*  */}
            </div>

          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
