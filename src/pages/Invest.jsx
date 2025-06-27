import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/logo.svg";
import Save from '../pages/Save';
import Resources from "../pages/Resources";
import ButtonCard from '../reuseable/ButtonCard';
import { FaApple } from "react-icons/fa";
import InvestHero from "../assets/investHeroImage.png";
import { BiLogoPlayStore } from "react-icons/bi";
import investBg from "../assets/investbg.png";

const Invest = () => {
  return (
    <>
    <div className='relative bg-[#7913E5]'>
      <Header
        logo={PiggyLogo}
        linkColor='#fff'
        save={<Save />}
        Invest="Invest"
        Stories='Stories'
        FAQs='FAQs'
        Resources={<Resources />}
        button={<ButtonCard
          title='Sign in'
          textColor="#fff"
          border='1px solid #fff'
        />}
        button2={<ButtonCard
          title='Create free account'
          textColor="#000"
          bgColor='#fff'
        />}
      />

      <div className=' relative  max-w-[1280px] px-16 mx-auto flex pt-28 justify-between items-center'>
        <div className=' flex flex-col gap-5'>
          <h1 className=' text-[48px] text-white font-[700]'>Invest on the go</h1>
          <button className=' mb-5 w-fit text-[17px] text-[#7913e5] font-[400] bg-white py-2.5 px-4 rounded-[17px]'> Up to 35% returns</button>
          <p className=' w-[60%] text-[20px] text-white font-[400] leading-[32px]'>Invest securely and confidently on the go. Up to 35% returns, 6-12 month duration.</p>
          <div className=' flex gap-4'>
            <ButtonCard
              icon={<FaApple color='#fff' size={20} />}
              title="Get on iPhone"
              textColor='#fff'
              bgColor='#122231'
            />
            <ButtonCard
              icon={<BiLogoPlayStore  size={20}/>}
              title="Get on Andriod"
              textColor='#fff'
              bgColor='#122231'
            />
          </div>
        </div>
        <div className=' w-[50%] flex justify-end z-10'>
          <img src={InvestHero} alt="" className=' w-[88%]'/>
        </div>
      </div>
        <div className=' absolute w-[400px] right-0 bottom-0'>
          <img src={investBg} alt="" />
        </div>
    </div>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
        <h1>dddd</h1>
    </>
  )
}

export default Invest