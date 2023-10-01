import { database } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const docotrCollection = collection(database, "DoctorsRegister");
const patientCollection = collection(database, "PatientRegister");
const userDataCollection = collection(database, "UserData");
// const Empty_no = collection(database, 'empty_no');

const AddUserData = async (event) => {
  try {
    await addDoc(userDataCollection, {}).then(docRef=>{
      event(docRef.path)
      console.log("Path: ", docRef.path);
    })
  } catch (error) {
    console.log("Error while creating user data: ", error);
  }
}

export const doctorRegister = async (RegDetials) => {
  AddUserData( async (path)=>{
    try {
      await addDoc(docotrCollection, {
        Name: RegDetials.Name,
        Email: RegDetials.Email,
        Specialization: RegDetials.Specialization,
        Password: RegDetials.Password,
        Gender: RegDetials.Gender,
        Age: RegDetials.Age,
        Address: RegDetials.Address,
        UserDataPath: path
      });
    } catch (error) {
      alert(error);
    }

  })
};

export const patientRegister = async (RegDetials) => {
  AddUserData( async (path)=>{
    try {
      await addDoc(patientCollection, {
        Name: RegDetials.Name,
        Email: RegDetials.Email,
        Password: RegDetials.Password,
        Gender: RegDetials.Gender,
        Age: RegDetials.Age,
        Address: RegDetials.Address,
        UserDataPath: path
      });
    } catch (error) {
      alert(error);
    }
    
  })
};
