// import { log } from 'console'
import {FetchDoctorDetials} from '../../hocks/FetchDoctorDetails'

var dd = {
    Vehdat: {
        Id: 0,
        Name: "Vehdat",
        Specialization: "Fever",
        Rating: "⭐⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    KullDeep: {
        Id: 1,
        Name: "Kuldeep",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Harish: {
        Id: 2,
        Name: "Harish",
        Specialization: "Fever",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Jyoti: {
        Id: 3,
        Name: "Jyoti",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Virendra: {
        Id: 4,
        Name: "Virendra",
        Specialization: "Cold",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    },
    Aayush: {
        Id: 5,
        Name: "Aayush",
        Specialization: "rabies",
        Rating: "⭐⭐⭐⭐",
        Schedule: "1-4",
        Experience: 15
    }
}

export const CheckDoctor = (userData)=>{
    // var doctors = {}
    // FetchDoctorDetials((data)=>{
    //     for (let i = 0; i < data.length; i++) {
    //         const element = data[i];
    //         console.log(`Element: ${element.Name}, ${element.Email}`);
    //     }
    // })

    var keys = Object.keys(dd)
    var filtered_list = []

    for (let i = 0; i < keys.length; i++) {
        const doctor = dd[keys[i]];
        // console.log(doctor);
        // console.log(userData);
        if (doctor['Specialization'] === userData['Disease']){
            filtered_list.push(doctor);
        }
    }

    return filtered_list;
}