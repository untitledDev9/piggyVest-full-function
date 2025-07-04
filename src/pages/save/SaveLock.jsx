import React from 'react'
import savelockLogo from "../../assets/safelock-logo.svg";
import SavelockHeroImage from "./images/imgi_17_SL_22_Big_a94bd44781.png";
import NavPages from '../../components/pages/NavPages';
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
    </div>
  )
}

export default SaveLock