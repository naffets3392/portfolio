import React, { useState } from "react";
import {RiLinkedinBoxFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function AboutMe() {

    return (
        <div className="about-me__container">
            <h1>About me</h1>
            <h3>Hi, I'm Stefan Stevic. A Junior Front-end Developer based in Belgrade. As a Junior Front-end Developer I have skills in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>React</span>. I'm passionate in designing websites and improving my skills, so I'm opened up for collaborations between teams in making some interesting and engaging websites in order to provide better user experience.</h3>
            <div className="links-container">
                <a className="cvDownload" href="cvSrpski.pdf" download='cvSrpski.pdf' target="_blank" download="CV.pdf">CV Download</a>
                <Link to='https://www.linkedin.com/in/stefan-stevic/' target="_blank"><RiLinkedinBoxFill className="icon linkedIn-icon"/></Link>
            </div>
            <Link className="home-link" to='/'>Home</Link>
        </div>
    )
}