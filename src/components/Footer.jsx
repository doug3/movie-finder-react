import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-center invisible md:visible'>
        <Link className='text-gray-300' to='/contact'>Contact Us</Link>
    </div>
  )
}

export default Footer