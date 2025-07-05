import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";



const Statement = () => {

  const questions = [
    {
      title: "Statement of Account",
      answer: {
        head: "How can I get a Piggyvest Statement of Account?",
        desc: "To get your Piggyvest statement of account, please log into your Piggyvest app and click on 'Account', select 'Generate Account Statement' and follow the prompt.You can also send an email to contact@piggyvest.com stating your registered email address and the preferred duration of your statement of account. A well - detailed, signed, and stamped statement of account will be automatically generated to you from the app within minutes"
      },
    },
    {
      title: "HouseMoney",
      answer: {
        head: "How To Create Your HouseMoney?",
        desc: "To create your House Money, log into your Piggyvest account, click on Savings, and select House Money. Click on 'What is your rent', input your preferred amount, and the rent due date and complete the prompts to save and create your own House Money."
      },
    },
    {
      title: "Piggybank™ Savings",
      answer: {
        head: "Do I have to login every time I want to save?",
        desc: "No, everything is done automatically once you have set up your Autosave, except you want to top up your savings using the QuickSave option. To keep track, all transactions on your debit card will be visible on your dashboard. We will also send an email receipt to you every single time you save with your card, and your bank will send you an alert as well. It's 100% secure."
      },
    },
    {
      title: "Withdrawals",
      answer: {
        head: "How Does Piggybank Withdrawals Work?",
        desc: "You can withdraw for FREE only on set free withdrawal dates on your Piggybank wallet. You can set your own FREE withdrawal dates OR make use of the PiggyVest quarterly fixed FREE withdrawal dates. After the request has been made, funds will be sent to your bank account, Pocket account, or to your Flex Naira account instantly. However, withdrawals above 3m take 3 working hours(Mon-Fri) to be processed. "
      },
    },
    {
      title: "BVN",
      answer: {
        head: "Why do I have to add my BVN?",
        desc: "Your BVN is required to validate your identity and kick against identity theft. This ensures another level of safety for your funds and transactions. It also unlocks other features like generating a flex account number in your name, which can be used for transfers directly from your banking app to your Piggyvest account."
      },
    },
  ]



const [dropDown, setDropDown] = useState(null)
const toggleDrop = (index) => {
  setDropDown(prev => (prev === index ? null : index))
}
return (
  <div className=' py-18'>


    {questions.map((question, index) => (
      <div  className=' max-w-[1240px] mx-auto'>
        <div onClick={() => toggleDrop(index)} key={index} className=' flex justify-between items-center border-b-1 border-gray-300 pb-3.5 pt-6 px-7'>
          <h2 className='px-6 text-4xl font-semibold'>{question.title}</h2>
          <div><FaChevronDown size={30} /></div>
        </div>
        
        {dropDown === index && (
          <div className=" flex flex-col gap-5 px-22 mt-3 pb-5  pt-2 text-[15px] text-gray-800">
            <p className=' text-2xl font-semibold'>{question.answer.head}</p>
            <p className=' w-[70%] text-xl'>{question.answer.desc}</p>
          </div>
        )}
        </div>
      
    ))}


    {/* <div className=' max-w-[1240px] bg-amber-400 mx-auto flex flex-col gap-10'>
        <div className=' flex justify-between items-center border-b-2 border-gray-400 pb-3.5 pt-6'>
          <h2 className='px-6 text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
          <div><FaChevronDown size={30}/></div>
        </div>
        <div className=' flex justify-between items-center border-b-2 border-gray-400 pb-3.5 pt-6'>
          <h2 className=' text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
          <div><FaChevronDown size={30}/></div>
        </div>
        <div className=' flex justify-between items-center border-b-2 border-gray-400 pb-3.5 pt-6'>
          <h2 className=' text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
          <div><FaChevronDown size={30}/></div>
        </div>
        <div className=' flex justify-between items-center border-b-2 border-gray-400 pb-3.5 pt-6'>
          <h2 className=' text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
          <div><FaChevronDown size={30}/></div>
        </div>
        <div className=' flex justify-between items-center border-b-2 border-gray-400 pb-3.5 pt-6'>
          <h2 className=' text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
          <div><FaChevronDown size={30}/></div>
        </div>
      </div> */}



    {/* {dropDown && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit dolorum cupiditate officia voluptatum tempore quia facere ut, laboriosam dicta esse magnam sint sit est vitae iure? Earum, recusandae? Aliquid similique sunt impedit sequi doloremque inventore, voluptatem molestiae expedita. Sit.
        </div>
      )} */}
  </div>
)
}

export default Statement