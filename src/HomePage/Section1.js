import React from 'react'

const Section1 = () => {
  return (
    <div className='ml-12 h-[100vh] text-start flex flex-col justify-center'>
        <h1 className='text-6xl text-primaryColor mb-3 font-bold'>100% Organic</h1>
        <h4 className='text-xl w-fit p-2 mb-2 text-white bg-darkColor'>Fresh & natural form</h4>
        <p className='mb-9'>The readable content of a page when looking at its layout point of using of letters, as opposed.</p>
        <button type="button" class="w-fit text-white bg-gradient-to-r from-green-500 to-green-800 hover:bg-green-800 font-lg rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        ALL PRODUCTS
        </button>
    </div>
  )
}

export default Section1