import { useState } from 'react'
import NavBar from "../Components/Navbar";
import { FetchUser } from '../hocks/FetchUser';

import bg2 from '../Components/loginImg/bg2.webp'
import '../Components/CSS/FormStyle.css'
import { useNavigate } from 'react-router-dom';



function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setloggedIn] = useState(false)
    const navigate = useNavigate()


    const HandleForm = (e)=>{
        e.preventDefault();
        var loggedIn = false
        if(FetchUser(name, password)){
         setloggedIn(true);
         navigate('/');
        }
        console.log(loggedIn);

    }
    console.log(loggedIn);
    return (
        <>
        <NavBar/>
         <div className="login">
         <img src={bg2} alt="image" className="login__bg"/>

         <form action="" className="login__form">
            <h1 className="login__title">Login</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Email ID" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="login__box">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>

            <div className="login__check">
               <div className="login__check-box">
                  <input type="checkbox" className="login__check-input" id="user-check"/>
                  <label htmlFor="user-check" className="login__check-label">Remember me</label>
               </div>

                <a href="#" className="login__forgot">Forgot Password?</a>
                {/* <input type="checkbox" className="login__check-input" id="user-type"/>
                <label for="user-type" className="login__check-label">UserType</label> */}
            </div>

            <button style={{backgroundColor: 'white'}} type="submit" onClick={HandleForm} className="login__button">Login</button>

            <div className="login__register">
               Don&apos;t have an account? <a href="#">Register</a>
            </div>
         </form>
      </div>
        </>
    )
}

export default LoginForm;