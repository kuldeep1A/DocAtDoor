import { database } from "../firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

export const RequestAppointment = async (userDataPath, user)=>{
    console.log("userDataPath: ", userDataPath);
    const dataDoc = doc(database, userDataPath)
    const result = await getDoc(dataDoc);
    if (result.exists()){
        const appointments = result.data().RequestedAppointments;
        var s = []
        s.includes(user)
        console.log("Result: ", result.data());
    }
    // updateDoc(dataDoc, {
    //     RequestedAppointments: arrayUnion("Kuldeep Request")
    // })
}