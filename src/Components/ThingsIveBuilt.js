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
                    <div className="t-14">React Native App w/ Aurdino Integration</div>

                    <div className="t-14">Stay connected to your plant’s needs. <br/>Get notified about water and ph levels in the app.</div>
                </div>
                <img src={FlowerPower} alt="" className="build-img" />
            </div>
            <div className="build-card right-padding">
                <img src={LabIntake} alt="" className="build-img labintake-img" />
                <div className="build-text">
                    <div className="t-30-bold app-title">ClickUp & Google Sheets
Integration</div>
                    <div className="t-14">React Web App  w/ Express Backend</div>

                    <div className="t-14">Routes student form data to a<br/>google  sheet then organizes it into <br/> your ClickUp Workspace.</div>
                </div>
            </div>
        </div>
    )
}
