import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonCard from '../reuseable/ButtonCard'


import PiggyLogo from "../assets/logo.svg";
import Save from '../pages/Save';
import Resources from "../pages/Resources";
import { RiMenuLine } from "react-icons/ri";
import MobileMenu from '../block/MobileMenu';




const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <div className={` w-[100%] ${menu ? 'fixed' : ""}`}>
      <nav className=' flex justify-between items-center max-w-[1280px] px-16 mx-auto py-5
       max-Laptop:px-8
       max-tablet:py-6
     

      '>
        <div className=' flex gap-16 justify-between items-center 
        max-Laptop:gap-12
        '>
          <div>
            <Link to='/'>
              <img src={PiggyLogo} alt="" className=' w-[12rem] max-tablet:w-[10rem]' />
            </Link>
          </div>
          <div>
            <nav className=' flex gap-6 text-[16px] font-[500] text-[#2b2b2b]
                            max-sLaptop:text-[15px]
                            max-tablet:hidden
            '>
              <nav> <Save /> </nav>
              <Link to='/invest'><nav>Invest</nav></Link>
              <Link to='/stories'><nav>Stories</nav></Link>
              <Link to='/faqs'><nav>FAQs</nav></Link>
              <nav> <Resources /> </nav>
            </nav>
          </div>
        </div>
        <div className=' flex gap-4 max-tablet:hidden
        max-Laptop:gap-2
        '>
          <ButtonCard
            title='Sign in'
            textColor="#000"
            border='1px solid black'
          />
          <ButtonCard
            title='Create free account'
            textColor="#fff"
            bgColor='#1f1d22'
          />
        </div>
        <div onClick={toggleMenu} className='hidden max-tablet:block cursor-pointer'>
          <RiMenuLine size={30} />
        </div>
      </nav>

      <div>
        {menu && (
          <div className=' w-[100%] h-screen font-[500]  '>
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header