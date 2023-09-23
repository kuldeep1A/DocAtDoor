import { database } from "../firebase";
import { onSnapshot, collection, where, query } from "firebase/firestore";


const DoctorsData = collection(database, "DoctorsRegister");
const PatientsData = collection(database, "PatientRegister");

var Filed = [{}]
function setFiled(data) {
    Filed = data;
}
export const FetchUser = (UserEmail, Password, isDoctor, event) => {
    // const [Filed, setFiled] = useState([{}]);

    var flag = false;
    const _query = query(isDoctor?DoctorsData:PatientsData, where("Email", "==", UserEmail, "and", "Password", "==", Password))
    const getDetails = ()=>{
        onSnapshot(_query, (response) => {
            setFiled(response.docs.map((item)=>{
                console.log("response: ", item.data(), item.id);
                flag = true
                return {...item.data(), id: item.id}
            }))
        })
    }
    getDetails();
    var i = 0
    const interval = setInterval(() => {
        i++;
        if (flag || i > 10){
            clearInterval(interval)
            event(Filed);
        }
    }, 250);
}