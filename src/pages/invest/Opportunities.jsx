import React from 'react'


const Opportunities = ({heading, desc, image, bgColor}) => {
  return (
    <div>
      <div 
       style={{
          backgroundColor: bgColor,
        }}
      className={` flex h-[430px] justify-end gap-32
      max-Laptop:gap-5
      max-mobile:flex-col max-mobile:h-fit 
      `}>
        <div 
        className=' w-[600px] my-auto text-white flex flex-col gap-3
        max-Laptop:px-5 max-mobile:py-7 max-mobile:w-fit
        '>
          <h1 className=' text-[50px] font-semibold leading-[55px]
          max-mobile:text-[30px] max-mobile:leading-10 max-mobile:text-center
          '>
            {heading}
          </h1>
          <p className=' leading-[27px] w-[75%]
          max-mobile:w-full max-mobile:text-center
          '>
            {desc}
          </p>
        </div>
        <div className="w-[40%] h-[380px] flex justify-end 
        max-mobile:justify-center max-mobile:w-full
        ">
          <img src={image} alt="" className="h-[430px] w-full object-cover
          max-mobile:h-fit" 
          />
        </div>
      </div>
    </div>
  )
}

export default Opportunities