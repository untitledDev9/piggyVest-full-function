import React from 'react'
import imageOne from "../invest/images/imgi_21_thumb.inv4196b48bcb.jpg"
import imageTwo from "../invest/images/imgi_22_thumb.inv2812b9cf6c.jpg"
import imageThree from "../invest/images/imgi_23_thumb.inv9d2a33b74a.jpg"
import imageFour from "../invest/images/imgi_24_thumb.inv70785223ef.jpg"
import imageFive from "../invest/images/imgi_25_thumb.inv741ef97c6d.jpg"
import imageSix from "../invest/images/imgi_26_thumb.inv983526c1bb.png"

const Investify = () => {

  const investCards = [
    {
      image:  imageOne,
      heading: 'CORPORATE DEBT NOTES SERIES XLVII',
      price: "₦5,000",
      unit: "per unit",
      numbers: 578,
      inv: "Investors",
      btn: "Sold Out",
      btnColor: "#B32E58",
      btnBg: "#FAF1F4"
    },
    {
      image:  imageTwo,
      heading: 'CORPORATE DEBT NOTES SERIES XLVI',
      price: "₦5,000",
      unit: "per unit",
      numbers: 743,
      inv: "Investors",
      btn: "Sold Out",
      btnColor: "#B32E58",
      btnBg: "#FAF1F4"
    },
    {
      image:  imageThree,
      heading: 'CORPORATE DEBT NOTES SERIES XLV',
      price: "₦5,000",
      unit: "per unit",
      numbers: 436,
      inv: "Investors",
      btn: "Invest Now",
      btnColor: "#2eb358",
      btnBg: "#f1faf1"
    },
    {
      image:  imageFour,
      heading: 'CORPORATE DEBT NOTES SERIES XLIV',
      price: "₦5,000",
      unit: "per unit",
      numbers: 858,
      inv: "Investors",
      btn: "Sold Out",
      btnColor: "#B32E58",
      btnBg: "#FAF1F4"
    },
    {
      image: imageFive ,
      heading: 'CORPORATE DEBT NOTES SERIES XLIII',
      price: "₦5,000",
      unit: "per unit",
      numbers: 370,
      inv: "Investors",
      btn: "Sold Out",
      btnColor: "#B32E58",
      btnBg: "#FAF1F4"
    },
    {
      image:  imageSix,
      heading: 'CORPORATE DEBT NOTES SERIES XLII',
      price: "₦5,000",
      unit: "per unit",
      numbers: 1270,
      inv: "Investors",
      btn: "Sold Out",
      btnColor: "#B32E58",
      btnBg: "#FAF1F4"
    }
  ]


  return (
    <div className=' max-w-[1280px]  mb-32 mx-auto px-18 py-10'>
      <div className=' text-center'>
        <h2 className=' text-[49px] mb-14 text-[#122231] font-bold'>Recent Opportunities on Investify</h2>
      </div>
      <div className=' grid grid-cols-3 gap-8'>
      {investCards.map(({ image, heading, price, unit, numbers, inv, btn, btnColor, btnBg }, key) => (
        <div key={key} className=' w-[350px] h-[360px] bg-white rounded-2xl flex flex-col gap-5'>
          <div className=' h-[100px]'>
            <img src={image} alt="" className=' h-[100px] w-full rounded-t-2xl object-cover' />
          </div>
          <div className=' px-8 py-2 flex flex-col gap-5'>
            <h2 className=' font-bold text-[#122231] text-[20px]'>{heading}</h2>
            <div className=' flex justify-between w-[90%] mb-4'>
              <div><p className=' text-[17px] text-[#6c6c6c] font-bold'>{price}</p><p className=' text-[14px] text-[#6c6c6c] font-semibold'>{unit}</p></div>
              <div><p className=' text-[17px] text-[#6c6c6c] font-bold'>{numbers}</p><p className=' text-[14px] text-[#6c6c6c] font-semibold'>{inv}</p></div>
            </div>
            <p
              style={{
                color: btnColor,
                backgroundColor: btnBg
              }}
              className=' bg-[#f1faf1] w-fit px-4 py-1 rounded-4xl text-[#2eb358] font-bold'>{btn}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Investify
// ₦