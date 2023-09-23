
import { useState } from 'react';
import { CheckDoctor } from './DoctorFilter'
import NavBar from '../Navbar';
import styles from '../SCSS/simple.module.scss'

// const http = require('http')

// http.get('/test', (res))

var list = []
var ui = []

export const Sform = ()=>{
    const [name, setName] = useState('');
    const [disease, setDisease] = useState('');
    const [render, setRender] = useState(true);

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
        <div>
            <NavBar/>
            <form className={styles.form} onSubmit={SubmitHandler}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Disease</label>
                <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                <input className={styles.submit} type="submit" value={"Search"}/>
            </form>
            <DocList Doctors={ui}/>
        </div>
    )
}

function DocUi(params) {
    function pr(params) {
        console.log("params: ", params);
    }
    return(
        <center className={styles.item}>
            <h2>Dr. {params.Name}</h2>    
            <h2>Spec. {params.Specialization}</h2>    
            <h2>Rating {params.Rating}</h2>    
            <button onClick={()=>pr(params.Id)}>Book</button>
        </center>
    )
}

function DocList(params){
    return (
        <div>
            {params.Doctors}
        </div>
    )
}