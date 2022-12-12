import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'


const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 font-sans text-2xl absolute z-10 text-white'>
        <div>
            <h1 className='text-4xl font-bold'>TRIPIFY.</h1>
        </div>
        <ul className='flex'>
            <a href='Home'><li className='p-4'>Home</li></a>
            <a href='About Us'><li className='p-4'>About Us</li></a>
            <a href='Contact Us'><li className='p-4'>Contact Us</li></a>
            <a href='Book'><li className='p-4'>Book</li></a>
        </ul>
    <div className='flex'>
        <BsPerson className='mr-2' size = {30}/>
        <BiSearch size = {30}/>
    </div>
    </div>
  )
}

export default Navbar