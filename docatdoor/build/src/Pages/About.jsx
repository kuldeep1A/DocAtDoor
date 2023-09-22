import styles from "../Components/SCSS/about.module.scss"
import NavBar from "../Components/Navbar"

function About() {
  return (
    <app-root>
      <NavBar/>
      <div className={styles.main}>
        <div className="relative flex item-center justify-center top-80 text-3xl">About</div>
      </div>
    </app-root>
  )
}

export default About