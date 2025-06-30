import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import PiggyWhite from "../assets/piggyWhite.png"
import OnBoard_invest from "../assets/onboard_invest.svg";
import OnBoard_target from "../assets/onboard_target.svg";

const Piggyvest_com = () => {
  return (
    <div className=' text-center bg-[#14B25A] h-screen flex flex-col justify-start items-center py-18'>
      <div className=' w-[440px] bg-amber-300 flex flex-col items-center gap-9'>


      <div>
        <img src={PiggyWhite} alt="" />
      </div>

      <div className=' bg-red-500'>
        <img src={OnBoard_target} alt="" className=' w-full' />
      </div>

      <div>
        <h2>Setup multiple savings goals and reach them</h2>
      </div>

      <p>. . . .</p>



<div className='flex flex-col gap-3 w-full'>

        <button
          className=' px-4 py-3.5 rounded-[10px] text-[17px] flex gap-2 items-center font-[500] w-full justify-center text-[#021737] bg-[#fff] 
                    '>
          
          Create an account
        </button>


        <button
          className=' px-4 py-3.5 rounded-[10px] text-[17px] flex gap-2 items-center font-[500] w-full justify-center text-white bg-[#021737]
                  '>
          
          Login
        </button>
</div>
      </div>
    </div>
  )
}

export default Piggyvest_com