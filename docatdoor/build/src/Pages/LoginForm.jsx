import { useState } from 'react'
import NavBar from "../Components/Navbar";
import { FetchUser } from '../hocks/FetchUser';
import bg2 from '../assets/loginImg/bg2.webp';
import styles from "../Components/SCSS/loginform.module.scss";
import { useNavigate } from 'react-router-dom';


export var loggedIn = false;

function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    const HandleForm = (e)=>{
        e.preventDefault();
        FetchUser(name, password, (data)=>{
         if (data.length > 0){
            loggedIn = true;
            navigate('/')
         }
        })

    }
    console.log(loggedIn);
    return (
        <>
        <NavBar/>
         <div className={styles.login}>
         <img src={bg2} alt="image" className={styles.login__bg}/>

         <form action="" className={styles.login__form}>
            <h1 className={styles.login__title}>Login</h1>

            <div className={styles.login__inputs}>
               <div className={styles.login__box}>
                  <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Email ID" required className={styles.login__input}/>
               </div>

               <div className={styles.login__box}>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className={styles.login__input}/>
               </div>
            </div>

            <div className={styles.login__check}>
               <div className={styles.login__check__box}>
                  <input type="checkbox" className={styles.login__check__input} id="user-check"/>
                  <label htmlFor="user-check">Remember me</label>
               </div>

                <a href="#" className={styles.login__forgot}>Forgot Password?</a>
            </div>

            <button style={{backgroundColor: 'white'}} type="submit" onClick={HandleForm} className={styles.login__button}>Login</button>

            <div className={styles.login__register}>
               Don&apos;t have an account? <a href="#">Register</a>
            </div>
         </form>
      </div>
        </>
    )
}

export default LoginForm;