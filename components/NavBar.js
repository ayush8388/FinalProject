import Link from 'next/link'
import React from 'react'
import { ShoppingCart, House } from "@deemlol/next-icons";
import { useCart } from '@/context/cartContext'

function NavBar() {
  const { cartItems } = useCart()
  return (
    <div className='flex justify-between items-center w-full h-16 bg-white text-blue px-10'>
        <h1 className='text-2xl font-bold text-blue-500'>
            SHOP
            <span className='text-blue-900'>Now</span>
        </h1>
        <div className='flex items-center flex-row gap-8 justify-center text-md text-blue-900'>
            <Link href='/' className='flex flex-row items-center gap-2'><House size={16} color="#2a4365" /> Home</Link>
            <Link href='/cart' className='flex flex-row items-center gap-2 '><ShoppingCart size={16} color="#2a4365" /> Cart <span className='text-sm h-5 w-5 text-center rounded-full bg-red-500'>{cartItems.length}</span></Link>
        </div>
    </div>
  )
}

export default NavBar