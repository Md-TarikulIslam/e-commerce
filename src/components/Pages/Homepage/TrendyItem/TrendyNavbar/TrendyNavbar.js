import React from 'react';

const TrendyNavbar = () => {
    return (
        <div className='max-w-screen-sm mx-auto'>
            <div>
                <p className='font-bold text-4xl text-center mb-10' >Trendy Items</p>
            </div>
            <ul className='flex justify-between'>
                <li className='text-gray-700 hover:text-black hover:underline font-semibold hover:underline-offset-4'>ALL</li>
                <li className='text-gray-700 hover:text-black hover:underline font-semibold hover:underline-offset-4'>WOMAN</li>
                <li className='text-gray-700 hover:text-black hover:underline font-semibold hover:underline-offset-4'>MEN</li>
                <li className='text-gray-700 hover:text-black hover:underline font-semibold hover:underline-offset-4'>ON SALE</li>
                <li className='text-gray-700 hover:text-black hover:underline font-semibold hover:underline-offset-4'>NEW</li>
            </ul>
        </div>
    );
};

export default TrendyNavbar;