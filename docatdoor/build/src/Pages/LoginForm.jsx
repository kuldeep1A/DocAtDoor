import { useState } from 'react'
import NavBar from "../Components/Navbar";
import { FetchUser } from '../hocks/FetchUser';
import bg2 from '../assets/loginImg/bg2.webp';
import styles from "../Components/SCSS/loginform.module.scss";
import { useNavigate } from 'react-router-dom';
import { Slider } from '../Components/slider';


export var loggedIn = false;
export var currentUser = null

function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(true);
    const navigate = useNavigate()


    const HandleForm = (e)=>{
        e.preventDefault();
        FetchUser(name, password, isDoctor, (data)=>{
         if (data.length > 0){
            loggedIn = true;
            currentUser = data[0].id;
            navigate('/')
         }
        })

    }
    console.log(loggedIn);
    return (
        <>
        <NavBar/>
         <div className={styles.login}>
         <img style={{position: 'fixed', zIndex: -1}} src={bg2} alt="image" className={styles.login__bg}/>

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

            <center style={{fontWeight: 'bold'}}>
               <label style={{color: isDoctor?"white":"#FFFFFF15"}} htmlFor="">Doctor</label>
               <Slider onClick={()=>setIsDoctor(!isDoctor)} Color="#33B099"/>
               <label style={{color: isDoctor?"#FFFFFF15":"white"}} htmlFor="">Patient</label>
            </center>

            <div className={styles.login__register}>
               Don&apos;t have an account? <a onClick={()=>navigate('/Register')}>Register</a>
            </div>
         </form>
      </div>
        </>
    )
}

export default LoginForm;