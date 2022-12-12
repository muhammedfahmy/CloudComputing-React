import React from 'react'

const HotelCard = (props) => {
  return (
    <div>
        <div className='drop-shadow-2xl text-left rounded space-y-2 bg-white'>
            <img className='w-full h-1/2 object-cover rounded-t-lg' src={props.bg} alt="" />
            <div className='p-4 space-y-4'>
              <div className='flex justify-between'>
                <p className='text-black-400 font-bold text-xl'>{props.name}</p>
              </div>
              <p className='font-semibold'>{props.description}</p>
              <div className='flex justify-between items-center'>
                <p className='flex items-center space-x-2 text-black'>
                <h2>Location: {props.address}</h2>
                </p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default HotelCard