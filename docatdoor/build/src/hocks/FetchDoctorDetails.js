import { database } from "../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { useState } from "react";

const Doctors = collection(database, "Doctors");

// var Filed = [{}]
// function setFiled(data) {
//     Filed = data;
// }

export const FetchDoctorDetials = (DoctorEmail) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Filed, setFiled] = useState([{}]);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDetails = () => {
        if (DoctorEmail){
            const _query = query(Doctors, where("doctorEmail", "==", DoctorEmail))
            onSnapshot(_query, (response) => {
                setFiled(
                    response.docs.map((item) => {
                        return {...item.data(), id: item.id}
                    })
                )
            })
        }
    }

    getDetails();
    // useEffect(() => {
    // }, [getDetails]);
    
    return { Filed };    
}

