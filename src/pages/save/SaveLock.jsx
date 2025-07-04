import React from 'react'
import savelockLogo from "../../assets/safelock-logo.svg";
import SavelockHeroImage from "./images/imgi_17_SL_22_Big_a94bd44781.png";
import NavPages from '../../components/pages/NavPages';
import Opportunities from '../invest/Opportunities';
import opporImage from "./images/imgi_37_image_2baa78cfe9.png";
import Footer from '../../block/footer/Footer';
import Join from '../../block/hompage/join/Join';
import Company from '../../block/hompage/company/Company';
import One from "../save/resuseable/images/imgi_19_IMG_5250_1_58c3dc85dd_66427f269f.png";
import Two from "./resuseable/images/imgi_20_Frame10_3416f07a9c.png";
import Three from "./resuseable/images/imgi_21_interest_fc693fa233.png";
const SaveLock = () => {
  return (
    <div>
      <NavPages
        logo={savelockLogo}
        mainBg='#2295F2'
        mainText='Piggybank'
        text='Automated savings'
        desc='Strict daily, weekly or monthly automatic savings. Earn up to 18% p.a.'
        image={SavelockHeroImage}
      />

      <div className=' pb-28'>
        <div className='text-center py-20 max-tablet:px-3'>
          <h1 className=' text-[50px] font-bold
        max-tablet:text-[40px]
        max-mobile:text-[32px]
            '>Stay disciplined and avoid temptation</h1>
          <p className=' text-[#3d4f60]'>
            Lock funds to avoid temptations. Earn your interest upfront and paid instantly.</p>
        </div>
        <div className='max-w-[1240px] flex flex-wrap mx-auto gap-10 justify-evenly'>
          <div className=' bg-white flex flex-col gap-10 w-[360px] pt-14 px-5 h-[550px] rounded-3xl justify-between items-center'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#2295F2] font-bold leading-10'>You’re in control</h1>
              <p className=' text-[#3d4f60] leading-8'>
                You can lock for as little as 10 days or as much as 365 days.</p>
            </div>
            <div><img src={One} alt="" className=' w-[300px]' /></div>
          </div>
          <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#2295F2] font-bold leading-10'>Manage your money</h1>
              <p className=' text-[#3d4f60] leading-8'>
                Set aside funds for a fixed period of time without having access to it until maturity.</p>
            </div>
            <div className=' w-[300px]'><img src={Two} alt="" /></div>
          </div>
          <div className=' bg-white flex flex-col justify-start items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#2295F2] font-bold leading-10'>Earn interest upfront</h1>
              <p className=' text-[#3d4f60] leading-8'>
                Up to 20% interest per annum, paid upfront.</p>
            </div>
            <div className=' w-[300px] h-[30px] '><img src={Three} alt="" className='h-[330px] w-full'/></div>
          </div>
        </div>
      </div>



      <Opportunities
        heading='Avoid temptations & lock your money.'
        bgColor="#2295F2"
        desc="Safelock allows you to set money aside for a fixed period of time without having access to it until maturity. It’s like having your own custom fixed deposit."
        image={opporImage}
      />
      <Join />
      <Company />
      <Footer />
    </div>
  )
}

export default SaveLock