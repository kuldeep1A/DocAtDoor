import styles from "../Components/SCSS/contact.module.scss"
import NavBar from "../Components/Navbar"

function Contact() {
    return (
      <app-root>
      <NavBar/>
      <div className={styles.main}>
        <div className="relative flex item-center justify-center top-80 text-3xl">Contact</div>
      </div>
    </app-root>
    )
}
  
export default Contact