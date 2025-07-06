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
      <div className=' flex justify-between items-center px-16 py-32'>
        <div className=' flex flex-col gap-6'>
          <div className=' relative w-fit'>
            <h1 className='text-[48px] font-bold leading-14 text-[#122231] w-[80%] '>Loved by our Customers</h1>
            <FaHeart color='#2B5ED3' size={50} className='absolute right-65 bottom-0' />
          </div>
          <p className=' text-[#122231] text-[20px] w-[78%]'>
            Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them.</p>
          <button className=' w-fit text-white rounded-xl font-semibold py-4 px-5 bg-[#122231]'>Add your story</button>
        </div>
        <div><img src={Hero} alt="" /></div>
      </div>

      <div className='px-26 py-32 flex items-center justify-center gap-18 mx-auto'>
        <div>
          <img src={joinImage} alt=""  className=' w-[500px]'/>
        </div>
        <div className=' flex flex-col gap-8 w-[50%]'>
          <h1 className=' text-[#122231] text-[35px] leading-12 font-bold w-[100%]'>Join 5+ million people who save and invest with us</h1>
          <div className=' flex items-center'>
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