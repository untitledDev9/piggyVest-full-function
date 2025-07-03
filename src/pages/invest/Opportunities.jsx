import React from 'react'
import madeEasy from "../invest/images/imgi_46_image_10ee373879.png"

const Opportunities = () => {
  return (
    <div>
      <div className=' flex h-[380px] bg-[#7913E5] justify-end gap-32'>
        <div className=' w-[600px] my-auto text-white flex flex-col gap-3'>
          <h1 className=' text-[50px] font-semibold leading-[64px]'>
            We’ve made it easier for anyone to get started.
          </h1>
          <p className=' leading-[27px]'>
            Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.
          </p>
        </div>
        <div className="bg-blue-400 w-[40%] h-[380px] flex justify-end ">
          <img src={madeEasy} alt="" className="h-[380px] w-full object-cover" />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Opportunities