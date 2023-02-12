import React from 'react'
import  {carHero }from '../Asset'

import { carImages } from '../Asset'
import CarCard from './CarCard'

const Home = () => {
  return (
    <div className='flex flex-col  w-full '>
      <div className='flex  w-full'>
      <div className="info border-r-2 border-slate-400 w-[40%] mt-5 h-[70vh] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center logo mx-2 font-bold text-slate-600 text-lg">
          <span className='bg-red-500 text-white pl-2 pr-1 rounded-md font-medium'>Rent</span>Trip
        </div>
         Rent a Car beyond your imagination
      </div>

      <div className="image w-[60%] flex justify-center items-center inset-1 ">
        
          <img src={carHero} width='600' alt="" />
        
      </div>

</div>
{/* =================================== */}
<div className='marquee'>


      <div className='flex   mt-10 gap-3 overflow-x-auto w-full h-auto track'>

       {
        carImages.map((car) => <CarCard car={car} />)
       }

      </div>

      </div>

    </div>
  )
}

export default Home