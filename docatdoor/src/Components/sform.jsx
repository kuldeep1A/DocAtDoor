import { useState } from 'react';
import { CheckDoctor } from './DoctorFilter'
// const http = require('http')

// http.get('/test', (res))

var list = []
var ui = [<div>Empty</div>]

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
            ui.push(<DocUi Name={ele.Name} Specialization={ele.Specialization}/>)
        }
        // console.log("UI");
        // console.log(ui);
        console.log(render);
        setRender(!render)
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                <input type="submit"/>
            </form>
            <DocList Doctors={ui}/>
        </div>
    )
}

function DocUi(params) {
    return(
        <center>
            <h2>{params.Name}</h2>    
            <h2>{params.Specialization}</h2>    
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