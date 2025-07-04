import React from 'react'
import PiggyBankLogo from "../../assets/logo-alt.svg";
import PiggyHeroImage from "./images/imgi_17_PB_18_big_ddae2e966c.png";
import NavPages from '../../components/pages/NavPages';
import Opportunities from '../invest/Opportunities';
import opporImage from "./images/imgi_37_image_ca24bb2340.png";
import Footer from '../../block/footer/Footer';
import Company from '../../block/hompage/company/Company';
import SaveDropCard from './resuseable/SaveDropCard';


const PiggyBank = () => {
  return (
    <div>
      <NavPages
        logo={PiggyBankLogo}
        mainBg='#0D60D8'
        mainText='Piggybank'
        text='Automated savings'
        desc='Strict daily, weekly or monthly automatic savings. Earn up to 18% p.a.'
        image={PiggyHeroImage}
      />

      <SaveDropCard />

      <Opportunities
        bgColor="#0D60D8"
        heading="Build your savings small small!"
        desc="With Piggybank, you can save periodically, automatically or manually. You can also save as you go, on your own terms. You’re the boss of your savings, choose how you want to save."
        image={opporImage}
      />
      <Company />
      <Footer />
    </div>
  )
}

export default PiggyBank