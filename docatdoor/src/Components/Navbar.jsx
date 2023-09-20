import React from 'react'
import { NavLink, Link } from "react-router-dom"
import logo from '../Assets/Logo/logo.png'

export const Navbar = () => {

  const NavbarLinks = [
    {
      title: "Doctors",
      path: '/ḍoctors',
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  
  return (
    <div className='w-full h-[100px] shadow-md flex flex-row justify-between items-center px-4'>
        <div className='flex flex-row'>
        
            <Link to={"/"} className='flex flex-row items-center '>
              <img src={logo}
                alt='Logo'
                className='w-[100px]'
              />
              <span className='text-3xl text-sky-600 font-bold'>DocAtDoor</span>
            </Link>
        </div>

      <div className='flex flex-row items-center gap-4'>
        <div>
          <nav>
            <ul className='flex flex-row gap-x-6'>
              {
                NavbarLinks.map((link, index) => (
                  <li key={index} className='text-sky-600 text-lg font-semibold cursor-pointer'>
                    <Link to={link.path}>
                      {link.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>

        {/* display login and signup when user is not logged in  */}
        <div className='flex flex-row gap-x-3'>
          <button className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
          hover:bg-sky-600 hover:text-white'>
            Login
          </button>
          <button className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
            hover:bg-sky-600 hover:text-white'>
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}
