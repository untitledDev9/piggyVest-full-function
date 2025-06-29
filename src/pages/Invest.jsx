import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/piggyWhite.png"
import Save from './Save';
import Resources from "./Resources";
import ButtonCard from '../reuseable/ButtonCard';
import InvestHero from "../pages/invest/InvestHero";
import investBg from "../assets/investbg.png";
import SimpleInvest from './invest/SimpleInvest';

const Invest = () => {
  return (
    <>
      
      <div className="sticky top-0 z-50 w-full bg-[#7913E5]">
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
      </div>

      
      <div className='relative bg-[#7913E5]'>
        <InvestHero />
        <div className='absolute w-[400px] right-0 bottom-0'>
          <img src={investBg} alt="" />
        </div>
      </div>

      
      <div>
        <SimpleInvest />
      </div>
    </>
  );
}

export default Invest;
