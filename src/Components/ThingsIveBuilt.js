import React from 'react'
import './thingsivebuilt.css'
import FlowerPower from '../assets/flower-power.png'
import LabIntake from '../assets/labintake.png'
export default function ThingsIveBuilt(props) {
    

    return (
        <div className="thingsivebuilt-container">
            <div className="t-50-semibold">Things I've Built</div>
            <div className="build-card left-padding">
                <div className="build-text">
                    <div className="t-30-bold app-title">Flower Power App</div>
                    <div className="t-14">Snap on a magnetic case, <br/>wallet, or both. And get faster<br/>wireless charging.</div>
                    <div className="t-14">iOS & Android App</div>
                </div>
                <img src={FlowerPower} alt="" className="build-img" />
            </div>
            <div className="build-card right-padding">
                <img src={LabIntake} alt="" className="build-img labintake-img" />
                <div className="build-text">
                    <div className="t-30-bold app-title">Flower Power App</div>
                    <div className="t-14">Snap on a magnetic case, <br/>wallet, or both. And get faster<br/>wireless charging.</div>
                    <div className="t-14">iOS & Android App</div>
                </div>
            </div>
        </div>
    )
}
