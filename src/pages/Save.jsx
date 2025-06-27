import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownContent from '../components/dropdown/DropDownContent';
import { PiShieldBold } from "react-icons/pi";
import { MdOutlineLock } from "react-icons/md";
import { RxTarget } from "react-icons/rx";
import { LiaWalletSolid } from "react-icons/lia";
import { CgDollar } from "react-icons/cg";
import { MdOutlineHouse } from "react-icons/md";

const Save = () => {
  const [openSave, setOpenSave] = useState(false)

  // const toggleSave = () => {
  //   setOpenSave(prev => !prev)
  // }


  return (
    <div 
    className=' flex items-center justify-center relative max-tablet:z-20 max-mobile:static max-mobile:block'
          onMouseEnter={() => setOpenSave(true)}
          onMouseLeave={() => setOpenSave(false)}>
    <div 
        
        className=' flex items-center justify-center relative'>
        <p>Save</p>
        <MdKeyboardArrowDown size={20} />
    </div>

    {openSave && (
      <div className=' absolute top-6 -left-16 z-50 
      max-mobile:static
      '>
        <div className=' bg-white grid grid-cols-2 gap-10  w-max py-10 px-8 rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.3)]
        
        max-tablet:grid-cols-1 max-tablet:gap-7 max-tablet:py-8 max-tablet:px-6 z-50 
        '>
        
        <DropDownContent 
          iconBgColor='#0037ff30'
          color="blue"
          icon= {<PiShieldBold size={25}/>}
          title="Piggybank"
          text='Automated Savings'
        />

        <DropDownContent 
          iconBgColor='#51cbff50'
          color='#51CBFF'
          icon={<MdOutlineLock size={25} />}
          title='Safelock'
          text='Fixed Savings'
        />

        <DropDownContent 
          iconBgColor='#1cb50e2e'
          color='#1CB50E'
          icon={<RxTarget size={25} />}
          title='Target Savings'
          text='Goal-oriented Savings'
        />

        <DropDownContent 
          iconBgColor='#ff56a83b'
          color='#FF56A8'
          icon={<LiaWalletSolid size={25} />}
          title='Flex Naira'
          text='Flexible Savings'
        />

        <DropDownContent 
          iconBgColor='#1a25423f'
          color='#1A2542'
          icon={<CgDollar size={25} />}
          title='Flex Dollar'
          text='Dollar Savings'
        />

        <DropDownContent 
          iconBgColor='#ff510133'
          color='#FF5101'
          icon={<MdOutlineHouse size={25} />}
          title='House Money'
          text='Semi Strict Wallet'
        />
        
    </div>
      </div>
    )}
    </div>
  )
}

export default Save