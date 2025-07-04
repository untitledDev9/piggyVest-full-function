
import SimpleInvest from './invest/SimpleInvest';
import InvestLogo from "../assets/investify-logo.svg";
import Opportunities from "./invest/Opportunities";
import Investify from "./invest/Investify";
import NavPages from "../components/pages/NavPages";
import InvestHero from "./invest/images/imgi_16_i_Phone_14_invest_67e86f3edf_761a6d7c25.png";
import madeEasy from "./invest/images/imgi_46_image_10ee373879.png";
import Footer from '../block/footer/Footer';
const Invest = () => {

  return (
    <div className="  ">
      <title>Piggy Invest</title>
      <NavPages
        logo={InvestLogo}
        mainBg='#7913E5'
        mainText='Invest on the go'
        text='Up to 35% returns'
        desc='Invest securely and confidently on the go. Up to 35% returns, 6-12 month duration.'
        image={InvestHero}
      />
      <div>
        <SimpleInvest />
      </div>
      <div className="py-32 
      max-mobile:py-18
      ">
        <Opportunities 
        bgColor='#7913E5'
        heading='We’ve made it easier for anyone to get started.'
        desc='Finally, you can access pre-vetted low-medium risk primary and secondary investment opportunities easily with any amount you have. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.'
        image={madeEasy}
        />
      </div>
      <div>
        <Investify />
      </div>




      <Footer />
    </div>
  );
}

export default Invest;
