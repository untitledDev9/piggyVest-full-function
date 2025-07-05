import React from 'react'
import NavPages from '../../components/pages/NavPages'
import TargetHeroImage from "./images/imgi_17_i_Phone_14_target_6162ef9624_27e8f7a345.png"
import TargerLogo from "../../assets/target-logo.svg";
import opporImage from "./images/imgi_47_image_66819700ec.png"
import Opportunities from '../invest/Opportunities';
import Footer from '../../block/footer/Footer';
import One from "./images/imgi_19_IMG_5250_1_2_9e56be87ec_e28de045cc (1).png";
import Two from "./images/imgi_20_IMG_5250_1_3_7d601126fa_c79535a7a5.png";
import Join from '../../block/hompage/join/Join';
import Company from '../../block/hompage/company/Company';
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

      <div className=' pb-28'>
        <div className='text-center py-20 max-tablet:px-3'>
          <h1 className=' text-[50px] font-bold
                    max-tablet:text-[40px]
                    max-mobile:text-[32px]
                        '>Save towards multiple goals</h1>
          <p className=' text-[#3d4f60]'>
            Target Savings helps you get there faster. You can even team up with others to reach a collective target.</p>
        </div>
        <div className='max-w-[1240px] flex flex-wrap mx-auto gap-10 justify-evenly'>
          <div className=' bg-white flex flex-col gap-10 w-[360px] pt-14 px-5 h-[550px] rounded-3xl justify-between items-center'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#10B259] font-bold leading-10'>Your target(s), your rules</h1>
              <p className=' text-[#3d4f60] leading-8'>
                Customise the rules and duration of your target savings as you wish. From public mode, automated savings, to multiple targets, you’re in control.</p>
            </div>
            <div><img src={One} alt="" className=' w-[300px]' /></div>
          </div>
          <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#10B259] font-bold leading-10'>Save with a group</h1>
              <p className=' text-[#3d4f60] leading-8'>
                Challenge yourself to meet your goals by saving towards a common goal with a group. No one has access to your funds but you.</p>
            </div>
            <div className=' w-[300px]'><img src={Two} alt="" /></div>
          </div>
          <div className=' bg-white flex flex-col justify-between items-center w-[360px]  pt-14 px-5 gap-10 h-[550px] rounded-3xl'>
            <div className=' flex gap-5 flex-col'>
              <h1 className=' text-[36px] text-[#10B259] font-bold leading-10'>Daily interest accrued</h1>
              <p className=' text-[#3d4f60] leading-8'>
                Earn 12% per annum to help you reach your goal faster. Think of it as a reward for meeting your target.</p>
            </div>
            {/* <div className=' w-[300px]'><img src={Three} alt="" className=' w-full'/></div> */}
          </div>
        </div>
      </div>

      <Opportunities
        heading='Saving ‘just because’ is great, but saving for something special is a lot of fun.'
        bgColor="#10B259"
        desc="Got a savings goal in mind? We’ll help you reach it! Saving for a new phone? Check. Dad’s surprise birthday? Check. A new car, special vacation? Check and check. Target Savings helps you reach all your savings goals easily and faster."
        image={opporImage}
      />

<Join />
<Company />
      <Footer />
    </div>
  )
}

export default Target