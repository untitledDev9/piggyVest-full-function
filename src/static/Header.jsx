import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonCard from '../reuseable/ButtonCard'
import { FaGooglePlay } from "react-icons/fa";

import PiggyLogo from "../assets/logo.svg";
import Save from '../pages/Save';
import Resources from "../pages/Resources";
import { RiMenuLine } from "react-icons/ri";




const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }
  return (
    <div>
      <nav className=' flex justify-between items-center max-w-[1280px] px-16 mx-auto py-4
      max-Laptop:bg-amber-600 max-sLaptop:px-12
      max-tablet:bg-green-500
      max-mobile:bg-blue-500

      '>
        <div className=' flex gap-16 justify-between items-center '>
          <div>
            <Link to='/'>
              <img src={PiggyLogo} alt="" className=' w-[12rem]'/>
            </Link>
          </div>
          <div>
            <nav className=' flex gap-4 text-[16px] 
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
        <div className=' flex gap-4 max-tablet:hidden'>
          <ButtonCard
            title='Sign in'
            textColor="#000"
            border='1px solid black'
            icon={<FaGooglePlay />}
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
          <div className=' w-[100%] bg-amber-200 h-screen font-[500]  '>
            <nav className=' pt-32 pb-20 px-16 bg-red-500 flex flex-col justify-center items-center gap-10 text-[16px]'>
              <nav> <Save /> </nav>
              <Link to='/invest'><nav>Invest</nav></Link>
              <Link to='/stories'><nav>Stories</nav></Link>
              <Link to='/faqs'><nav>FAQs</nav></Link>
              <nav> <Resources /> </nav>


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

            </nav>




          </div>
        )}
      </div>
    </div>
  )
}

export default Header