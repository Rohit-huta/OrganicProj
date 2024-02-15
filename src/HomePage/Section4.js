import React from 'react'
import product1 from '../assets/images/products/product-1.jpg'
import product2 from '../assets/images/products/product-2.jpg'
import product3 from '../assets/images/products/product-3.jpg'
import product4 from '../assets/images/products/product-4.jpg'
const Section4 = () => {
  return (
    <div className='h-screen mt-20 flex flex-col items-center'>
        <h1 className='text-5xl mb-3'>Our Best seller product</h1>
        <p className='w-[70%] mb-10'>The Passage Experienced A Surge In Popularity During The 1960s When
            Again During The 90s As Desktop Publishers
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-3">
            {/* row 1 */}
            <div class="grid gap-4">

                <div className='grid justify-center border rounded-lg p-4'>
                    <img class="h-auto max-w-full rounded-lg " src={product1} alt="" />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Musk Melon</h4>
                        <h4 className='text-secondaryColor font-bold'>70rs/Kg</h4>

                    </div>
                </div>
                <div className='h-[17rem] grid justify-center items-center  border rounded-lg p-4'>
                    <img class="h-auto max-w-full rounded-lg" src={product2} alt="" />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Musk Melon</h4>
                        <h4 className='text-secondaryColor font-bold'>70rs/Kg</h4>

                    </div>
                </div>
           
            </div>

            {/* row 2 */}
            <div class="grid gap-4">
                <div className='grid justify-center border rounded-lg p-4'>
                    <img class="h-auto max-w-full rounded-lg" src={product3} alt="" />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Musk Melon</h4>
                        <h4 className='text-secondaryColor font-bold'>70rs/Kg</h4>

                    </div>
                </div>
                <div className='grid justify-center border rounded-lg p-4'>
                    <img class="h-auto max-w-full rounded-lg" src={product4} alt="" />
                    <div className='flex justify-between'>
                        <h4 className='font-bold'>Musk Melon</h4>
                        <h4 className='text-secondaryColor font-bold'>70rs/Kg</h4>

                    </div>
                </div>
            </div>
          
           
        </div>



        

    </div>
  )
}

export default Section4