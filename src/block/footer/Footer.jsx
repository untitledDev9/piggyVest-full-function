import React from 'react'
import './Footer.css'
import FooterImg from '../../assets/footer-img.png'
import Facebook from "../../assets/facebook (3).png"
import instagram from "../../assets/instagram (3).png"
import twitter from "../../assets/twitter (3).png"
import tiktok from "../../assets/tik-tok.png"
import youtube from "../../assets/youtube (1).png"

const Footer = () => {
    return (
        <>
            <footer className="fut-footer">
                <footer className="footer">
                    <div className="footer-img">
                        <img src={FooterImg} alt="" />
                    </div>


                    <div className="footer-links">



                        <div className="fut-link">
                            <div className="pro fut">
                                <h3>Products</h3>
                                <a href="#">Piggybank</a>
                                <a href="#">Invest</a>
                                <a href="#">Safelock</a>
                                <a href="#">Target Savings</a>
                                <a href="#">Flex Naira</a>
                                <a href="#">Flex Dollar</a>
                            </div>
                            <div className="com fut">
                                <h3>Company</h3>
                                <a href="#">About</a>
                                <a href="#">FAQs</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className="leg fut">
                                <h3>Legal</h3>
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                                <a href="#">Security</a>
                            </div>
                        </div>



                        <div className="fut-cta">
                            <div className="cta-icns">
                                <img src={Facebook} alt="" />
                                <img src={instagram} alt="" />
                                <img src={twitter} alt="" />
                                <img src={tiktok} alt="" />
                                <img src={youtube} alt="" />
                            </div>
                            <div className="cta-info">

                                <a href="#">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                                </a>
                                <a href="#">ahmedsuleiman940@gmail.com</a>
                                <a href="#">+2347040751959</a>
                            </div>
                        </div>
                    </div>



                    <div className="fut-ctaa">
                        <div className="cta-icns">
                            <img src={Facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                            <img src={tiktok} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                        <div className="cta-info">

                            <a href="#">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                            </a>
                            <a href="#">ahmedsuleiman940@gmail.com</a>
                            <a href="#">+2347040751959</a>
                        </div>
                    </div>
                </footer>
            </footer>
            <footer class="bottom-fut">
                <div class="hr-line"></div>
                <h4>
                    Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 9 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.
                </h4>
                <h4>
                    PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</h4>
                <h4>
                    2016 - 2025 PiggyTech Global Limited - RC 1405222</h4>
            </footer>
        </>
    )
}

export default Footer