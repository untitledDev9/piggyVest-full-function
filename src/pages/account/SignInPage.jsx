import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const SignInPage = () => {
  return (
    <div className=' w-full bg-white h-[100%]'>
    <div className=' max-w-[600px]  mx-auto flex flex-col px-20 py-28 gap-10
    max-mobile:px-8 max-mobile:py-24 max-mobile:gap-5
    '>
      <div className=' flex justify-between items-center-safe'>
        <div>
          <h1 className=' text-[35px] font-[600] text-[#222936] mb-2'>Login</h1>
          <p className='text-[13px] font-[600] text-[#595b61]'>Securely login to your Piggyvest</p>
        </div>
        <div className=' rounded-full bg-[#0d60d8] p-3 h-fit'>
          <IoPersonOutline color='white' size={20}/>
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
      <label className='text-[13px] font-[600] text-[#666d7c]' htmlFor="email/phone">Email/Phone Number</label>
      <input type="text" name='email/phone' placeholder='08123******' id='email/phone' className=' bg-[#666d7c3d]  p-4 rounded-2xl placeholder-[#999999] placeholder:text-[13px] placeholder:font-bold text-black'/>
      </div>
      <div className=' flex flex-col gap-2'>
      <label className='text-[13px] font-[600] text-[#666d7c]' htmlFor="password">Your Password</label>
      <input type="text" name='password' placeholder='******' id='password'  className=' bg-[#666d7c3d]  p-4 rounded-2xl placeholder-[#999999] placeholder:text-[13px] placeholder:font-bold'/>
      </div>
      <div>
        <button className='bg-[#0d60d8] w-full p-4 rounded-2xl text-white'>Login</button>
      </div>
      <div className='text-center flex flex-col gap-4'>
      <Link to='/create-account'><p className='text-[15px] font-[600] text-[#0d60d8] cursor-pointer'>Don't have an account? Register!</p></Link>
        <p  className='text-[15px] font-[600] text-[#595b61] cursor-pointer'>Forgot Password? Tap Here!</p>
        <Link to="/piggyvest.com">
        <p className='text-[15px] font-[600] text-[#0d60d8] cursor-pointer'>back</p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default SignInPage