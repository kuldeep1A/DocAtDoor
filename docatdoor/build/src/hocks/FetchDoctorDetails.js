import { database } from "../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const Doctors = collection(database, "Doctors");

var Filed = [{}]
function setFiled(data) {
    Filed = data;
}

export const FetchDoctorDetials = (DoctorEmail) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [Filed, setFiled] = useState([{}]);
    setFiled([{}])

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDetails = () => {
        if (DoctorEmail){
            const _query = query(Doctors, where("doctorEmail", "==", DoctorEmail))
            onSnapshot(_query, (response) => {
                console.log(response);
            })
        }
    }

    getDetails();
    // useEffect(() => {
    // }, [getDetails]);
    
    return { Filed };    
}

