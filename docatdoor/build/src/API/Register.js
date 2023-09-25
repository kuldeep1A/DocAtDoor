import { database } from "../firebase";
import { collection, addDoc, } from "firebase/firestore";

const docotrCollection = collection(database, 'DoctorsRegister');
const patientCollection = collection(database, 'PatientRegister');
// const Empty_no = collection(database, 'empty_no');

export const doctorRegister = async (RegDetials) => {
    
    try {
        await addDoc(docotrCollection, {
            Name: RegDetials.Name,
            Email: RegDetials.Email,
            Specialization: RegDetials.Specialization,
            Password: RegDetials.Password,
            Gender: RegDetials.Gender,
            Age: RegDetials.Age,
            Address: RegDetials.Address
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

export const patientRegister = async (RegDetials) => {
    console.log("RegDetials: ", RegDetials);
    try {
        await addDoc(patientCollection, {
            Name: RegDetials.Name,
            Email: RegDetials.Email,
            Password: RegDetials.Password,
            Gender: RegDetials.Gender,
            Age: RegDetials.Age,
            Address: RegDetials.Address
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}


