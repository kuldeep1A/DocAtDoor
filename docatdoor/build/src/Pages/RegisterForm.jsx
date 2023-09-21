import { useState } from 'react'
import NavBar from "../Components/Navbar";
import { doctorRegister, patientRegister } from "../API/Register"


import bg2 from '../Components/loginImg/bg2.webp'
import '../Components/CSS/FormStyle.css'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDoctor, setIsDoctor] = useState(false);
    const navigate = useNavigate();
    


    console.log(isDoctor);
    const HandleForm = (e)=>{
        e.preventDefault();
        console.log("email: ", email);
        console.log("pass: ", password);
        const details = {
         Name: name,
         Email: email,
         Password: password,
         Gender: gender,
         Age: age,
        }
        if (isDoctor) {
         console.log("call doctor");
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
        <div className="login">
         <img style={{position: 'fixed'}} src={bg2} alt="image" className="login__bg"/>
         <form action="" className="login__form">
            <h1 className="login__title">Register</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Gender" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email ID" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               

               <div className="login__box">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <div className="flex flex-col">
               {/* <div className="login__check-box">
                  <input type="checkbox" className="login__check-input" id="user-check"/>
                  <label htmlFor="user-check" className="login__check-label">Remember me</label>
               </div> */}

                {/* <a href="#" className="login__forgot">Forgot Password?</a> */}
                <label htmlFor="user-type " className="login__check-label block">Are you Doctor ?</label>
                <input type="checkbox" value={isDoctor} onChange={(e)=>setIsDoctor(e.target.checked)} className="login__check-input block" id="user-type"/>
            </div>

            <button style={{backgroundColor: 'white'}} type="submit" onClick={HandleForm} className="login__button">Register</button>

            {/* <div className="login__register">
               Don't have an account? <a href="#">Register</a>
            </div> */}
         </form>
      </div>
        </>
    )
}

export default RegisterForm;