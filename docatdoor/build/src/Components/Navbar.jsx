import { Link } from "react-router-dom"
import logo from '../Assets/Logo/logo.png'

export const Navbar = () => {

  const NavbarLinks = [
    {
      title: "Home",
      path: "/",
    },
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
              <span className='text-2xl text-sky-500 font-bold'>DocAtDoor</span>
            </Link>
        </div>

      <div>
        <nav>
          <ul className='flex flex-row gap-x-6'>
            {
              NavbarLinks.map((link, index) => (
                <li key={index} className='text-sky-500 text-lg font-semibold cursor-pointer'>
                  <Link to={link.path}>
                    {link.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}