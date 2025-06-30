import React from 'react'


const SimpleInvestCard = ({title, description, image}) => {
  return (
 
    <div className=' bg-white w-[360px] rounded-2xl pt-16 px-9 flex flex-col gap-22 
    
    '>
      <div className=''>
        <h1 className=' font-semibold text-[36px] mb-6 text-[#7913e5] leading-10'>{title}</h1>
        <p className=' text-[#3d4f60]'>{description}</p>
      </div>
      <div className=' w-[290px]'>
        <img src={image} alt="" />
      </div>
    </div>
    

  )
}

export default SimpleInvestCard