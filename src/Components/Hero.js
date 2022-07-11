import React from 'react'
import './hero.css'
import FacePhoto from '../assets/face-photo.png'
export default function Hero(props) {

    return (
        <div className="hero-container">
            <div className="content-container">
                <div className="hero-text">
                    <div className="t-30">Hey! My name is</div>
                    <div className="t-80-bold">Rainier <br/>Dirawatun</div>
                    <div className="t-30">I'm a Software Engineer</div>
                </div>
                <img className="my-face" src={FacePhoto}></img>
            </div>
        </div>
    )
}
