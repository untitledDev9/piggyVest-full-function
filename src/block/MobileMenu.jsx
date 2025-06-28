import React from 'react'
import Save from '../pages/Save'
import Resources from '../pages/Resources'
import ButtonCard from '../reuseable/ButtonCard'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <nav className='  pt-20 pb-22 px-16 flex flex-col justify-center items-center gap-10 text-[16px] cursor-pointer z-50'>
      <nav> <Save /> </nav>
      <Link to='/invest'><nav>Invest</nav></Link>
      <Link to='/stories'><nav>Stories</nav></Link>
      <Link to='/faqs'><nav>FAQs</nav></Link>
      <nav> <Resources /> </nav>

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
  )
}

export default MobileMenu