import React from 'react'
import testimonial1 from '../assets/images/testimonial/testimonial-1.png'



const Section4 = () => {
  return (
    <div className='bg-lightColor mt-20 py-10 flex flex-col items-center'>
        <h1 className='text-5xl mb-3'>Our Happy Customers</h1>
        <p className='w-[70%] mb-10'>
            The Passage Experienced A Surge In Popularity During The 1960s When
            Again During The 90s As Desktop Publishers
        </p>

        <div className='flex flex-col items-center max-w-[65%]'>
            <div className='w-[20rem] bg-darkColor p-4 '>
                <img src={testimonial1} className='rounded-lg' alt="" />
            </div>
            <div className='flex flex-col items-end bg-gradient-to-r from-green-300 to-green-800 p-4'>
                <p className='text-end italic'>
                   "Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products
                    in the future from this author.""
                </p>
                <h4 className='text-2xl font-bold mt-4'>Jacob Oramson</h4>
                <h4 className='text-lg text-white'>Happy Customer</h4>

  
            </div>
        </div>
    </div>
  )
}

export default Section4