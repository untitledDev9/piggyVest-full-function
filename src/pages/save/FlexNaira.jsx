import React from 'react'
import NavPages from '../../components/pages/NavPages'
import FlexLogo from "../../assets/flex-logo.svg"
import FlexeroImage from "./images/imgi_17_i_Phone_14_flex_2d263d08a6_053045d9b9.png"
import Opportunities from '../invest/Opportunities'
import opporImage from "./images/imgi_24_image_e9186b5e07.png"
import Footer from '../../block/footer/Footer'
import Join from '../../block/hompage/join/Join'
import Company from '../../block/hompage/company/Company'
import One from "./images/imgi_19_IMG_5250_1_4_03f9c23136_d0b038aa40.png"
import Two from "./images/imgi_20_IMG_5250_1_5_7c3e5da045_f8f7c56330.png"
import Three from "./images/imgi_21_IMG_5250_1_6_e505eece84_ec4b3ebae3.png"



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


            <div className=' pb-28'>
              <div className='text-center py-20 max-tablet:px-3'>
                <h1 className=' text-[50px] font-bold
              max-tablet:text-[40px]
              max-mobile:text-[32px]
                  '>Be better prepared for emergencies.</h1>
                <p className=' text-[#3d4f60]'>
                  Building an emergency fund helps hedge against life’s risks and can help reduce frivolous spending.</p>
              </div>
              <div className='max-w-[1240px] flex flex-wrap mx-auto gap-10 justify-evenly'>
                <div className=' bg-white flex flex-col gap-10 w-[360px] pt-14 px-5 h-[550px] rounded-3xl justify-between items-center'>
                  <div className=' flex gap-5 flex-col'>
                    <h1 className=' text-[36px] text-[#EA4FA2] font-bold leading-10'>Free transfers and withdrawals</h1>
                    <p className=' text-[#3d4f60] leading-8'>
                      Withdraw or transfer anytime you need to..</p>
                  </div>
                  <div><img src={One} alt="" className=' w-[300px]' /></div>
                </div>
                <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
                  <div className=' flex gap-5 flex-col'>
                    <h1 className=' text-[36px] text-[#EA4FA2] font-bold leading-10'>Manage your money</h1>
                    <p className=' text-[#3d4f60] leading-8'>
                      Organise, separate, name and categorise your emergency funds with Labels in Flex Nair</p>
                  </div>
                  <div className=' w-[300px]'><img src={Two} alt="" /></div>
                </div>
                <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
                  <div className=' flex gap-5 flex-col'>
                    <h1 className=' text-[36px] text-[#EA4FA2] font-bold leading-10'>Earn interest</h1>
                    <p className=' text-[#3d4f60] leading-8'>
                      We believe that every money you have saved should be earning you interests, even if it's an emergency fund.</p>
                  </div>
                  <div className=' w-[300px]'><img src={Three} alt="" className=' w-full'/></div>
                </div>
              </div>
            </div>

      <Opportunities
        heading="Stay prepared for life's emergencies"
        bgColor="#EA4FA2"
        desc="Give your emergency funds a boost! We know that emergencies can happen anytime. Building an emergency fund in Flex Naira helps you to stay ahead, so you can avoid borrowing or extra financial burden when there is a crisis. Best of all, you earn interests."
        image={opporImage}
      />
<Join />
<Company />
      <Footer />
    </div>
  )
}

export default FlexNaira