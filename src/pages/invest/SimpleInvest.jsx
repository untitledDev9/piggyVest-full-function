import React from 'react'
import SimpleInvestCard from './reuse/SimpleInvestCard'
import simpleOne from "../../assets/simpleOne.png"
import simpleTwo from "../../assets/simpleTwo.png"
import simpleThree from "../../assets/simpleThree.png"


const SimpleInvest = () => {
  return (
    <div className=' py-18 flex flex-col gap-22'>
    <div className=' text-center
    max-mobile:gap-4 max-mobile:flex max-mobile:flex-col
    '>
      <h1 className=' text-[51px] text-[#122231] font-[600]
      max-tablet:text-[40px]
      max-tablet:w-[90%] max-tablet:mx-auto max-tablet:leading-13
      '>Simple investments with great returns</h1>
      <p className=' text-[#3d4f60]'>Investments are made readily accessible to everyone</p>
    </div>
    <div className=' flex items-center justify-center gap-12
    max-tablet:flex-wrap max-tablet:text-center
    '>
      <SimpleInvestCard 
      title="Investments simplified"
      description="With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome."
      image={simpleOne}
      />
      <SimpleInvestCard 
      title="Invest confidently"
      description="We work with leading licensed investment houses such as ARM, AIICO and Stanbic."
      image={simpleTwo}
      />
      <SimpleInvestCard 
      title="Diversify your portfolio"
      description="Invest in various industries such as fixed income instruments, agriculture, transportation, etc."
      image={simpleThree}
      />
    </div>
    </div>
  )
}

export default SimpleInvest