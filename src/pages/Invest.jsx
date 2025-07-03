
import InvestHero from "../pages/invest/InvestHero";
import investBg from "../assets/investbg.png";
import SimpleInvest from './invest/SimpleInvest';
import InvestHeader from './invest/InvestHeader';
import Opportunities from "./invest/Opportunities";
import Investify from "./invest/Investify";

const Invest = () => {

  return (
    <div className="  ">
      <title>Piggy Invest</title>
      <InvestHeader />
      <div className='relative bg-[#7913E5]
      max-mobile:h-[72.5vh]
      '>
        <InvestHero />
        <div className='right-0 bottom-0 absolute w-[400px]
        max-mobile:w-[300px]
        '>
          <img src={investBg} alt="" />
        </div>
      </div>
      <div>
        <SimpleInvest />
      </div>
      <div className="py-32 
      max-mobile:py-18
      ">
        <Opportunities />
      </div>
      <div>
        <Investify />
      </div>
    </div>
  );
}

export default Invest;
