import React from 'react'
import {useState} from 'react'
import axios from 'axios'



function Form({onClose})  {

    const [input, setInput] =useState({
    hotelName:'',
    hotelAddress:'',
    hotelImage:'',
    hotelDescription:''
    })

    function handleChange(event) {
        const {name,value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        onClose();
        event.preventDefault();

        const newHotel = {
            name: input.hotelName,
            address: input.hotelAddress,
            imageURI: input.hotelImage,
            description: input.hotelDescription
        }
        
        axios.post('http://localhost:5000/hotels', newHotel)

    }


  return (
    <div className='px-12'>
        <h1 className='text-4xl font-bold'>Add New Hotel</h1>
        <form className='py-12'>
            <div className='py-3'>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Hotel Name
            </label>
            <input onChange={handleChange} name='hotelName' value={input.hotelName} autoComplete='off' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text"'></input>
            </div>

            <div className='py-3'>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Hotel Location
            </label>
            <input onChange={handleChange} name='hotelAddress' value={input.hotelAddress} autoComplete='off' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Location" type="text"'></input>
            </div>

            <div className='py-3'>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Hotel Image URL
            </label>
            <input onChange={handleChange} name='hotelImage' value={input.hotelImage} autoComplete='off' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Address" type="text"'></input>
            </div>
            
            <div className='py-3'>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Hotel Description
            </label>
            <textarea onChange={handleChange} name='hotelDescription' value={input.hotelDescription} autoComplete='off' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Description" type="text"'></textarea>
            </div>
            
            <button onClick={handleClick}className='p-3 border bg-sky-600 text-white rounded-md'> Add Hotel </button>
        </form>
    </div>
  )
}


export default Form