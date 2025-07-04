import React from 'react'
import NavPages from '../../components/pages/NavPages'
import HouseLogo from "../../assets/orange-logo.svg"
import HouseHeroImage from "./images/imgi_16_house_money_2_4073dd98b5.png"

const HouseMoney = () => {
  return (
    <div>
      <NavPages
        logo={HouseLogo}
        mainBg='#0C0E1B'
        mainText='House Money'
        text='Semi Strict Wallet'
        desc='Semi-strict wallet to save for your house rent and bills. Earn up to 14% interest p.a'
        image={HouseHeroImage}
      />
    </div>
  )
}

export default HouseMoney