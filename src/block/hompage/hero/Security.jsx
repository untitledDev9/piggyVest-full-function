import React from 'react'
import './Security.css'
import lock from '../../../assets/icons/securitylock.svg'
import turn from '../../../assets/icons/turn-right.png'

const Security = () => {
    return (
        <section className="security">
            <div className="security-section">
                <img src={lock} alt="" />
            </div>
            <div className="security-text">
                <h1>
                    Your security is our priority
                </h1>
                <p>
                    PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.
                </p>
                <div className="security-text-icon">
                    <img src={turn} alt="" />
                        <h3>More on our security measures</h3>
                </div>
            </div>
        </section>
    )
}

export default Security