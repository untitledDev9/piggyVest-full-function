
import InvestHero from "../pages/invest/InvestHero";
import investBg from "../assets/investbg.png";
import SimpleInvest from './invest/SimpleInvest';
import InvestHeader from './invest/InvestHeader';
import Opportunities from "./invest/Opportunities";
import Investify from "./invest/Investify";

const Invest = () => {

  return (
    <>
      <title>Piggy Invest</title>
      <InvestHeader />
      <div className='relative bg-[#7913E5]
      '>
        <InvestHero />
        <div className='right-0 bottom-0 absolute w-[400px]'>
          <img src={investBg} alt="" />
        </div>
      </div>
      <div>
        <SimpleInvest />
      </div>
      <div className="py-32 ">
        <Opportunities />
      </div>
      <div>
        <Investify />
      </div>
    </>
  );
}

export default Invest;
