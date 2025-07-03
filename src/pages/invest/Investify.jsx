import React from 'react'
import imageOne from "../invest/images/imgi_26_thumb.inv983526c1bb.png"

const Investify = () => {
  return (
    <div className=' max-w-[1280px] bg-amber-500 mb-32 mx-auto px-18 py-10'>
      <div className=' text-center'>
        <h2>Recent Opportunities on Investify</h2>
      </div>
      <div className=' w-[350px] h-[360px] bg-white rounded-2xl flex flex-col gap-5'>
        <div className=' h-[100px]'>
          <img src={imageOne} alt="" className=' h-[100px] w-full rounded-t-2xl object-cover'/>
        </div>
        <div className=' px-8 py-2 flex flex-col gap-5'>
          <h2 className=' font-semibold text-[#122231] text-[20px]'>CORPORATE DEBT NOTES SERIES XLVII</h2>
          <div className=' flex bg-amber-400 justify-between w-[90%] mb-4'>
            <div><p>₦5,000</p><p>per unit</p></div>
            <div><p>578</p><p>investors</p></div>
          </div>
          <p className=' bg-[#FAF1F4] w-fit px-4 py-1 rounded-4xl text-[#B32E58] font-semibold'>Sold Out</p>
        </div>
      </div>
    </div>
  )
}

export default Investify 
// ₦