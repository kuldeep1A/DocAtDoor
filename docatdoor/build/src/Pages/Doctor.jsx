import { useState } from "react"
import { FetchDoctorDetials } from "../hocks/FetchDoctorDetails";
import styles from "./pages.module.scss"

function Doctor() {
    const [email, setEmail] = useState("");
    const availableDoc = () => {
      console.log(FetchDoctorDetials(email));
    }
    return (
      <>
        <div>
            <div className="inline-block ml-2.5 relative">
                {/* <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                <button onClick={() => availableDoc()} className={`${styles.uploadBtn} absolute`}>+</button> */}

                <input type="email" value={email} placeholder="write" onChange={(event) => setEmail(event.target.value)} className={styles.doctorInput}/>
                <button onClick={() => {availableDoc()}}>Submit</button>
            </div> 
        </div>
      </>
    )
  }
  
  export default Doctor