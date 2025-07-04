import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import InvestHeader from '../../pages/invest/InvestHeader';
const NavPages = ({logo, mainBg, mainText, text, desc, image}) => {
  return (
    <div>
      <section
      style={{
        backgroundColor: mainBg
      }}>


      <InvestHeader
          bgColor={mainBg}
          logo={logo}
        />


        <div className='  relative max-w-[1280px] px-16 mx-auto flex pt-28 justify-between items-center
          max-tablet:flex-col max-tablet:w-[60%] max-tablet:text-center max-tablet:px-5
          max-mobile:w-full max-mobile:gap-0          
          '>
          <div className=' flex flex-col gap-5
            max-tablet:gap-0
            '>
            <h1 className=' text-[48px] text-white font-[700]'>{mainText}</h1>
            <button 
            style={{
              color: mainBg,
            }}
            className=' mb-5 w-fit text-[17px] font-[400] bg-white py-2.5 px-4 rounded-[17px]
                    max-tablet:mx-auto
                    '>{text}</button>
            <p className=' w-[60%] text-[20px] text-white font-[400] leading-[32px]
                    max-tablet:w-[80%] max-tablet:mx-auto
                    max-mobile:text-[18px]
                    '>{desc}</p>
            <div className=' flex gap-4
                    max-tablet:mx-auto max-tablet:mb-18 max-tablet:mt-16
                    max-mobile:mb-10 max-mobile:mt-10
                    '>
              <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                              max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                              justify-center text-white bg-[#122231]
                              max-tablet:w-fit max-tablet:p-4 
                              max-mobile:p-5
                              '>
                <FaApple color='#fff' size={20} />
                Get in iPhone
              </button>


              <button className=' px-4 py-3.5 rounded-[10px] text-[15px] flex gap-2 items-center font-[500]
                              max-sLaptop:px-3 max-sLaptop:py-2 max-sLaptop:text-[16px]
                              max-tablet:w-fit justify-center text-white bg-[#122231]
                              max-tablet:px-4  max-tablet:py-4
                              max-mobile:p-5
                              '>
                <BiLogoPlayStore size={20} />
                Get on Andriod
              </button>
            </div>
          </div>
          <div className=' w-[50%] flex justify-end z-10
            max-tablet:w-full max-tablet:justify-center
            max-mobile:w-[100%]
            '>
            <img src={image} alt="" className=' w-[95%]' />
          </div>

        </div>
      </section>
    </div>
  )
}

export default NavPages