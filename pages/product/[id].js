import React, { useEffect , useState } from 'react'
import  axios from 'axios'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'

function ProductPage() {
    const { id } = useRouter().query
    const [productData, setProductData] = useState({})
    useEffect(() => {
        if(!id) return
        axios.get(`http://localhost:3000/api/product/${id}`)
        .then(res => setProductData(res.data))
        .catch(err => console.log(err))
    }, [id])
    console.log(productData)
  return (
    <div className='min-h-screen w-full bg-white text-white'>
        <NavBar />
        <div className='max-w-7xl mx-auto px-5'>
            <h1 className='text-4xl font-bold text-center py-5 text-blue-900'>{productData.title}</h1>
            <div className='max-w-7xl mx-auto py-10 px-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    <img src={productData.image} alt={productData.title} className='w-full h-full object-contain bg-slate-100 p-10' />
                    <div className='p-5 flex flex-col flex-1'>
                        <div className='w-full flex flex-row justify-between gap-2'>
                            <p className='text-2xl font-bold text-black'>${productData.price}</p>
                        </div>
                        <p className='text-gray-400 text-md mb-4 '>{productData.description}</p>
                        <p className='text-gray-400 text-md mb-4 line-clamp-2'>
                            <span className='text-yellow-500'>Rating: {productData.rating?.rate}</span>
                            ({productData.rating?.count} reviews)
                        </p>
                        <p>Reviews: {productData.reviews}</p>
                        <div className='mt-auto flex items-center justify-between'>
                            <button 
                                className='bg-white hover:bg-slate-200 transition-colors rounded-lg px-4 py-2 font-semibold text-blue-900 border-2 text-sm'
                                onClick={() => console.log('Add to Cart')}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
    </div>
  )
}

export default ProductPage