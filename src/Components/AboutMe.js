import React from 'react'
import './aboutme.css'
export default function AboutMe(props) {
    

    return (
        <div className="about-me-container">
            <div className="t-50-semibold">About Me</div>
            <div className="t-19-lighter">Hey! My name is Rainier. I’m a Software Developer and recent graduate from San Diego State Univeristy.
                As a child I loved creating things whether that was making music, YouTube videos,  or designing logos -
                my first love was ideation and creation. <br/><br/>
                Today that love has evolved into an even more powerful medium, the art of coding. So far I’ve had the
                opportunity to work with a handful of start ups, an innovation lab, and on my own company back in 2019.
                My goal is to create value at scale. Specifically I am focusing on creating high fidelity applications that
                provide the world with value it was previously unable to obtain.
                <br/><br/>
                Here are a few technologies I’ve worked with recently:
            </div>

            <div className="tech-text t-19-lighter">
                <div className="tech-col">JavaScript &#40;ES6+&#41;<br/>React<br/>Node.js</div>
                <div className="tech-col">TypeScript<br/>React Native<br/>Django</div>
            </div>
        </div>
    )
}
