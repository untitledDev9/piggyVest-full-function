import React from 'react'
import './Invest.css'
import investPhone from "../../../assets/images/iphoneInvest.png"

const Invest = () => {
    return (
        <section className="invest">
            <div className="invest-text">
                <h1>Diverse ways to Invest</h1>
                <p>Grow your money and invest for your future confidently.</p>
            </div>
            <div className="invest-card">
                <div className="card-content">
                    <div className="card-text">
                        <h1>
                            Earn Up to 35% returns
                        </h1>
                        <p>
                            Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.
                        </p>
                    </div>

                    <div className="card-link">
                        <span className="inn">
                            <svg
                                fill="#fff"
                                width="18px"
                                height="18px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon flat-line"
                            >
                                <g>
                                    <path
                                        d="M19,18H6a1,1,0,0,1-1-1V3"
                                        fill="none"
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                    <polyline
                                        points="16 21 19 18 16 15"
                                        fill="none"
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </g>
                            </svg>
                        </span>
                        <p>Learn about Investments</p>
                    </div>
                </div>
                <div className="card-device">
                    <img src={investPhone} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Invest