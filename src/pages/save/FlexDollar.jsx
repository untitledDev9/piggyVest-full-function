import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexDollarHeroImage from "./images/imgi_17_i_Phone_14_dollar_aaf7816ad9_171687cb90.png"
const FlexDollar = () => {
  return (
    <div>
      <NavPages
        mainBg='#0C1825'
        mainText='Flex Dollar'
        text='Dollar Savings'
        desc='Save and grow your money in foreign currencies such as Dollars.'
        image={FlexDollarHeroImage}
      />
    </div>
  )
}

export default FlexDollar