import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import HotelCard from './HotelCard'
import FormModal from './FormModal'




function Hotels() {

  const [hotels, setHotels] = useState([]);
  const [openForm, setOpenForm] = useState(false)
  useEffect(() => {
    axios 
    .get ('http://localhost:5000/hotels')
    .then (res => {
      setHotels(res.data.hotels);
    })
    .catch (err =>{
      console.log(err)
    })
    
  }, []);



  return (
    <div className='w-4/5 m-auto'>

      <div className='my-10 text-center'>
        <h1 className='text-4xl font-bold'>Hotels</h1>
        <section className='grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-10 my-10 justify-items-center items-center'>
        {hotels.map((hotel, index) => {
            return (
                <HotelCard bg ={hotel.imageURI} name={hotel.name} description={hotel.description} address={hotel.address}/>
            );
        })}
        </section>
        <div>
        <button onClick={() => setOpenForm (true)} className='p-3 border bg-sky-600 text-white rounded-md'> ADD NEW HOTEL</button>
        <FormModal open = {openForm} onClose = {() => setOpenForm(false)} />
        </div>
      </div>
    </div>
  )
}

export default Hotels