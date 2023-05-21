import React, { useState } from "react";
import {RiLinkedinBoxFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function AboutMe() {

    return (
        <div className="about-me__container">
            <h1>About me</h1>
            <h3>Hello there! I'm self-educated Front-End Developer. My passion about coding started
            one year ago and I'm upgrading myself everyday with new knowledge. As someone who
            worked in retail, I'm very outgoing, communicative and accustomed to teamwork. My
            dedication to coding is huge and I'm willing to contribute to developer community with
            every step of my journey.
            </h3>
            <div className="links-container">
                <a className="cvDownload" href="SScv.pdf" download='SScv.pdf' target="_blank">CV Download</a>
                <Link to='https://www.linkedin.com/in/stefan-stevic/' target="_blank"><RiLinkedinBoxFill className="icon linkedIn-icon"/></Link>
            </div>
            <Link className="home-link" to='/'>Home</Link>
        </div>
    )
}