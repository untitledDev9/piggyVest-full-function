import React from 'react'
import Header from '../static/Header'
import PiggyLogo from "../assets/logo.svg";
import Save from '../pages/Save';
import Resources from "../pages/Resources";
import ButtonCard from '../reuseable/ButtonCard';
import Target from './save/Target';
import AllSaveBody from "../pages/save/resuseable/AllSaveBody";

const HomePage = () => {
  return (
    <>
    <div className=' '>
        <Header 
        logo={PiggyLogo}
        linkColor='#2b2b2b'
        save={<Save />}
        Invest="Invest"
        Stories='Stories'
        FAQs='FAQs'
        Resources= {<Resources />}
        Store="Store"
        button={<ButtonCard 
          title='Sign in'
          textColor="#000"
          border='1px solid black'
        />}
        button2={<ButtonCard 
          title='Create free account'
          textColor="#fff"
          bgColor='#1f1d22'
        />}
        />
    </div>

    <div>
<AllSaveBody />
    </div>
</>
  )
}

export default HomePage