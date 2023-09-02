import React from 'react'
import Logo from '../../MovieLogo.png'
import { Link } from 'react-router-dom'
// Routing -> anchor tags, Link
const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={Logo} className='w-[50px]'/>
        {/* <a href='/' className='text-blue-400'>Movies</a>
        <a href='/watchList'className='text-blue-400'>
            WatchList</a> */}
        <Link to="/" className='text-blue-400'>Movies</Link>
        <Link to='/watchList'className='text-blue-400'>
            WatchList</Link>
    </div>
  )
}

export default NavBar