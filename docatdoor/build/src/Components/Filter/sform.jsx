
import { useState } from 'react';
import { CheckDoctor } from './DoctorFilter'
import NavBar from '../Navbar';
import styles from '../SCSS/simple.module.scss'
import { doc } from '@firebase/firestore';
import ChatWindow from '../ChatWindows';

// const http = require('http')

// http.get('/test', (res))

var list = []
var ui = []
var renderDetails = true;

export const Sform = ()=>{
    const [name, setName] = useState('');
    const [disease, setDisease] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [address, setAddress] = useState();
    const [render, setRender] = useState(true);

    // document.documentElement.style.overflow = "hidden";

    const SubmitHandler = (event) =>{
        event.preventDefault();
        var obj = {Name: name, Disease: disease}
        list = CheckDoctor(obj)
        ui = []

        for(let i = 0; i < list.length; i++){
            const ele = list[i]
            ui.push(<DocUi Name={ele.Name} Specialization={ele.Specialization} Rating={ele.Rating} Id={ele.Id}/>)
        }
        // console.log("UI");
        // console.log(ui);
        console.log(render);
        setRender(!render)
    }
    return (
        <div className={styles.scrollFix}>
            <NavBar/>
            <form className={styles.form} onSubmit={SubmitHandler}>
                <div className={styles.gridBox}>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="">Symptoms</label>
                    <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                    <label htmlFor="">Age</label>
                    <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                    <label htmlFor="">Gender</label>
                    <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                    <label htmlFor="">Address</label>
                    <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                    <input className={styles.submit} type="submit" value={"Search"}/>
                </div>
            </form>
            <ChatWindow/>
            <DocList Doctors={ui}/>
        </div>
    )
}

var bookList = []

function DocUi(params) {
    const [render, setRender] = useState(false)

    const Vehdat = {
        Id: 0,
        Name: "Vehdat",
        Specialization: "Fever",
        Rating: "⭐⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    }

    const book = (doctor)=>{
        // console.log("doctor book: ", doctor);
        // console.log("Ele: ", arr);
        bookList = []
        renderDetails = true;
        bookList.push(<Details redner={true} Doctor={params}/>)
        console.log(render);
        setRender(!render)
    }
    return(
        <>
        <div>{bookList}</div>
        <center className={styles.item}>
            <h2>Dr. {params.Name}</h2>    
            <h2>Spec. {params.Specialization}</h2>    
            <h2>Rating {params.Rating}</h2>    
            <button onClick={()=>book()}>Book</button>
        </center>
        </>
    )
}

function DocList(params){
    return (
        <div>
            {params.Doctors}
        </div>
    )
}


function Details(params){
    const [render, setRender] = useState(params.render)
    
    const doctor = params.Doctor;

    const hide = ()=>{
        var detailsDoc = document.getElementById('det');
        console.log("Render: ", render);
        
        detailsDoc.classList.remove(styles.rollouts);
        void detailsDoc.offsetWidth;
        detailsDoc.style.animationDirection = "reverse"
        detailsDoc.classList.add(styles.rollouts);

        setTimeout(() => {
            renderDetails = false; 
            setRender(!render);
        }, 450);
        

    }
    return(
        <>
        {
            renderDetails?
        
        <div id='det' className={`${styles.details} ${styles.rollouts}`}>
            <center className={styles.field}>
                <label>Name</label>
                <h1>{doctor.Name}</h1>
            </center>
            <center className={styles.field}>
                <label>Specialization</label>
                <h1>{doctor.Specialization}</h1>
            </center>
            <center className={styles.field}>
                <label>Rating</label>
                <h1>{doctor.Rating}</h1>
            </center>
            <button className={`${styles.appointBtn} ${styles.rollouts}`} onClick={()=>{hide()}}>Book</button>
            </div>
        : <></>}

        </>
    )
}