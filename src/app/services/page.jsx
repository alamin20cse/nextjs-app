import Link from 'next/link';
import React from 'react';





const Servicepage = () => {
    const data=[
        {
          "_id": "60d21b4667d0d8992e610c86",
          "service_name": "TechFix",
          "service_image": "https://i.ibb.co.com/tM58dZWb/download-8.jpg",
          "service_description": "TechFix provides comprehensive repair and maintenance services for electronic devices, including smartphones, laptops, and tablets."
        },
        {
          "_id": "60d21b4667d0d8992e610c87",
          "service_name": "FitLife",
          "service_image": "https://i.ibb.co.com/tM58dZWb/download-8.jpg",
          "service_description": "FitLife offers personalized fitness training programs, diet plans, and wellness coaching to help individuals achieve their health goals."
        },
        {
          "_id": "60d21b4667d0d8992e610c88",
          "service_name": "AutoCare",
          "service_image": "https://i.ibb.co.com/tM58dZWb/download-8.jpg",
          "service_description": "AutoCare provides professional vehicle servicing, repairs, and detailing to keep your car in top condition."
        },
        {
          "_id": "60d21b4667d0d8992e610c89",
          "service_name": "EduSmart",
          "service_image": "https://i.ibb.co.com/tM58dZWb/download-8.jpg",
          "service_description": "EduSmart offers online tutoring, educational workshops, and career guidance for students of all ages."
        },
        {
          "_id": "60d21b4667d0d8992e610c90",
          "service_name": "HomeFix",
          "service_image": "https://i.ibb.co.com/tM58dZWb/download-8.jpg",
          "service_description": "HomeFix specializes in home repair, plumbing, and electrical services to ensure your home remains safe and functional."
        }
      ]
      



    return (
        <div>
            <h1>Services page</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                data.map((d)=>{
                    return (
                        <div className='my-5 bg-red-200'>
                            <Link href={`/services/${d._id}`} >
                            <img className='w-full' src={d.service_image} alt="" />
                            <h1>{d.service_name}</h1>
                            
                            </Link>
                           
                            </div>
                    )
                })
            }
            </div>
           
            
        </div>
    );
};

export default Servicepage;