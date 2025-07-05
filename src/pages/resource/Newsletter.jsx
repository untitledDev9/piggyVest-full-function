import React from 'react'
import Header from '../../static/Header'
import PiggyLogo from "../../assets/logo.svg"
import Save from '../Save'
import Resources from '../Resources'
import ButtonCard from '../../reuseable/ButtonCard'
import Company from '../../block/hompage/company/Company'
import Footer from '../../block/footer/Footer'
import { FaArrowDownLong } from "react-icons/fa6";
import resourceHand from "./image/imgi_36_phone-hand.997efe89163d536f444840aba9c30f53.png"
import { IoLogoApple } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div>
      <Header
        logo={PiggyLogo}
        linkColor='#2b2b2b'
        save={<Save />}
        Invest="Invest"
        Stories='Stories'
        FAQs='FAQs'
        Resources={<Resources />}
        Store="Store"
        button={<ButtonCard
          title='Sign in'
          textColor="#000"
          border='1px solid black'
        />}
        button2={<ButtonCard
          title='Create free account'
          textColor="#fff"
          bgColor='#1f1d22'
        />}
      />

      <div className=' h-[70vh] flex flex-col justify-center items-center'>
        <div className=' max-w-[700px] py-10 flex flex-col gap-5 mx-auto'>
          <input type="text" className=' px-3 border-2 border-gray-300 placeholder:text-[12px] placeholder-gray-500 w-[400px] bg-white rounded-xl py-4' placeholder='Your first name...' />
          <input type="text" className=' px-3 border-2 border-gray-300 placeholder:text-[12px] placeholder-gray-500 w-[400px] bg-white rounded-xl py-4' placeholder='Your email address...' />
          <button className=' bg-blue-500 py-4 rounded-xl uppercase font-semibold text-white text-xl'>Subscribe for free</button>
        </div>
        <div className=' flex flex-col justify-center items-center gap-2'>
          <FaArrowDownLong size={40} />
          <p className='font-semibold text-xl'>Scroll down</p>
        </div>
      </div>

      <div className=' rounded-3xl px-10 flex items-center relative max-w-[1240px] bg-[#1843D0] h-[550px] mx-auto
        max-tablet:flex-col max-tablet:py-7
        '>
        <div className=' flex flex-col gap-16
            max-tablet:items-center max-tablet:gap-6
            '>
          <h1 className='max-mobile:text-3xl max-tablet:w-full max-tablet:text-center text-6xl w-[60%] font-semibold text-white'>The Better Way to Save and Invest</h1>
          <div className=' flex items-center gap-7 justify-between max-mobile:gap-2'>
            <button className='max-mobile:py-2 max-mobile:text-xl text-2xl bg-[#3333332b] py-4 px-5 rounded-4xl text-white flex items-center'><IoLogoApple size={30} /> Get on iPhone</button>
            <button className='max-mobile:py-2 max-mobile:text-xl text-2xl bg-[#3333332b] py-4 px-5 rounded-4xl text-white flex items-center'><FaGooglePlay /> Get on Andriod</button>
          </div>
        </div>
        <div className=' absolute right-0 bottom-5 w-[850px]
            max-Laptop:w-[650px]
            max-tablet:w-[450px] max-tablet:static max-tablet:py-3
            '>
          <img src={resourceHand} alt="" />
        </div>
      </div>
      <Company />
      <Footer />
    </div>
  )
}

export default Newsletter