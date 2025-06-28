import React from 'react'

const CreateAccount = () => {
  return (
    <div className=' w-full bg-white h-[100%]'>
      <div className=' max-w-[600px]  mx-auto flex flex-col px-20 py-28 gap-7
      max-mobile:px-10 max-mobile:py-24 max-mobile:gap-5
      '>
        <div>
          <h1 className=' text-[35px] font-[600] text-[#222936] mb-2'>Let's get started 🎉</h1>
          <p className='text-[13px] font-[600] text-[#595b61]'>Register to start saving and investing with Piggyvest today!</p>
        </div>
        <div className=' flex flex-col gap-16'>
          <div className=' flex flex-col gap-3'>
        <label className='text-[13px] font-[600] text-[#666d7c]' htmlFor="name">First & Last Name <span className=' text-red-600'>*</span></label>
        <input type="text" name='password' placeholder='e.g Untitled Dev' id='name'  className=' bg-[#666d7c0c]  p-4 rounded-2xl placeholder-[#999999b6] placeholder:text-[13px] placeholder:font-bold'/>
        </div>
        <button className='bg-[#0d62d8c8] w-full p-4 rounded-2xl text-white'>Create Free Account</button>
        <p className='text-[15px] font-[600] text-[#0d60d8] cursor-pointer text-center'>back</p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount