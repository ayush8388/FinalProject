import Link from 'next/link'
import React from 'react'
import { ShoppingCart, House } from "@deemlol/next-icons";

function NavBar() {
  return (
    <div className='flex justify-between items-center w-full h-16 bg-white text-blue px-10'>
        <h1 className='text-2xl font-bold text-blue-500'>
            SHOP
            <span className='text-blue-900'>Now</span>
        </h1>
        <div className='flex items-center flex-row gap-8 justify-center text-md text-blue-900'>
            <Link href='/' className='flex flex-row items-center gap-2'><House size={16} color="#2a4365" /> Home</Link>
            <Link href='' className='flex flex-row items-center gap-2 '><ShoppingCart size={16} color="#2a4365" /> Cart</Link>
        </div>
    </div>
  )
}

export default NavBar