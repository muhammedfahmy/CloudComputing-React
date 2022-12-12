import React from 'react'
import Form from './Form'
const formModal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div onClick={(e) => e.stopPropagation()} className='py-20 w-[800px] bg-white p-4 rounded-3xl'>
        <Form />
        </div>
    </div>
  )
}

export default formModal