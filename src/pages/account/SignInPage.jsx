import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
const SignInPage = () => {
  return (
    <div className=' max-w-[1024px] bg-amber-300 mx-auto flex flex-col justify-center items-center'>
      <div className=' flex'>
        <div>
          <h1>Login</h1>
          <p>Securely login to your Piggyvest</p>
        </div>
        <div>
          <IoPersonOutline />
        </div>
      </div>
      <div>
      <label htmlFor="email/phone">Email/Phone Number</label>
      <input type="text" name='email/phone' placeholder='08123******' />
      </div>
      <div>
      <label htmlFor="password">Your Password</label>
      <input type="text" name='password' placeholder='******' />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default SignInPage