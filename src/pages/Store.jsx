import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcLike } from "react-icons/fc";
import Header from '../static/Header';
import PiggyLogo from "../assets/logo.svg";
import Save from './Save';
import Resources from './Resources';
import ButtonCard from '../reuseable/ButtonCard';
import { FcLikePlaceholder } from "react-icons/fc";

const Store = () => {

  const [getApi, setGetApi] = useState([])
  const [like, setLike] = useState({})
  const likeItem = (index) => {
    setLike(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const api = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products')
        setGetApi(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    api();
  }, [])


  return (
    <div>
<div className=''>
      <Header
        logo={PiggyLogo}
        linkColor='#2b2b2b'
        save={<Save />}
        Invest="Invest"
        Stories='Stories'
        FAQs='FAQs'
        Resources={<Resources />}
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
      <div className='py-18'>
        <h1 className='max-mobile:text-[25px] max-mobile: text-5xl font-bold text-center'>WELCOM TO PIGGY VEST STORE</h1>
      </div>

      <div className=' flex flex-wrap gap-14 justify-center items-center py-14 shadow-[0px_4px_20px_rgba(0,0,0,0.7)] '>
        {getApi.map((data, i) => (
          <div key={i} className=' flex w-[400px] h-[300px] bg-gray-200 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.4)]'>
            <div className=' pt-7  w-[50%] flex flex-col justify-between'>
              <div className='px-3 flex flex-col gap-5 text-center'>
                <p className='text-[15px] font-bold'>
                  {data.title.length > 20 ? data.title.slice(0, 30) + '...' : data.title}
                </p>
                <p className=' font-semibold text-[13px]'>{data.category}</p>
                <p className=' font-semibold text-[20px] text-center mt-7'>${data.price}</p>
              </div>
              <div className=' w-full'>
                <div className='text-4xl mb-4 w-full flex items-center justify-center'
                  onClick={() => likeItem(i)}
                >
                  {like[i] ? <FcLike /> : <FcLikePlaceholder />}
                </div>
                <button className=' bg-black w-full text-white py-2'>Add To Card</button>
              </div>
            </div>
            <div className=' w-[50%] bg-white rounded-r-2xl'>
              <img src={data.image} alt="" className=' object-fit h-full w-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store