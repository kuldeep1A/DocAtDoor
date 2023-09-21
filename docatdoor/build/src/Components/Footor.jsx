import logo from '../Assets/Logo/logo.png'

export const Footer = () => {
    const diseases = [
        "Pneumonia",
        "Tuberculosis",
        "Asthma",
        "Malaria",
        "Allergies",
        "Strep throat",
        "Depression"
    ]
  return (
    <div className='w-full flex flex-row justify-around items-start min-h-[250px] bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800'>
        <div className='flex items-center text-sky-200'>
            <img
                src={logo}
                alt='logo'
                className='w-[50px]'
            />
            DocAtDoor
        </div>

        <div className='flex flex-col text-sky-300'>
            <h2 className='text-2xl text-sky-300'>Diseases</h2>
            <ul>
                {
                    diseases.map((disease, index) => (
                        <li key={index}>
                            {disease}
                        </li>
                    ))
                }
            </ul>
        </div>

        <div>
            <h3>Treatments</h3>
            <ul>
                {

                }
            </ul>
        </div>
    </div>
  )
}