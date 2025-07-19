import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import PiggyWhite from "../../assets/piggyWhite.png"
import PiggyBlack from "../../assets/logo.svg"
import Save from '../Save';
import Resources from '../Resources';
import ButtonCard from '../../reuseable/ButtonCard';
import { AiOutlineApi } from "react-icons/ai";

const InvestHeader = ({bgColor, logo}) => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prev => !prev)
  }

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div 
    style={{
      backgroundColor: (`${scrolled ? "#fff" : bgColor}`) || (`${scrolled ? "#fff" : "#7913E5"}`),
      // color:`${scrolled ? "#000" : "#fff"}`,
    }}
    className={`sticky top-0 z-50 w-full ${scrolled ? "shadow-[0_4px_10px_rgba(0,0,0,0.2)]" : ""} transition-all duration-700 ease-in-out`}>
      <div className={` w-[100%] ${menu ? 'fixed' : ""} z-50 `}>
        <nav className='flex justify-between items-center mx-auto px-16 max-Laptop:px-8 py-5 max-tablet:py-6 max-w-[1280px]'>
          <div className='flex justify-between items-center gap-16 max-Laptop:gap-12'>
            <div>
              <Link to='/' className=''>
                <img src={scrolled ? logo : PiggyWhite || (scrolled ? PiggyBlack : PiggyWhite)} alt="" className='w-[12rem] max-tablet:w-[10rem]' />
              </Link>
            </div>
            <div>
              <nav
                style={{

                }}
                className={`max-tablet:hidden flex gap-6 font-[500] text-[16px] max-sLaptop:text-[15px] ${scrolled ? "text-[#000]" : "text-[#fff]"}`}>
                <nav> <Save /> </nav>
                <Link to='/invest'><nav>Invest</nav></Link>
                <Link to='/stories'><nav>Stories</nav></Link>
                <Link to='/faqs'><nav>FAQs</nav></Link>
                <nav> <Resources /> </nav>
                <Link to='/store'><nav>Store</nav></Link>

              </nav>
            </div>
          </div>
          <div className='max-tablet:hidden flex gap-4 max-Laptop:gap-2'>
            <Link to='/sign-in' target='blank'>
              <ButtonCard
                border={scrolled ? "1px solid #000" : "1px solid #fff"}
                textColor={scrolled ? "#000" : "#fff"}
                title="Sign in"
              />
            </Link>
            <Link to='/create-account' target='blank'>
              <ButtonCard
                bgColor={scrolled ? "#000" : "#fff"}
                textColor={scrolled ? "#fff" : "#000"}
                title="Create free account"
              />
            </Link>
          </div>
          {/* <div onClick={toggleMenu} className={`hidden max-tablet:block cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}> */}
            <RiMenuLine size={30}  />
          </div>
        </nav>

        <div>
          {menu && (
            <div className='w-[100%] h-screen font-[500] bg-[#F2F7F8] z-40 fixed top-0 left-0'>
              <div onClick={() => setMenu(false)} className=' py-6 flex justify-between items-center px-8 text-4xl text-red-600'>
                <img src={PiggyBlack} alt="" />
                <AiOutlineApi />
              </div>
              <div>
                {/* <MobileMenu /> */}

                <nav className=' flex flex-col justify-center items-center gap-10 px-16 pt-20 max-mobile:pt-8 pb-2 text-[16px] cursor-pointer'>
                  <nav> <Save /> </nav>
                  <Link to='/invest'><nav>Invest</nav></Link>
                  <Link to='/stories'><nav>Stories</nav></Link>
                  <Link to='/faqs'><nav>FAQs</nav></Link>
                  <nav> <Resources /> </nav>
                  <Link to='/store'><nav>Store</nav></Link>

                  <Link to='/sign-in' target='blank' className='w-full'>
                    <ButtonCard
                      title='Sign in'
                      textColor="#000"
                      border='1px solid black'
                    />
                  </Link>

                  <Link to='/create-account' target='blank' className='w-full'>
                    <ButtonCard
                      title='Create free account'
                      textColor="#fff"
                      bgColor='#1f1d22'
                    />
                  </Link>

                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InvestHeader