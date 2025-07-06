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
import One from "./image/imgi_15_7ce5d757_c28c_4b2b_ae02_51fc8869816b_d5f9c522b7.jpg";
import Two from "./image/imgi_16_a3b2c1ea_93d8_6a1d_bb8e_066f59785881_2a7ce1111c.png";
import Three from "./image/imgi_17_8dc2248b_6d55_e0b8_55bf_dd21d7034223_3e1a2d0c82.png";

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
      <div className=' bg-white'>
        <div className=' max-w-[1240px] py-18 mb-38 mx-auto px-16 max-tablet:mb-20'>
          <div>
            <div>
              <h2 className=' text-2xl text-blue-500'>The Archive</h2>
              <h2 className=' text-6xl max-tablet:text-[35px]'>Read Past</h2>
            </div>
            <div><input type="text" placeholder='Search for an issue' className=' py-3 pl-4 pr-38 rounded-xl mb-10 bg-[#F4F5F6]' /></div>
          </div>
          <div className=' flex flex-col border border-gray-200 rounded-2xl'>
            <div className=' flex justify-between items-center px-7 py-5'>
              <p>Issue</p>
              <p>Date Released</p>
            </div>
            <div className=' flex bg-[#F6FAFF] justify-between px-7 py-5 items-center'>
              <div className=' w-[80%] flex gap-3 items-center'>
                <img src={One} alt="" className="rounded-2xl w-[40px] h-[40px] object-cover" />
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>Issue #03</p>
                <p className=' font-semibold text-gray-700
                max-tablet:text-[11px]
                '>- We planned our dream wedding with 2 million</p>
              </div>
              <div>
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>28 Apr, 2023</p>
              </div>
            </div>
            <div className=' flex justify-between px-7 py-5 items-center'>
              <div className=' w-[80%] flex gap-3 items-center'>
                <img src={Two} alt="" className="rounded-2xl w-[40px] h-[40px] object-cover" />
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>Issue #02</p>
                <p className=' font-semibold text-gray-700
                max-tablet:text-[11px]
                '>- I have a monthly budget for spoiling my boyfriend</p>
              </div>
              <div>
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>31 Mar, 2023</p>
              </div>
            </div>
            <div className=' flex bg-[#F6FAFF] justify-between px-7 py-5 items-center'>
              <div className=' w-[80%] flex gap-3 items-center'>
                <img src={Three} alt="" className="rounded-2xl w-[40px] h-[40px] object-cover  " />
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>Issue #01</p>
                <p className=' font-semibold text-gray-700
                max-tablet:text-[11px]
                '>- I love my job, but I’m always stressed</p>
              </div>
              <div>
                <p className=' text-gray-500
                max-tablet:text-[9px]
                '>24 Feb, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' rounded-3xl px-10 flex items-center relative max-w-[1240px] bg-[#1843D0] h-[550px] mx-auto
        max-tablet:flex-col max-tablet:py-7 max-mobile:mb-28
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