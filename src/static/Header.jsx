import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import MobileMenu from '../block/MobileMenu';




const Header = ({logo, linkColor, save, Invest, Stories,FAQs, Resources, button, button2}) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <div className={` w-[100%] ${menu ? 'fixed' : ""} z-50`}>
      <nav className=' flex justify-between items-center max-w-[1280px] px-16 mx-auto py-5
       max-Laptop:px-8
       max-tablet:py-6
     

      '>
        <div className=' flex gap-16 justify-between items-center 
        max-Laptop:gap-12
        '>
          <div>
            <Link to='/' className=''>
              <img src={logo} alt="" className=' w-[12rem] max-tablet:w-[10rem] ' />
            </Link>
          </div>
          <div>
            <nav 
            style={{
              color: linkColor,
            }}
            className=' flex gap-6 text-[16px] font-[500] 
                            max-sLaptop:text-[15px]
                            max-tablet:hidden
            '>
              <nav> {save} </nav>
              <Link to='/invest'><nav>{Invest}</nav></Link>
              <Link to='/stories'><nav>{Stories}</nav></Link>
              <Link to='/faqs'><nav>{FAQs}</nav></Link>
              <nav> {Resources} </nav>

            </nav>
          </div>
        </div>
        <div className=' flex gap-4 max-tablet:hidden
        max-Laptop:gap-2
        '>
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
          <div className=' w-[100%] h-screen font-[500]  '>
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header