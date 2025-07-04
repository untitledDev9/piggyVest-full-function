import React from 'react'
import NavPages from '../../components/pages/NavPages'
import TargetHeroImage from "./images/imgi_17_i_Phone_14_target_6162ef9624_27e8f7a345.png"
import TargerLogo from "../../assets/target-logo.svg";

const Target = () => {
  return (
    <div>
      <NavPages
        logo={TargerLogo}
        mainBg='#10B259'
        mainText='Target Savings'
        text='Goal-oriented Savings'
        desc='Invest securely and confidently on the go. Up to 35% returns, 6-12 month duration.'
        image={TargetHeroImage}
      />
    </div>
  )
}

export default Target