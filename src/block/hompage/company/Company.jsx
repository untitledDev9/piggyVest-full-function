import React from 'react'
import './Company.css'
import Tech from "../../../assets/icons/tech.jpg"
import Cbn from "../../../assets/icons/cbn.jpg"
import Pymnts from "../../../assets/icons/pymnts.svg"
import Fast from "../../../assets/icons/fastcompany.svg"
import Cio from "../../../assets/icons/cio.svg"
import TechCruncg from "../../../assets/icons/techcrunch.jpg"

const Company = () => {
    return (
        <main className='mainBg'>
        <section className="company">
            <div className="company-text">
                <h1>As featured in</h1>
            </div>
            <div className="company-icon">
                <img src={Tech} alt="" />
                <img src={Cbn} alt="" />
                <img src={TechCruncg} alt="" />
                <img src={Pymnts} alt="" />
                <img src={Fast} alt="" />
                <img src={Cio} alt="" className='cio' />
            </div>
        </section>
        </main>
    )
}

export default Company