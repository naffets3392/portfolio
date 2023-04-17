import React, { useState } from "react";
import {RiLinkedinBoxFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

const cv = 'http://localhost:3000/cvSrpski.pdf'

export default function AboutMe() {

    // function downloadCV() {
    //     const fileCV = cv.split('/').pop()
    //     const aTag = document.createElement('a')
    //     aTag.href = cv
    //     aTag.setAttribute('download', fileCV)
    //     document.body.appendChild(aTag)
    //     aTag.click()
    //     aTag.remove()
    //     console.log(fileCV)
    // }

    return (
        <div className="about-me__container">
            <h1>About me</h1>
            <h3>Hi, I'm Stefan Stevic. A Junior Front-end Developer based in Belgrade. As a Junior Front-end Developer I have skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>React</span>. I'm passionate in designing websites and improving my skills, so I'm opened up for collaborations between teams in making some interesting and engaging websites in order to provide better user experience.</h3>
            <div className="links-container">
                {/* <button onClick={downloadCV} className="cv-button">Download CV</button> */}
                <a href="cvSrpski.pdf" download='cvSrpski.pdf' target="_blank" download="CV.pdf">CV Download</a>
                <Link to='https://www.linkedin.com/in/stefan-stevic/' target="_blank"><RiLinkedinBoxFill className="icon linkedIn-icon"/></Link>
            </div>
            <Link className="home-link" to='/'>Home</Link>
        </div>
    )
}