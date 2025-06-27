import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/logo.svg";
import Save from './Save';
import Resources from "./Resources";
import ButtonCard from '../reuseable/ButtonCard';

import InvestHero from "../pages/invest/InvestHero";

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

        <InvestHero />
        <div className=' absolute w-[400px] right-0 bottom-0'>
          <img src={investBg} alt="" />
        </div>
      </div>
      <div>
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
      </div>
    </>
  )
}

export default Invest