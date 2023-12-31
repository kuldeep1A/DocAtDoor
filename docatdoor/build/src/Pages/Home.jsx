import NavBar from "../Components/Navbar";
import img1 from '../assets/Images/HomeImages/doctor.png'
import img2 from '../assets/Images/HomeImages/nurse.png'
import img3 from '../assets/Images/HomeImages/examination.png'
import img4 from '../assets/Images/HomeImages/nutritionist.png'
import img5 from '../assets/Images/HomeImages/medical-checkup.png'
import img6 from '../assets/Images/HomeImages/hospital.png'
import styles from "../Components/SCSS/home.module.scss"
import { ReviewSlider } from "../Components/ReviewSlider";
import { Footer } from "../Components/Footor";

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className={`w-full h-[500] ${styles.main}`}>
        <div className='bg-gradient-to-l from-sky-200 via-sky-100 to-transparent min-h-max py-8'>
          <div className='w-full flex flex-col items-center'>
            
            {/* image section  */}
              <div className='w-[400px] grid grid-cols-2 justify-center content-center mx-auto m-3'>

              <div className='flex justify-center items-center border-r-2 border-b-2 border-sky-600 border-dashed aspect-square p-0'>
                <img
                  src={img1}
                  alt='doctor'
                  className='w-[200px]'
                />
              </div>
              <div className='flex justify-center items-center border-b-2 border-sky-600 border-dashed aspect-square'>
                <img
                  src={img2}
                  alt='doctor'
                  className='w-[10rem] aspect-square'
                />
              </div>
              <div className='flex justify-center items-center border-r-2 border-sky-600 border-dashed aspect-square'>
                <img
                  src={img3}
                  alt='doctor'
                  className='w-[10rem] aspect-square'
                />
              </div>
              <div className='flex justify-center items-center aspect-square'>
                <img
                  src={img4}
                  alt='doctor'
                  className='w-[10rem] aspect-square'
                />
              </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <h1 className={`text-sky-600 font-bold text-4xl ${styles.apointment}`}>
                Get An Appointment
              </h1>
              <p className='text-md text-gray-600 w-[80%] text-center'>
                Our dedicated team is committed to providing compassionate and personalized care for you and your loved ones.
                The assistance is a click away
              </p>
              <button type='button' className='uppercase bg-sky-600 text-white px-3 py-2 rounded-md font-medium hover:bg-sky-700 shadow-md hover:text-yellow-50'>
                Book Appointment
              </button>
            </div>
          </div>
      </div>

      {/*second section --> quote */}
      <div className={`bg-sky-600 h-[200px] text-4xl text-center flex items-center justify-center ${styles.quote}`}>
        <p className='w-[90%] text-sky-100 font-medium leading-normal'>
          Your <span className='text-pink-700'> health </span> 
          and <span className='text-pink-700'> well-being </span> 
          are our <span className='text-yellow-400'> top priorities </span>, 
           and we&apos;re here to <span className='text-yellow-400'>support</span> you on your  <span className='text-pink-700'>healthcare journey</span> .
        </p>
      </div>

      {/* third section  */}
      <div className='bg-gradient-to-r from-sky-200 via-sky-100 to-transparent min-h-max py-8 
      flex flex-col justify-center items-center gap-10 pt-[5rem]'>
          <h2 className='text-[3rem] text-gray-600 font-medium'>
            What we Offer?
          </h2>
          <div className='w-9/12 flex flex-col items-center gap-[5rem]'>
          {/* for Doctors */}
            <div className='flex flex-row items-center  px-5 py-3 rounded-lg border-r-[5px]  border-sky-600 gap-8 w-[80%] shadow-md'>
              <p className='text-[1rem] text-gray-600'>
                <span className='text-3xl text-sky-600 font-medium'>If You are a healthcare Professional... </span><br/>
                Our website offers a comprehensive platform for doctors like you to efficiently manage and grow your patient base. With our user-friendly interface, you can easily set up your profile, list your services, and manage appointments, all in one place. 
              </p>
              <img
                src={img5}
                alt='healthcare professional'
                className='w-[200px]'
              />
            </div>

            {/* for patients  */}
            <div className='flex flex-row items-center  px-5 py-3 rounded-lg border-l-[5px] border-sky-600 gap-8 w-[80%] shadow-md'>
              <img
                src={img6}
                alt='healthcare professional'
                className='w-[200px]'
              />
              <p className='text-[1rem] text-gray-600'>
                <span className='text-3xl text-sky-600 font-medium'>If You are seeking a medical advice... </span><br/>
                Our platform simplifies the appointment booking process, allowing you to schedule consultations and treatments at your convenience. You can explore doctor profiles, read patient reviews, and access valuable healthcare resources, all in one place. 
              </p>
              
            </div>
          </div>
      </div>

      {/* fourth section --> reviews  */}
      <div className='bg-gradient-to-l from-sky-200 via-sky-100 to-transparent min-h-max py-8 flex flex-col justify-center gap-10'>
        <h3 className='text-[3rem] text-gray-600 font-medium text-center'>
          Reviews from Our Patients
        </h3>

        <div className='w-10/12 mx-auto'>
        <ReviewSlider/>
        </div>
      </div>

      {/* fifth section  */}
      <Footer/>
    </div>
    </>
  )
}
export default Home;