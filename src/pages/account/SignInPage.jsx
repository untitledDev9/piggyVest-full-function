import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const SignInPage = () => {
  return (
    <div className=' max-w-[700px]  mx-auto flex flex-col px-20 py-32 gap-10'>
      <div className=' flex justify-between items-center-safe'>
        <div>
          <h1 className=' text-[35px] font-[600] text-[#222936]'>Login</h1>
          <p className='text-[13px] font-[600] text-[#595b61]'>Securely login to your Piggyvest</p>
        </div>
        <div className=' rounded-full bg-[#0d60d8] p-3 h-fit'>
          <IoPersonOutline color='white' size={20}/>
        </div>
      </div>
      <div className=' flex flex-col gap-2'>
      <label className='text-[13px] font-[600] text-[#666d7c]' htmlFor="email/phone">Email/Phone Number</label>
      <input type="text" name='email/phone' placeholder='08123******' className=' bg-[#666d7c3d]  p-4 rounded-2xl'/>
      </div>
      <div className=' flex flex-col gap-2'>
      <label className='text-[13px] font-[600] text-[#666d7c]' htmlFor="password">Your Password</label>
      <input type="text" name='password' placeholder='******'  className=' bg-[#666d7c3d]  p-4 rounded-2xl'/>
      </div>
      <div>
        <button>Login</button>
      </div>
      <div>
        <p className='text-[15px] font-[600] text-[#0d60d8]'>Don't have an account? <Link to='create-account'>Register!</Link></p>
        <p  className='text-[15px] font-[600] text-[#595b61]'>Forgot Password? Tap Here!</p>
        <p className='text-[15px] font-[600] text-[#0d60d8]'>back</p>
      </div>
    </div>
  )
}

export default SignInPage