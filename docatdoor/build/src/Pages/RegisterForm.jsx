import { useState } from 'react'

import bg2 from '../Components/loginImg/bg2.webp'
import '../Components/CSS/FormStyle.css'

function RegisterForm(params) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const HandleForm = (e)=>{
        e.preventDefault();
        alert("Registered");
    }
    return (
        <div class="login">
         <img style={{position: 'fixed'}} src={bg2} alt="image" class="login__bg"/>
         <form action="" class="login__form">
            <h1 class="login__title">Login</h1>

            <div class="login__inputs">
               <div class="login__box">
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>
               <div class="login__box">
                  <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>
               <div class="login__box">
                  <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Gender" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>
               <div class="login__box">
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email ID" required class="login__input"/>
                  <i class="ri-mail-fill"></i>
               </div>

               <div class="login__box">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required class="login__input"/>
                  <i class="ri-lock-2-fill"></i>
               </div>
            </div>
{/* 
            <div class="login__check">
               <div class="login__check-box">
                  <input type="checkbox" class="login__check-input" id="user-check"/>
                  <label for="user-check" class="login__check-label">Remember me</label>
               </div>

                <a href="#" class="login__forgot">Forgot Password?</a>
                {/* <input type="checkbox" class="login__check-input" id="user-type"/>
                <label for="user-type" class="login__check-label">UserType</label> */}
            {/* </div> */}

            <button style={{backgroundColor: 'white'}} type="submit" onClick={HandleForm} class="login__button">Register</button>

            {/* <div class="login__register">
               Don't have an account? <a href="#">Register</a>
            </div> */}
         </form>
      </div>
    )
}

export default RegisterForm;