import { database } from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";

const Doctors = collection(database, "DoctorsRegister");

var Filed = [{}]
function setFiled(data) {
    console.log("data: ", data);
    Filed = data;
}

export const FetchDoctorDetials = (event) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [Filed, setFiled] = useState([{}]);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    var flag = false;
    const getDetails = () => {
        const _query = query(Doctors)
        onSnapshot(_query, (response) => {
            setFiled(response.docs.map((item) => {
                console.log("response: ", item.data(), item.id);
                flag = true;
                return { ...item.data(), id: item.id }
            }))
        })
    }

    getDetails();

    const i = setInterval(() => {
        if (flag) {
            clearInterval(i);
            event(Filed);
        }
    }, 250);
}

