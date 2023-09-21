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
        Rating: "⭐⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    KullDeep: {
        Name: "Kuldeep",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Harish: {
        Name: "Harish",
        Specialization: "Fever",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Jyoti: {
        Name: "Jyoti",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Virendra: {
        Name: "Virendra",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Aayush: {
        Name: "Aayush",
        Specialization: "rabies",
        Rating: "⭐⭐⭐⭐",
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