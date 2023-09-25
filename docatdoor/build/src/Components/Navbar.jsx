import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Logo/logo.png'
import styles from './SCSS/navbar.module.scss'
import { loggedIn } from "../Pages/LoginForm";

const NavBar = () => {
    const navigate = useNavigate()
    const NavbarLinks = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Doctors",
          path: '/ḍoctor',
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

      const showNavBar = (event) => {
        const parentDiv = event.currentTarget.parentNode;
        const NavItems = parentDiv.querySelector('[data-file]');

        if (NavItems.classList.contains(styles.NavItem)) {
            NavItems.classList.remove(styles.NavItem);
            NavItems.classList.add(styles.NavItemMobile);
        } else {
            NavItems.classList.remove(styles.NavItemMobile);
            NavItems.classList.add(styles.NavItem);
        }
        
      }
      console.log("Hello: ", loggedIn);

    return (
        <>
            <div style={{backgroundColor: 'white'}} className="w-full h-[100px] shadow-md flex flex-row justify-between items-center px-4">
                <div className='flex flex-row'>
                    <a href='/' className='flex flex-row items-center '>
                    <img src={logo}
                        alt='Logo'
                        className='w-[100px]'
                    />
                    <span className='text-2xl text-sky-500 font-bold'>DocAtDoor</span>
                    </a>
                </div>

                <div className='flex flex-row items-center gap-4'>
                    <div data-file={"___NavItem"} className={styles.NavItem}>
                        <nav>
                            <ul className='flex flex-row gap-x-6'>
                            {
                                NavbarLinks.map((link, index) => (
                                <li key={index} className='text-sky-500 text-lg font-semibold cursor-pointer'>
                                    <a href={link.path}>
                                        {link.title}
                                    </a>
                                </li>
                                ))
                            }
                            </ul>
                        </nav>
                    </div>
                    <div className='flex flex-row gap-x-3'>
                        <button disabled={loggedIn} style={{display: loggedIn?"none":"block"}}className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
                        hover:bg-sky-600 hover:text-white' onClick={() => navigate("/login")}>
                            Login 
                        </button>
                        <button disabled={loggedIn} style={{display: loggedIn?"none":"block"}} className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
                            hover:bg-sky-600 hover:text-white' onClick={() => navigate("/register")}>
                            Signup
                        </button>
                        <button disabled={!loggedIn} style={{display: !loggedIn?"none":"block"}} className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
                            hover:bg-sky-600 hover:text-white' onClick={() => navigate("/profile")}>
                            Profile
                        </button>
                    </div>
                    <div onClick={showNavBar} className={styles.hamburger_container}>
                        <div className={styles.hamburger_line}></div>
                        <div className={styles.hamburger_line}></div>
                        <div className={styles.hamburger_line}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar