import Link from 'next/link'
import React from 'react'

function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`} 
      key={product.id}
      className='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col'
    >
      <img
        src={product.image}
        alt={product.title} 
        className='w-full h-64 object-contain bg-slate-100 p-10'
      />
      <div className='p-5 flex flex-col flex-1'>
        <div className='w-full flex flex-row justify-between gap-2'>
          <h2 className='text-sm font-semibold mb-2 text-black'>{product.title}</h2>
          <p className='text-md font-bold text-black'>${product.price}</p>
        </div>
        <p className='text-gray-400 text-xs mb-4 line-clamp-2'>{product.description}</p>
        <div className='mt-auto flex items-center justify-between'>
          <button 
            className='bg-white hover:bg-slate-200 transition-colors rounded-lg px-4 py-2 font-semibold text-blue-900 border-2 text-sm'
            onClick={() => console.log('Add to Cart')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
