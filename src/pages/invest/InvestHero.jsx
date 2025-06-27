import React from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import ButtonCard from '../../reuseable/ButtonCard';
import InvestHeroImage from "../../assets/investHeroImage.png";

const InvestHero = () => {
  return (
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
              <img src={InvestHeroImage} alt="" className=' w-[88%]'/>
            </div>
          </div>
  )
}

export default InvestHero