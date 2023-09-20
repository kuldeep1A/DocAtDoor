import { useState } from 'react';
import { DoctorList } from "./Components"


var data = {
    Category: "Fever",
    age: 15, 
    locality: "Mandsaur"
}

var dd = {
    Vehdat: {
        Name: "Vehdat",
        Specialization: "Fever",
        Review: "⭐⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    KD: {
        Name: "KD",
        Specialization: "Fever",
        Review: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    }
}

export const CheckDoctor = (userData)=>{
    // var doctors = {}
    var keys = Object.keys(dd)
    var filtered_list = []

    for (let i = 0; i < keys.length; i++) {
        const doctor = dd[keys[i]];
        console.log(doctor);
        console.log(userData);
        if (doctor['Specialization'] === userData['Disease']){
            filtered_list.push(doctor);
        }
    }

    return filtered_list;
}