import React from 'react'
import { Link } from 'react-router-dom';
import PiggyWhite from "../assets/piggyWhite.png"
import OnBoard_invest from "../assets/onboard_invest.svg";
import OnBoard_target from "../assets/onboard_target.svg";
import WhiteLogo from "../assets/white-logo.svg";

const Piggyvest_com = () => {
  const mapp = []
  return (
    <div className=' text-center bg-[#14B25A] h-screen flex flex-col justify-start items-center py-18'>
      <div className=' w-[440px] flex flex-col items-center gap-9'>
{mapp.map}

        <div>
          <img src={WhiteLogo} alt="" />
        </div>

        <div className=''>
          <img src={OnBoard_target} alt="" className=' w-full' />
        </div>

        <div className=' text-3xl font-semibold text-white'>
          <h2>Setup multiple savings goals and reach them</h2>
        </div>

        <p>. . . .</p>



        <div className='flex flex-col gap-3 w-full'>
          <Link to='/create-account'>
            <button
              className=' px-4 py-3.5 rounded-[10px] text-[17px] flex gap-2 items-center font-[500] w-full justify-center text-[#021737] bg-[#fff]  cursor-pointer
                    '>

              Create an account
            </button>
          </Link>
          <Link to='/sign-in'>
            <button
              className=' px-4 py-3.5 rounded-[10px] text-[17px] flex gap-2 items-center font-[500] w-full justify-center text-white bg-[#021737] cursor-pointer
                  '>

              Login
            {/* </button> */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Piggyvest_com