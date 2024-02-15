import React from 'react'
import uiChat from '../assets/images/feature-icon/ui-chat.svg'
import truckLoaded from '../assets/images/feature-icon/truck-loaded.svg'
import wheat from '../assets/images/feature-icon/wheat.svg'
import lemon from '../assets/images/feature-icon/lemon.svg'
const Section2 = () => {
  return (
    <div className='flex flex-col items-center gap-6 md:flex-row '>
        
        <a href="#" class=" flex flex-col items-center w-[50%] 
                            block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
                            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='bg-lightColor rounded-full h-20 w-20 mb-4 p-3'>
                <img src={uiChat} className='ui-Char' alt="lemon" />
            </div>
            <p className='font-bold'>24/07 Support</p>

        </a>
        <a href="#" class=" flex flex-col items-center w-[50%]
                            block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
                            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='bg-lightColor rounded-full h-20 w-20 mb-4'>
                <img src={truckLoaded} className=' p-4' alt="lemon" />
            </div>
            <p className='font-bold'>Free Shipping</p>

        </a>
        <a href="#" class=" flex flex-col items-center w-[50%]
                            block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
                            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='bg-lightColor rounded-full h-20 w-20 mb-4'>
                <img src={wheat} className=' p-4' alt="lemon" />
            </div>
            <p className='font-bold'>Fresh & Healthy</p>

        </a>
        <a href="#" class=" flex flex-col items-center w-[50%]
                            block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 
                            dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='bg-lightColor rounded-full h-20 w-20 mb-4'>
                <img src={lemon} className=' p-4' alt="lemon" />
            </div>
            <p className='font-bold'>From our farm</p>

        </a>
    </div>
  )
}

export default Section2