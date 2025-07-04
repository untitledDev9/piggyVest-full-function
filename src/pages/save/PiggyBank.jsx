import React from 'react'
import PiggyBankLogo from "../../assets/logo-alt.svg";
import PiggyHeroImage from "./images/imgi_17_PB_18_big_ddae2e966c.png";
import NavPages from '../../components/pages/NavPages';



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
    </div>
  )
}

export default PiggyBank