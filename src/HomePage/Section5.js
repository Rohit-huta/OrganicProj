import React from 'react'
import gallery1 from '../assets/images/gallery/g-1.jpg'
import gallery2 from '../assets/images/gallery/g-2.jpg'
import gallery3 from '../assets/images/gallery/g-3.jpg'
import gallery4 from '../assets/images/gallery/g-4.jpg'
import gallery5 from '../assets/images/gallery/g-5.jpg'
import gallery6 from '../assets/images/gallery/g-6.jpg'
import gallery7 from '../assets/images/gallery/g-7.jpg'
import gallery8 from '../assets/images/gallery/g-8.jpg'


const Section4 = () => {
  return (
    <div className='h-screen mt-20 flex flex-col items-center'>
        <h1 className='text-5xl mb-3'>Our Gallery</h1>
        <p className='w-[70%] mb-10'>
            The Passage Experienced A Surge In Popularity During The 1960s When
            Again During The 90s As Desktop Publishers
        </p>

        <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-2 mx-3">
            {/* row 1 */}
            <div class="grid gap-4">
                <div className='grid justify-center'>
                    <img class="rounded-lg " src={gallery1} alt="" />
                </div>
                <div className=''>
                    <img class="rounded-lg" src={gallery2} alt="" />
                </div>

                <div className=''>
                    <img class="h-auto max-w-full rounded-lg" src={gallery3} alt="" />
             
                </div>
           
            </div>

            {/* row 2 */}
            <div class="grid gap-4">
                <div className=''>
                    <img class=" max-w-full rounded-lg" src={gallery3} alt="" />

                </div>
                <div className=''>
                    <img class=" max-w-full rounded-lg" src={gallery4} alt="" />
                </div>
                <div className=''>
                    <img class=" max-w-full rounded-lg" src={gallery4} alt="" />
                </div>
            </div>
          
           
        </div>



        

    </div>
  )
}

export default Section4