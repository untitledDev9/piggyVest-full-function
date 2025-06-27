import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/logo.svg";
import Save from '../pages/Save';
import Resources from "../pages/Resources";
import ButtonCard from '../reuseable/ButtonCard';

const Invest = () => {
  return (
    <div className=' bg-[#7913E5]'>
      <Header
        logo={PiggyLogo}
        linkColor='#fff'
        save={<Save />}
        Invest="Invest"
        Stories='Stories'
        FAQs='FAQs'
        Resources={<Resources />}
        button={<ButtonCard
          title='Sign in'
          textColor="#fff"
          border='1px solid #fff'
        />}
        button2={<ButtonCard
          title='Create free account'
          textColor="#000"
          bgColor='#fff'
        />}
      />

      <div>
        <div>
          <h1>Invest on the go</h1>
          <button> Up to 35% returns</button>
          <p>Invest securely and confidently on the go. Up to 35% returns, 6-12 month duration.</p>
          <div>
            <ButtonCard 
            icon=''
            title="Get on iPhone"
            textColor='#fff'
            bgColor='#122231'
            />
            <ButtonCard 
            icon=''
            title="Get on Andriod"
            textColor='#fff'
            bgColor='#122231'
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Invest