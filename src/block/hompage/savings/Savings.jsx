import React from 'react'
import SavingsCard from './SavingsCard'
import './Savings.css'
import One from "../../../assets/images/one.png"
import Two from "../../../assets/images/two.png"
import Three from "../../../assets/images/three.png"
import Four from "../../../assets/images/four.png"
import Five from "../../../assets/images/five.png"
import Six from "../../../assets/images/six.png"

const Savings = () => {
    return (
        <section className='savings'>
            <div className="savings-text">
                <h1>
                    Many ways to build your savings
                </h1>
                <p>
                    Earn 12%-22% when you save with any of these PiggyVest plans.
                </p>
            </div>


            <div className="savings-col col-1">
                <SavingsCard
                    title="Automated Savings"
                    description='Build a dedicated savings faster on your terms, automatically or manually.'
                    label='Piggybank'
                    image={One}
                    customClass="col-right"
                />

                <SavingsCard
                    title="Fixed Savings"
                    description="Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit."
                    label='Safelock'
                    image={Two}
                    customClass="col-left"
                />
            </div>



            <div className="savings-col col-2">
                <SavingsCard
                    title="Goal-oriented Saving"
                    description="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
                    label='Target Savings'
                    image={Three}
                    customClass="col-right-2"
                />

                <SavingsCard
                    title="Flex Naira"
                    description='Save, transfer, manage, organise, and withdraw your money at any time.'
                    label='Flex Naira'
                    image={Four}
                    customClass="col-left-2"
                />
            </div>



            <div className="savings-col col-3">
                <SavingsCard
                    title="Flex Dollar"
                    description='Save and grow your money in foreign currencies such as Dollars.
'
                    label='Flex Dollar'
                    image={Five}
                    customClass="col-right-3"
                />

                <SavingsCard
                    title="HouseMoney"
                    description='Plan for your rent and household expenses'
                    label='House Money'
                    image={Six}
                    customClass="col-left-3"
                />
            </div>
        </section>
    )
}

export default Savings