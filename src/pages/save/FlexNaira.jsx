import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexLogo from "../../assets/flex-logo.svg"
import FlexeroImage from "./images/imgi_17_i_Phone_14_flex_2d263d08a6_053045d9b9.png"
import Opportunities from '../invest/Opportunities'
import opporImage from "./images/imgi_24_image_e9186b5e07.png"
import Footer from '../../block/footer/Footer'
const FlexNaira = () => {
  return (
    <div>
      <NavPages
        logo={FlexLogo}
        mainBg='#EA4FA2'
        mainText='Flex Naira'
        text='Flexible Savings'
        desc="Flexible savings for life's emergencies. Free transfers and withdrawals. Earn up to 12% p.a.'"
        image={FlexeroImage}
      />

      <Opportunities
        heading="Stay prepared for life's emergencies"
        bgColor="#EA4FA2"
        desc="Give your emergency funds a boost! We know that emergencies can happen anytime. Building an emergency fund in Flex Naira helps you to stay ahead, so you can avoid borrowing or extra financial burden when there is a crisis. Best of all, you earn interests."
        image={opporImage}
      />

      <Footer />
    </div>
  )
}

export default FlexNaira