import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      <h1>efrervrevv</h1>
      {getApi.map((data, i) => (
        <div key={i}>
          {data.price}
        </div>
      ))}
    </div>
  )
}

export default Store