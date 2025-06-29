import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/piggyWhite.png"
import PiggyBlack from "../assets/logo.svg"
import Save from './Save';
import Resources from "./Resources";
import ButtonCard from '../reuseable/ButtonCard';
import InvestHero from "../pages/invest/InvestHero";
import investBg from "../assets/investbg.png";
import SimpleInvest from './invest/SimpleInvest';
import InvestHeader from './invest/InvestHeader';

const Invest = () => {

  return (
    <>
      <title>Piggy Invest</title>

<InvestHeader />


      <div className='relative bg-[#7913E5]'>
        <InvestHero />
        <div className='right-0 bottom-0 absolute w-[400px]'>
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
