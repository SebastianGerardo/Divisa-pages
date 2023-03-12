import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export const MenuMobile = ({open, setOpen}) => {

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={open}
      onClose={setOpen}
    >
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
            onClick={() => setOpen(false)}
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
              <NavLink
                to="/"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/nosotros"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/blog"
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Blog
              </NavLink>
            </div>
            <div className="py-6">
              <NavLink
                to="/login"
                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                Iniciar Sesión
              </NavLink>
            </div>
            {/*  */}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

