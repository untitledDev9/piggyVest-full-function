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

import { useState, useEffect } from 'react';

const Invest = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <title>Piggy Invest</title>

      <div className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-white text-black ' : 'bg-[#7913E5] text-white max-tablet:text-black'} ${scrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)]" : ""} transition-all duration-700 ease-in-out`}>
        <Header
          logo={scrolled ? PiggyBlack : PiggyLogo}
          linkColor={scrolled ? "#000" : "#fff"}
          save={<Save />}
          Invest="Invest"
          Stories='Stories'
          FAQs='FAQs'
          Resources={<Resources />}
          button={<ButtonCard
            title='Sign in'
            textColor={scrolled ? "#000" : "#fff"}
            border={`1px solid ${scrolled ? '#000' : '#fff'}`}
          />}
          button2={<ButtonCard
            title='Create free account'
            textColor={scrolled ? '#fff' : "#000"}
            bgColor={scrolled ? "#000" : "#fff"}
          />}
        />
      </div>


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
