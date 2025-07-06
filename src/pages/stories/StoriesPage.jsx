import React from 'react'
import Hero from "./images/storyHero.png"
import { FaHeart } from "react-icons/fa";
import joinImage from "./images/imgi_16_stories_single_60a6c11489.png";
import ButtonCard from '../../reuseable/ButtonCard';
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
const StoriesPage = () => {
  return (
    <div className=' max-w-[1240px] mx-auto'>
      <div className=' flex justify-between items-center px-16 py-32
      max-tablet:flex-col max-tablet:gap-10  max-tablet:text-center
      max-mobile:px-1
      '>
        <div className=' flex flex-col gap-6'>
          <div className=' relative w-fit
          max-tablet:w-full max-tablet:static max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:gap-3
          
          '>
            <h1 className='text-[48px] font-bold leading-14 text-[#122231] w-[80%] 
            max-tablet:w-full
            '>Loved by our Customers</h1>
            <FaHeart color='#2B5ED3' size={50} className='absolute right-65 bottom-0 max-tablet:static' />
          </div>
          <p className=' text-[#122231] text-[20px] w-[78%]
          max-tablet:mx-auto max-tablet:w-[67%]
          max-mobile:w-[90%]
          '>
            Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them.</p>
          <button className=' w-fit text-white rounded-xl font-semibold py-4 px-5 bg-[#122231] max-tablet:mx-auto'>Add your story</button>
        </div>
        <div><img src={Hero} alt="" /></div>
      </div>

      <div className='px-26 py-32 flex items-center justify-center gap-18 mx-auto
      max-tablet:flex-col-reverse max-tablet:px-3
      max-mobile:px-4
      '>
        <div>
          <img src={joinImage} alt=""  className=' w-[500px]'/>
        </div>
        <div className=' flex flex-col gap-8 w-[50%]
        max-tablet:w-[70%] max-tablet:text-center
        max-mobile:w-full
        '>
          <h1 className=' text-[#122231] text-[35px] leading-12 font-bold w-[100%]'>Join 5+ million people who save and invest with us</h1>
          <div className=' flex items-center
          max-tablet:mx-auto max-tablet:w-[400px] max-tablet:gap-4 max-mobile:w-full
          '>
          <ButtonCard
          border='1px solid #3333'
          icon={<FaApple size={25}/>}
          padding="13px"
          textColor='#000'
          textSize='15px'
          title='Get on iPhone'
          />
          <ButtonCard
          border='1px solid #3333'
          icon={<BiLogoPlayStore size={25}/>}
          padding="13px"
          textColor='#000'
          textSize='15px'
          title='Get on Andriod'
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoriesPage