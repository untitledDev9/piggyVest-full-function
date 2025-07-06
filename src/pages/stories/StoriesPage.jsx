import React from 'react'
import Hero from "./images/storyHero.png"
const StoriesPage = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Loved by our Customers</h1>
          <p>
            Stories of happy savers who Piggyvest has helped or is helping save for what truly matters to them.</p>
            <button>Add your story</button>
        </div>
        <div><img src={Hero} alt="" /></div>
      </div>
    </div>
  )
}

export default StoriesPage