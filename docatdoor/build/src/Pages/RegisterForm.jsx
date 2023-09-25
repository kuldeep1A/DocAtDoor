import { useState } from 'react'
import NavBar from "../Components/Navbar";
import { doctorRegister, patientRegister } from "../API/Register"
import bg2 from '../assets/loginImg/bg2.webp'
import { useNavigate } from 'react-router-dom';
import styles from "../Components/SCSS/registerform.module.scss"
import "../Components/SCSS/RevealHide.css"
import { doc } from '@firebase/firestore';
import { Slider } from '../Components/slider';

function RegisterForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [password, setPassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(true);
    
    const navigate = useNavigate();
    

    console.log(isDoctor);
    document.documentElement.style.setProperty("--height", isDoctor?"100%":"0")
    document.documentElement.style.setProperty("--box-height", isDoctor?"4rem":"0rem")
    document.documentElement.style.setProperty("--pad-height", isDoctor?"1.25rem":"0rem")


    const HandleForm = (e)=>{
      //   e.preventDefault();
        console.log("email: ", email);
        console.log("pass: ", password);
        const details = {
         Name: name,
         Email: email,
         Password: password,
         Gender: gender,
         Age: age,
         Address: address
        }
        if (isDoctor) {
         console.log("call doctor");
         details['Specialization'] = specialization
         doctorRegister(details)
        } else {
         console.log("call patinet");
         patientRegister(details)
        }
        if (email !== "") {
         navigate('/login')
         setName("")
         setAge("")
         setEmail("")
         setPassword("")
         setIsDoctor(false)
        }
    }


    return (

        <>
        <NavBar />
        <div className={styles.login}>
         <img style={{position: "fixed", zIndex: -1}} src={bg2} alt="image" className={styles.login__bg}/>
         <form action="" className={styles.login__form}>
            <h1 className={styles.login__title}>Register</h1>

            <div className={styles.login__inputs}>
               <div className={styles.login__box}>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required className={styles.login__input}/>
               </div>
               <div className={styles.login__box}>
                  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" required className={styles.login__input}/>
               </div>
               <div className={styles.login__box}>
                  <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Gender" required className={styles.login__input}/>
               </div>
               <div className={styles.login__box}>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email ID" required className={styles.login__input}/>
               </div>
               <div className={styles.login__box}>
                  <input type="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" required className={styles.login__input}/>
               </div>
               
               <div className={'box'}>
                  <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} placeholder="Specialization" required className={"reveal"}/>
                  {/* <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className={styles.login__input}/> */}
               </div>

               <div className={styles.login__box}>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className={styles.login__input}/>
               </div>
            </div>

            <center style={{fontWeight: 'bold'}}>
               <label style={{color: isDoctor?"white":"#FFFFFF15"}} htmlFor="">Doctor</label>
               <Slider onClick={()=>setIsDoctor(!isDoctor)} Color="#33B099"/>
               <label style={{color: isDoctor?"#FFFFFF15":"white"}} htmlFor="">Patient</label>
               <br />
               <br />
            </center>

            <button style={{backgroundColor: 'white'}} type="submit" onClick={HandleForm} className={styles.login__button}>Register</button>

         </form>
      </div>
        </>
    )
}

export default RegisterForm;