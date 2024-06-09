import React from 'react';
import { GoDotFill } from "react-icons/go";
import { GrUpload } from "react-icons/gr";
import { fetchProducts } from '../lib/api';
import { TbShoppingBagPlus } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";

const MainBody = async() => {

    const products = await fetchProducts();

  return (
    <div className='flex flex-col w-full h-full '>
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
    <div className='mt-8 mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 pr-8 max-w-[392px]:pr-4'>
    {products.map((product) => (
              <div key={product.id} className=" h-[500px] w-full max-w-[320px] mx-4 object-contain rounded-xl bg-[#141414]
               cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
                  <div className='bg-white relative rounded-t-xl'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-fit h-[350px] bg-white rounded-t-xl mx-auto"
                  />
                <CiBookmark size={35} className='cursor-pointer absolute top-2 right-2 text-black'/></div>
                <div className='flex flex-col p-2'>
                 <div className='w-full h-[50px]'> <p className='text-lg text-center'>{product.title}</p></div>
                  <div className='flex items-center justify-between mt-8'>
                  <span className='flex items-center text-lg gap-2 font-medium'><MdCurrencyRupee size={20}/> {product.price} 
                  <span className='line-through text-xs text-[#E5DFD9] font-thin'> {product.price*2}</span> 
                  <span className='text-[#2FC14F] text-xs'>(50% Off)</span>
                  </span>
                  <TbShoppingBagPlus size={35} className='cursor-pointer'/>
                  </div>
                </div>
              </div>
            ))}
    </div>
    </div>
  )
}

export default MainBody
