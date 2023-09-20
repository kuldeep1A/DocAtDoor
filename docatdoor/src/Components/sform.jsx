import { useState } from 'react';
import { CheckDoctor } from './DoctorFilter'
// const http = require('http')

// http.get('/test', (res))

export const Sform = ()=>{
    const [name, setName] = useState('');
    const [disease, setDisease] = useState('');

    const SubmitHandler = (event) =>{
        event.preventDefault();
        var obj = {Name: name, Disease: disease}
        CheckDoctor(obj)
    }
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} />
                <input type="submit"/>
            </form>
        </div>
    )
}