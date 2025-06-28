import React from 'react'

const ButtonCard = ({ title, bgColor, textColor, border, icon }) => {
  return (
    <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                        max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                        max-tablet:w-[100%] justify-center
                        '
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