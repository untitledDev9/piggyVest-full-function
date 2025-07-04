import React from 'react'
import One from "./images/imgi_19_IMG_6143_aae786e198.png"
import Two from "./images/imgi_20_img2_cf3dbfc2d2_fd7dda8db2.png"
import Three from "./images/imgi_21_img3_ce4c72ee78_42ad0c7a2d.png"

const SaveDropCard = () => {
  return (
    <div className=' pb-28'>
      <div className='text-center py-20'>
        <h1 className=' text-[50px] font-bold
        max-tablet:text-[40px]
        max-mobile:text-[32px]

        '>Save without thinking about it.</h1>
        <p className=' text-[#3d4f60]'>
          Enjoy automated savings, quick manual savings top up and competitive interest rates.</p>
      </div>
      <div className='max-w-[1240px] flex flex-wrap mx-auto gap-10 justify-evenly'>
        <div className=' bg-white flex flex-col gap-10 w-[360px] pt-14 px-5 h-[550px] rounded-3xl'>
          <div className=' flex gap-5 flex-col'>
            <h1 className=' text-[36px] text-[#0D60D8] font-semibold leading-10'>Save automatically</h1>
            <p className=' text-[#3d4f60] leading-8'>
              Choose between automatic daily, weekly or monthly savings. Once you choose, our system does the rest for you. You’re in control, and can always change your settings anytime.</p>
          </div>
          <div><img src={One} alt="" className='rounded-4xl' /></div>
        </div>
        <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
          <div className=' flex gap-5 flex-col'>
            <h1 className=' text-[36px] text-[#0D60D8] font-semibold leading-10'>Save on the go</h1>
            <p className=' text-[#3d4f60] leading-8'>
              Don’t fancy automatic savings? No problem, you can manually top up your Piggybank savings at anytime, anywhere.</p>
          </div>
          <div className=' w-[300px]'><img src={Two} alt="" /></div>
        </div>
        <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
          <div className=' flex gap-5 flex-col'>
            <h1 className=' text-[36px] text-[#0D60D8] font-semibold leading-10'>Build discipline</h1>
            <p className=' text-[#3d4f60] leading-8'>
              With four free withdrawal days in the year, you are less tempted to spend your savings and meet your savings goals faster.</p>
          </div>
          <div className=' w-[300px]'><img src={Three} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default SaveDropCard