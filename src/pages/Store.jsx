import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcLike } from "react-icons/fc";

const Store = () => {

  const [getApi, setGetApi] = useState([])


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

      <div>
        <h1 className=' text-5xl font-bold text-center'>WELCOM TO PIGGY VEST STORE</h1>
        imaage category title price
      </div>

      <div className=' bg-blue-500 flex flex-wrap gap-10 justify-center items-center py-10'>
        {getApi.map((data, i) => (
          <div key={i} className=' flex w-[500px] h-[400px] bg-gray-400 rounded-2xl'>
            <div className=' pt-7  w-[50%] flex flex-col justify-between'>
              <div className='px-3 flex flex-col gap-5'>
                <p className='text-2xl font-bold'>{data.title}</p>
                <p className=' font-semibold text-[17px]'>{data.category}</p>
                <p className=' font-semibold text-[20px] text-center mt-7'>${data.price}</p>
              </div>
              <div className=' w-full'>
                <FcLike className='text-4xl mb-4 w-full'/>
                <button className=' bg-black w-full text-white py-2'>Add To Card</button>
              </div>
            </div>
            <div className=' w-[50%] bg-white rounded-r-2xl'>
              <img src={data.image} alt="" className=' object-contain h-full w-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store