import Link from 'next/link';
import React from 'react';

const NavBar = () => {
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
};

export default NavBar;