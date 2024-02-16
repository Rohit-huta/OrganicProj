import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouseChimney, faGreaterThan} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
  return (
    <div className='bg-darkColor pt-[3rem] pb-[8rem] '>

        {/* NIMBOO */}
        <div className='ml-5 text-textGray w-[50%] mb-10 '>
            <h4 className='text-white text-xl mb-2'>Nimboo</h4>
            <p className='font-normal text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab numquam natus architecto, repellendus voluptatem animi sint explicabo reiciendis. Velit dolores neque aut incidunt, repudiandae maxime fugiat quisquam nesciunt architecto optio.</p>
            {/* address */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faHouseChimney} className='text-white mr-3' />
                <p>Pune, Maharashtra</p>
            </div>
            {/* phone */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faHouseChimney} className='text-white mr-3' />
                <p>+91 99999-99999</p>
            </div>
            {/* mail */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faHouseChimney} className='text-white mr-3' />
                <p>info@example.com</p>
            </div>
        </div>






        {/* Customer Support */}
        <div className='ml-5 text-textGray w-[50%] mb-10'>
            <h4 className='text-white text-xl mb-2'>Customer Support</h4>

            {/* about us */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faGreaterThan} className='text-white text-[10px] mr-3' />
                <p>About Us</p>
            </div>
            {/* Privacy policy */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faGreaterThan} className='text-white text-[10px] mr-3' />
                <p>Privacy policy</p>
            </div>
            {/* Terms & Conditions */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faGreaterThan} className='text-white text-[10px] mr-3' />
                <p>Terms & Conditions</p>
            </div>
            {/* Product Returns */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faGreaterThan} className='text-white text-[10px] mr-3' />
                <p>Product Returns</p>
            </div>
            {/* Wholesale Policy */}
            <div className='flex items-center mt-2'>
                <FontAwesomeIcon icon={faGreaterThan} className='text-white text-[10px] mr-3' />
                <p>Wholesale Policy</p>
            </div>
        </div>






        {/* NewsLetter */}
        <div className='ml-5 text-textGray w-[50%]'>
            <h4 className='text-white text-xl mb-2'>NewsLetter</h4>
            <input type="text" id="first_name" 
                   class="mb-4
                          bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                          rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                          w-full p-2.5 
                          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="John"  />
             <button type="button" class="w-fit text-white bg-gradient-to-r from-green-500 to-green-800 hover:bg-green-800 font-lg rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ALL PRODUCTS
            </button>
            <h4 className='text-white text-xl mb-2'>Stay Connected</h4>
            <div className='flex justify-between w-[80%]'>
                <FontAwesomeIcon icon={faFacebookF} className='border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faTwitter} className='border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faLinkedinIn} className='border p-2 rounded-full'/>
                <FontAwesomeIcon icon={faYoutube} className='border p-2 rounded-full'/>
            </div>
        </div>

    </div>
  )
}

export default Footer