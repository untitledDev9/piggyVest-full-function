import React from 'react'
import './Join.css'
import FallBack from '../../assets/images/fallbackImg.png'
import Apple from '../../assets/icons/apple.png'
import Google from '../../assets/icons/google-play(1).png'

const Join = () => {
  return (
    <section class="join">
    <div class="join-img">
        <img src={FallBack} alt="" />
    </div>
    <div class="join-text">
        <h1>         
            Join 5+ million people who save and invest with us
        </h1>
        <div class="join-btn">
            <div class="dev-button">
                <img src={Apple} alt="" />
                <p>Get on iPhone</p>
            </div>
            <div class="dev-button">
                <img src={Google} alt="" />
                <p>Get on Andriod</p>
            </div>
        </div>
    </div>

</section>
  )
}

export default Join