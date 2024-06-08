import React from 'react';
import { GoDotFill } from "react-icons/go";
import { GrUpload } from "react-icons/gr";
import { fetchProducts } from '../lib/api';

const MainBody = async() => {

    const products = await fetchProducts();

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between mt-6 text-sm lg:text-base'>
            <div className='flex items-center gap-2'>
                <span>Bags</span>
                <GoDotFill />
                <span>Backpacks</span>
            </div>
            <div className='flex items-center gap-2 text-sm lg:text-base'>
                <span>13 products</span>
                <GrUpload />
            </div>
        </div>
    <div className='mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
    {products.map((product) => (
              <div key={product.id} className="h-[483px] w-[280px] mx-4 object-contain rounded-xl bg-[#141414]">
               
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[290px] h-[400px] bg-white rounded-xl"
                  />
                
                <div>
                  <h2>{product.title}</h2>
                  <p>Rs {product.price}</p>
                </div>
              </div>
            ))}
    </div>
    </div>
  )
}

export default MainBody
