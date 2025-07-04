import React from 'react'
import savelockLogo from "../../assets/safelock-logo.svg";
import SavelockHeroImage from "./images/imgi_17_SL_22_Big_a94bd44781.png";
import NavPages from '../../components/pages/NavPages';
import Opportunities from '../invest/Opportunities';
import opporImage from "./images/imgi_37_image_2baa78cfe9.png";
import Footer from '../../block/footer/Footer';
const SaveLock = () => {
  return (
    <div>
      <NavPages 
      logo={savelockLogo}
      mainBg='#2295F2'
      mainText='Piggybank'
      text='Automated savings'
      desc='Strict daily, weekly or monthly automatic savings. Earn up to 18% p.a.'
      image= {SavelockHeroImage}
      />

      <Opportunities 
      heading='Avoid temptations & lock your money.'
      bgColor="#2295F2"
      desc="Safelock allows you to set money aside for a fixed period of time without having access to it until maturity. It’s like having your own custom fixed deposit."
      image={opporImage}
      />

      <Footer />
    </div>
  )
}

export default SaveLock