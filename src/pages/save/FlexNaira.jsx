import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexLogo from "../../assets/flex-logo.svg"
import FlexeroImage from "./images/imgi_17_i_Phone_14_flex_2d263d08a6_053045d9b9.png"
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
    </div>
  )
}

export default FlexNaira