import React from 'react'
import './Savings.css'

const SavingsCard = ({ title, description, label, image,customClass }) => {
    return (
        <>
        <div className={`savings-card row ${customClass}`}>
                <div className="col-text">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="col-link">
                    <span className="turn">
                        <svg
                            fill="#fff"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon flat-line"
                        >
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
                        </svg>
                    </span>
                    <p>{label}</p>
                </div>
                <div className="image-1">
                    <img src={image} alt="" />
                </div>
            </div>
        </>
    )
}

export default SavingsCard