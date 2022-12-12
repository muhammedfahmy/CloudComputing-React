import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import beachVid from '../assets/beachVid.mp4'
 const hero = () => {
   return (
     <div className='w-full h-screen relative+'>
        <video className='w-full h-full object-cover' src={beachVid}
        autoPlay
        loop
        muted />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40'>
            <div className='absolute top-0 w-full h-full justify-center flex flex-col text-center text-white p-4'>
                <h1 className='text-4xl font-bold'>First Class Booking Service</h1>
                <h2 className='text-3xl font-bold py-5'>Top Hotels In Egypt</h2>
                <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent w-[300px] sm:w-400px focus:outline-none px-3 text-xl' type ="text" placeholder='Search Destinations'/>
                    </div>
                    <div>
                        <button className='p-3 border bg-sky-600 text-white rounded-md'><AiOutlineSearch size = {20} className = 'icon'/></button>
                    </div>
                </form>
            </div>
        </div>
        
     </div>
   )
 }
 
 export default hero
