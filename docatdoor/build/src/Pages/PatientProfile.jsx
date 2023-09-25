import { useState } from 'react'

import NavBar from '../Components/Navbar'
import img from '../assets/Images/HomeImages/user.png'
import bg2 from '../assets/loginImg/bg2.webp';
import '../Components/SCSS/Profile.css'

import LoginForm, { loggedIn, currentUser } from './LoginForm';


export default function PatientProfile(){
    const [name, setName] = useState(currentUser?.Name);
    const [age, setAge] = useState(currentUser?.Age);
    const [email, setEmail] = useState(currentUser?.Email);
    const [address, setAddress] = useState(currentUser?.Address);
    const [isChanged, setIsChanged] = useState(false);

    const updateBtnSize = isChanged?"1rem":"0rem"

    console.log("loggedIn: ", loggedIn);
    function clamp(age) {
        if (age){
            age = Math.max(0, Math.min(200, age));
            setAge(age)
        }else{
            setAge()
        }
    }

    return(
        <>
            <NavBar/>
            <img style={{position: 'fixed', zIndex: -1}} src={bg2} alt="image" className="login__bg"/>
            
            <form action="">
                <div className='holder'>
                    <img className='profilepic' src={img} alt="" />
                </div>

                <div className='holder'>
                    <input id='name' className='field' type="text" value={name} placeholder=' ' onChange={(e)=>{setIsChanged(true); setName(e.target.value)}} spellCheck="false"/>
                    <div className='underline'></div>
                    <label className="label">Name</label>
                </div>

                <div className='holder'>
                    <input className='field' type="number" value={age} placeholder=' ' onChange={(e)=>{setIsChanged(true); clamp(e.target.value)}} spellCheck="false"/>
                    <div className='underline'></div>
                    <label className="label">Age</label>
                </div>

                <div className='holder'>
                    <input className='field' type="email" value={email} placeholder=' ' onChange={(e)=>{setIsChanged(true); setEmail(e.target.value)}} spellCheck="false"/>
                    <div className='underline'></div>
                    <label className="label" >Email</label>
                </div>

                <div className='holder'>
                    <input className='field' type="address" value={address} placeholder=' ' onChange={(e)=>{setIsChanged(true); setAddress(e.target.value)}} spellCheck="false"/>
                    <div className='underline'></div>
                    <label className="label" >Address</label>
                </div>

                <div className='holder'>
                    <button type='submit' style={{"--update-btn-size": updateBtnSize}} className='updateBtn'>Save Changes</button>
                </div>
            </form>

        </>
    )
}
