import React from 'react'

const CarCard = ({car}) => {
  return (
    <div className='border-2 border-slate-300 rounded-lg shadow-xl bg-slate-100  flex flex-col justify-center items-center w-full  '>
    <div className="image w-full h-full">
      <img src={car} width={350} height={350}  />
    </div>
    <div className="btn flex justify-around mx-1 my-2 gap-2">
      {/* <button className='px-2 bg-indigo-500 rounded-md hover:bg-indigo-600 text-white duration-300'>
        Enquiry
      </button>
      <button className='px-2 bg-green-600 rounded-md hover:bg-green-700 text-white duration-300'>
        Rent Now
      </button> */}
    </div>
  </div>
  )
}

export default CarCard