import React from 'react'
import './navbar.css'
export default function Navbar(props) {
    

    return (
        <div className="nav-container t-19-light">
            <div className="name-title">
                Rainier Dirawatun
            </div>
            <div className="center-btns">
                <button>About</button>
                <a className = "resume-btn t-19-light" href="rainiers-resume.pdf">Resume</a>
            </div>
            <div className="contact-btn">Contact</div>
        </div>
    )
}
