import React from 'react'

const ButtonCard = ({ title, bgColor, textColor, border, icon }) => {
  return (
    <button className=' px-5 py-4 rounded-[10px] text-[18px] flex gap-2 items-center 
                        max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                        max-tablet:w-[100%] justify-center'
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: border,
      }}>
      {icon} 
      {title}
    </button>
  )
}

export default ButtonCard