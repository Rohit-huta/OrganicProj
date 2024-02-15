import React from 'react'
import aboutBanner from '../assets/images/about/aboutBanner.jpg';
const Section3 = () => {
  return (
    <div className="mt-20 p-12 h-[70vh] flex flex-col justify-center bg-cover bg-no-repeat min-w-sm" style={{ backgroundImage: `url(${aboutBanner}`}}>
        <h1 className='text-2xl font-bold mb-4'>We Providing Services Since <br></br> 1841 With Proud.</h1>
        <p className='w-[70%] mb-4'>The readable content off a page when looking layout using Lorem Ipsum is that it has.</p>
        <p className='w-[70%]'>It is a long established fact that a reader will be distracted the readable content off a page when looking at its layout using Lorem Ipsum is that it has. It is a long established fact that a reader will be distracted the readable content off a page when looking at its layout using Lorem Ipsum is that it has.</p>
    </div>
  )
}

export default Section3