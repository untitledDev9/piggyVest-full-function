import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexDollarHeroImage from "./images/imgi_17_i_Phone_14_dollar_aaf7816ad9_171687cb90.png"
import Opportunities from '../invest/Opportunities'
import opporImage from "./images/imgi_47_image_66819700ec.png"
import Footer from '../../block/footer/Footer'
import blackLogo from "../../assets/logo.svg"
import Company from '../../block/hompage/company/Company'
import One from "./images/imgi_19_IMG_5251_1_4dd7391f63_4af9ddf3c4.png"
import Three from "./images/imgi_21_Frame1046_79e34f2705.png"
import Two from "./images/imgi_20_IMG_5250_1_7_27093b628f_6155132c61.png"
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


                  <div className=' pb-28'>
                    <div className='text-center py-20 max-tablet:px-3'>
                      <h1 className=' text-[50px] font-bold
                    max-tablet:text-[40px]
                    max-mobile:text-[32px]
                        '>Preserve and grow your money</h1>
                      <p className=' text-[#3d4f60]'>
                        Target Savings helps you get there faster. You can even team up with others to reach a collective target.</p>
                    </div>
                    <div className='max-w-[1240px] flex flex-wrap mx-auto gap-10 justify-evenly'>
                      <div className=' bg-white flex flex-col gap-10 w-[360px] pt-14 px-5 h-[550px] rounded-3xl justify-between items-center'>
                        <div className=' flex gap-5 flex-col'>
                          <h1 className=' text-[36px] text-[#0C1825] font-bold leading-10'>Diversify your savings</h1>
                          <p className=' text-[#3d4f60] leading-8'>
                            Having different types of savings and investments helps you reach your goals faster, and can protect you against risk and volatility.</p>
                        </div>
                        <div><img src={One} alt="" className=' w-[300px]' /></div>
                      </div>
                      <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
                        <div className=' flex gap-5 flex-col'>
                          <h1 className=' text-[36px] text-[#0C1825] font-bold leading-10'>Withdraw anytime</h1>
                          <p className=' text-[#3d4f60] leading-8'>
                            You can withdraw at anytime.</p>
                        </div>
                        <div className=' w-[300px]'><img src={Two} alt="" /></div>
                      </div>
                      <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
                        <div className=' flex gap-5 flex-col'>
                          <h1 className=' text-[36px] text-[#0C1825] font-bold leading-10'>Earn interest</h1>
                          <p className=' text-[#3d4f60] leading-8'>
                            Earn up to 7% p/a paid monthly.</p>
                        </div>
                        <div className=' w-[300px]'><img src={Three} alt="" className=' w-full'/></div>
                      </div>
                    </div>
                  </div>

      <Opportunities
        heading="Preserve the value of your money"
        bgColor="#0C1825"
        desc="One of the key elements in wealth management is preserving (and growing) the value of your savings. In simple terms, this means not losing value on your savings. Saving in foreign currencies like Dollars helps to hedge against that."
        image={opporImage}
      />

      <Company />
      <Footer />
    </div>
  )
}

export default FlexDollar