import { useState } from 'react';
import { CheckDoctor } from '../Components/Filtering/DoctorFilter'
import NavBar from '../Components/Navbar';
import '../CSS/UserDataForm.css'
import '../CSS/Doctoritem.css'

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
            ui.push(<DocUi Name={ele.Name} Specialization={ele.Specialization} Review={ele.Review}/>)
        }

        console.log(render);
        setRender(!render)
    }
    return (
        <div>
            <NavBar/>
            <form className='form' onSubmit={SubmitHandler}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Disease</label>
                <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                <input className='submit' type="submit"/>
            </form>
            <DocList Doctors={ui}/>
        </div>
    )
}

function DocUi(params) {
    return(
        <div className='item'>
            <h2>Name: {params.Name}</h2>
            <h2>Specialization: {params.Specialization}</h2>
            <h2>Reviews: {params.Review}</h2>
            <button>Book</button>
        </div>
    )
}

function DocList(params){
    return (
        <div>
            {params.Doctors}
        </div>
    )
}

export default Sform;