import { database } from "../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";


const DoctorsData = collection(database, "DoctorsRegister");

var Filed = [{}]
function setFiled(data) {
    Filed = data;
}
export const FetchUser = (UserEmail, Password) => {
    // const [Filed, setFiled] = useState([{}]);
    const _query = query(DoctorsData, where("Email", "==", UserEmail, "and", "Password", "==", Password))
    const getDetails = ()=>{
        onSnapshot(_query, (response) => {
            setFiled(response.docs.map((item)=>{
                console.log("response: ", item.data(), item.id);
                return {...item.data(), id: item.id}
            }))
        })
    }
    getDetails();
    console.log("Filed: ", Filed );
    if (Filed[0].Password !== Password){
        return false;
    }
    return true;
}