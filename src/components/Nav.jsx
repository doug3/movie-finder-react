import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link className='text-red-600 underline' to='/'>Home</Link>
            <span className='text-blue-600'> ||| </span>
            <Link className='text-green-600 underline' to='/search'>Search</Link>
        </nav>
    )
}

export default Nav