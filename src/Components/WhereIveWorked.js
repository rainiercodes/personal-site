import React from 'react'
import './whereiveworked.css'
import MathlyImg from '../assets/mathly-img.png'
import TillImg from '../assets/till-img.png'
import ZIPImg from '../assets/zip-img.png'
export default function WhereIveWorked(props) {
    

    return (
        <div className="worked-container">
            <div className="t-50-semibold title">Where I've Worked</div>
            <div className="work-card mathly-bg">
                <div className="work-text">
                    <div className="t-50-medium">CEO, Software Engineer</div>
                    <div className="t-14">Sep 2019 - May 2021</div>
                    <div className="t-14">Provide software development support and consultation to startup teams and peers in areas of full stack web development.</div>

                </div>
                <img className="mathly-img" src={MathlyImg} alt=""/>
            </div>

            <div className="work-card white-bg">
                <img className="till-img" src={TillImg} alt=""/>

                <div className="work-text">
                    <div className="t-50-medium">iOS Developer (Intern)</div>
                    <div className="t-14">June 2021 - September 2021</div>
                    <div className="t-14">Provide software development support and consultation to startup teams and peers in areas of full stack web development.</div>
                </div>
            </div>

            <div className="work-card space-bg">
                <div className="work-text">
                    <div className="t-50-medium">Software Engineer (Intern)</div>
                    <div className="t-14">October 2021 - June 2022</div>
                    <div className="t-14">Provide software development support and consultation to startup teams and peers in areas of full stack web development.</div>
                </div>

                <img className="space-img" src={ZIPImg} alt=""/>

            </div>
        </div>
    )
}