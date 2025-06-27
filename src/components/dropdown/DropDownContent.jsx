import React from 'react'

const DropDownContent = ({iconBgColor, icon, title, text}) => {
  return (
    <div className=' flex items-center gap-5 mr-3'>
      <div style={{
        backgroundColor: iconBgColor
      }} className=' p-1.5 rounded-xl'>
        {icon}
      </div>
      <div>
        <h1 className=' font-[500] text-[14.5px]  tracking-[.1px]'>{title}</h1>
        <p className=' text-[#595959] text-[13px]'>{text}</p>
      </div>
    </div>
  )
}

export default DropDownContent