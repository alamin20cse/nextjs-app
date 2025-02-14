import React from 'react';

const Dashboardlayout = ({children}) => {
    return (
        <div>
{/* all page */}
            <div className='grid grid-cols-12 min-h-screen '>
                {/* side navbar */}
                <div className='bg-orange-300 col-span-3' >

                </div>
                {/* Dashboard content */}
                <div className='col-span-9'>
                    <h1>loginpage</h1>

                </div>

            </div>










            {children}
            
        </div>
    );
};

export default Dashboardlayout;