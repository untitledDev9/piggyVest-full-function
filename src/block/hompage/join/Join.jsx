import React from 'react'
import './Join.css'
import FallBack from '../../../assets/images/fallbackImg.png'
import Apple from '../../../assets/icons/apple.png'
import Google from '../../../assets/icons/google-play(1).png'

const Join = () => {
  return (
    <section className="join">
    <div className="join-img">
        <img src={FallBack} alt="" />
    </div>
    <div className="join-text">
        <h1>         
            Join 5+ million people who save and invest with us
        </h1>
        <div className="join-btn">
            <div className="dev-button">
                <img src={Apple} alt="" />
                <p>Get on iPhone</p>
            </div>
            <div className="dev-button">
                <img src={Google} alt="" />
                <p>Get on Andriod</p>
            </div>
        </div>
    </div>

</section>
  )
}

export default Join