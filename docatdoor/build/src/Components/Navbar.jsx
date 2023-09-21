import logo from '../Assets/Logo/logo.png'
import styles from './navbar.module.scss'

const NavBar = () => {
    const NavbarLinks = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "Doctors",
          path: '/doctor',
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

    return (
        <>
            <div className="w-full h-[100px] shadow-md flex flex-row justify-between items-center px-4">
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
                        <button className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
                        hover:bg-sky-600 hover:text-white'>
                            Login
                        </button>
                        <button className='border-2 border-sky-500 text-sky-600 px-3 py-2 rounded-md font-medium uppercase
                            hover:bg-sky-600 hover:text-white'>
                            Signup
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