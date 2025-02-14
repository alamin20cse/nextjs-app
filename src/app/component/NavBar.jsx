"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathname=usePathname()
    console.log(pathname);
    if(!pathname.includes("dashboard"))
    {
        return (
            <div className='flex justify-center'>
                <ul className='flex justify-center gap-5'>
                    <Link href='/'>
                    <li>Home</li>
                    </Link>
                  
                   <Link href='/services'> <li>Service</li></Link>
                   <Link href='/about'> <li>About</li></Link>
                 
                  
                </ul>
                
            </div>
        );

    }
    else
    {
        return <div></div>
    }

   
};

export default NavBar;