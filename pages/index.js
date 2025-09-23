import FilterBar from '@/components/FilterBar'
import NavBar from '@/components/NavBar'
import ProductCard from '@/components/ProductCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/product')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='min-h-screen w-full bg-white text-white pb-24'>
      <NavBar />
      <FilterBar />
      <div className='max-w-7xl mx-auto  px-5'>
        <h1 className='text-4xl font-bold text-center py-5 text-blue-900'>Our Products</h1>
        <div className='max-w-7xl mx-auto py-10 px-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
     </div>
    </div>
  )
}

export default HomePage
