
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Aboutpage = () => {
    const router=useRouter();
    const isLoggedIn=true;
    const handleNavigation=(e)=>{
        if(isLoggedIn)
        {
            router.push('/about/adress');
        }
        else
        {
            router.push('/')
        }


    }
    return (
        <div>
          
            <h1 className='text-3xl'>About page</h1>
            <h1>Go to   <Link href='/about/adress'> <li>Adress</li></Link></h1>
            <button tu className='btn ' onClick={handleNavigation}>Adress Button</button>
            
        </div>
    );
};

export default Aboutpage;