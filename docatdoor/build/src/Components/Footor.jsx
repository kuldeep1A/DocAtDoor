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
    ];
    const treatments = [
        "Antibiotics, rest, and hydration",
        "Antibiotics, often taken for several months",
        "Bronchodilators, inhaled corticosteroids, and lifestyle management",
        "Antimalarial drugs, rest, and hydration",
        "Antihistamines, allergen avoidance, and immunotherapy",
        "Antibiotics and rest",
        "Psychotherapy, medication, and lifestyle changes"
    ];
    
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
            <div className='mt-3'>
                <ul>
                    {
                        diseases.map((disease, index) => (
                            <li key={index}>
                                <a href={`/${disease}`}>{disease}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        <div className='flex flex-col text-sky-300'>
            <h3 className='text-2xl text-sky-300'>Treatments</h3>
            <div className='mt-3'>
                <ul>
                    {
                        treatments.map((treatment, index) => (
                            <li key={index}>
                                <a href={`/${treatment.split(" ")[0].split(",")[0]}`}>{treatment}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}