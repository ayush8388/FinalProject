import FilterBar from '@/components/FilterBar'
import NavBar from '@/components/NavBar'
import ProductCard from '@/components/ProductCard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HomePage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/product')
      .then(res => {
        setProducts(res.data)
        setFilteredProducts(res.data) 
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='min-h-screen w-full bg-white text-black pb-24'>
      <NavBar />

      <div className="max-w-7xl mx-auto px-5">
        <FilterBar products={products} onFilter={setFilteredProducts} />
      </div>

      <div className='max-w-7xl mx-auto px-5'>
        <h1 className='text-4xl font-bold text-center py-5 text-blue-900'>Our Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
