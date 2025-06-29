import React from 'react'

const DropDownContent = ({iconBgColor, icon, title, text, color}) => {
  return (
    <div className=' flex items-center gap-5 mr-3 cursor-pointer
    max-tablet:mr-14
     hover:bg-[#b9b9b923] w-[100%] rounded-xl py-2 px-5 transition-colors duration-300 ease-in-out
    '>
      <div style={{
        backgroundColor: iconBgColor,
        color: color,
      }} className=' p-1.5 rounded-xl '>
        {icon}
      </div>
      <div>
        <h1 className=' font-[500] text-[14.5px]  tracking-[.1px] text-[#000]'>{title}</h1>
        <p className=' text-[#595959] text-[13px]'>{text}</p>
      </div>
    </div>
  )
}

export default DropDownContent