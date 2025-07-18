import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import MobileMenu from '../block/MobileMenu';




const Header = ({logo, linkColor, save, Invest, Stories,FAQs, Resources, Store, button, button2}) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <div className={` w-[100%] ${menu ? 'fixed' : ""} z-[1000] `}>
      <nav className=' bg-[#F2F7F8] flex justify-between items-center mx-auto px-16 max-Laptop:px-8 py-5 max-tablet:py-6 max-w-[1280px]'>
        <div className='flex justify-between items-center gap-16 max-Laptop:gap-12'>
          <div>
            <Link to='/' className=''>
              <img src={logo} alt="" className='w-[12rem] max-tablet:w-[10rem]' />
            </Link>
          </div>
          <div>
            <nav 
            style={{
              color: linkColor,
            }}
            className='max-tablet:hidden flex gap-6 font-[500] text-[16px] max-sLaptop:text-[15px]'>
              <nav> {save} </nav>
              <Link to='/invest'><nav>{Invest}</nav></Link>
              <Link to='/stories'><nav>{Stories}</nav></Link>
              <Link to='/faqs'><nav>{FAQs}</nav></Link>
              <nav> {Resources} </nav>
              <Link to='/store'><nav>{Store}</nav></Link>
            </nav>
          </div>
        </div>
        <div className='max-tablet:hidden flex gap-4 max-Laptop:gap-2'>
          <Link to='/sign-in' target='blank'>
          {button}
          </Link>
          <Link to='/create-account' target='blank'>
          {button2}
          </Link>
        </div>
        <div onClick={toggleMenu} className='hidden max-tablet:block cursor-pointer'>
          <RiMenuLine size={30} />
        </div>
      </nav>

      <div>
        {menu && (
          <div className='w-[100%] h-screen font-[500] bg-[#F2F7F8] z-40'>
          <div>
            <MobileMenu />
          </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header