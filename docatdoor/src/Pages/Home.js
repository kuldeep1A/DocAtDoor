import React from 'react'
import img1 from '../Assets/Images/HomeImages/doctor.png'
import img2 from '../Assets/Images/HomeImages/nurse.png'
import img3 from '../Assets/Images/HomeImages/examination.png'
import img4 from '../Assets/Images/HomeImages/nutritionist.png'

export const Home = () => {

  const images = [img1, img2, img3, img4]

  return (
    <div className='w-full'>
      {/* first section  */}
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
              <h1 className='text-sky-600 font-bold text-4xl'>
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
      <div className='bg-sky-600 h-[200px] text-4xl text-center flex items-center justify-center'>
        <p className='w-[90%] text-sky-100 font-medium leading-normal'>
          Your <span className='text-pink-700'> health </span> 
          and <span className='text-pink-700'> well-being </span> 
          are our <span className='text-yellow-400'> top priorities </span>, 
           and we're here to <span className='text-yellow-400'>support</span> you on your  <span className='text-pink-700'>healthcare journey</span> .
        </p>
      </div>

      {/* third section  */}
      <div className='bg-gradient-to-r from-sky-200 via-sky-100 to-transparent min-h-max py-8'>
          <h2>
            What we Offer?
          </h2>
      </div>
    </div>
  )
}
