import React from 'react'
import NavPages from '../../components/pages/NavPages'
import TargetHeroImage from "./images/imgi_17_i_Phone_14_target_6162ef9624_27e8f7a345.png"
import TargerLogo from "../../assets/target-logo.svg";
import opporImage from "./images/imgi_47_image_66819700ec.png"
import Opportunities from '../invest/Opportunities';
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

      <Opportunities
        heading='Saving ‘just because’ is great, but saving for something special is a lot of fun.'
        bgColor="#10B259"
        desc="Got a savings goal in mind? We’ll help you reach it! Saving for a new phone? Check. Dad’s surprise birthday? Check. A new car, special vacation? Check and check. Target Savings helps you reach all your savings goals easily and faster."
        image={opporImage}
      />
    </div>
  )
}

export default Target