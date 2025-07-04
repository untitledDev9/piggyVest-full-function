import React from 'react'
import clipboard from "../../../assets/icons/clipboard-variant-with-lists-and-checks-svgrepo-com.svg"
import appleLogo from "../../../assets/icons/apple-logo-svgrepo-com.svg"
import google from '../../../assets/icons/google-play.png'
import piggyHero from '../../../assets/images/piggy-hero-img.png'
import './Hero.css'
import Security from './Security'

const Hero = () => {
    return (
        <>
        <section className="hero">
            <div className="hero-text">
                <div className="top-btn">
                    <img src={clipboard} alt="" />
                        <h2>The 2024 PiggyVest Savings Report</h2>
                </div>
                <h1>
                    The Better Way to Save & Invest
                </h1>
                <p>
                    Piggyvest helps over 5 million customers achieve their financial goals by helping them save and invest with ease.
                </p>
                <div className="hero-text-btn">
                    <div className="iphone btn">
                        <img src={appleLogo} alt="" />
                            <h2>Get on iPhone</h2>
                    </div>
                    <div className="andrion btn">
                        <img src={google} alt="" />
                            <h2>Get on Android</h2>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={piggyHero} alt="" />
            </div>
            <div className="hero-img-2">
                <img src={piggyHero} alt="" />
            </div>
        </section>
        <Security />
        </>
    )
}

export default Hero