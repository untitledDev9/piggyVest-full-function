import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexDollarHeroImage from "./images/imgi_17_i_Phone_14_dollar_aaf7816ad9_171687cb90.png"
import Opportunities from '../invest/Opportunities'
import opporImage from "./images/imgi_47_image_66819700ec.png"
import Footer from '../../block/footer/Footer'
import blackLogo from "../../assets/logo.svg"
const FlexDollar = () => {
  return (
    <div>
      <NavPages
      logo={blackLogo}
        mainBg='#0C1825'
        mainText='Flex Dollar'
        text='Dollar Savings'
        desc='Save and grow your money in foreign currencies such as Dollars.'
        image={FlexDollarHeroImage}
      />

      <Opportunities
      
        heading="Preserve the value of your money"
        bgColor="#0C1825"
        desc="One of the key elements in wealth management is preserving (and growing) the value of your savings. In simple terms, this means not losing value on your savings. Saving in foreign currencies like Dollars helps to hedge against that."
        image={opporImage}
      />

      <Footer />
    </div>
  )
}

export default FlexDollar