import React from "react";
import { Link } from "react-router-dom";
import stefan1 from '../portfolioImages/stefan1.jpeg'
import stefan2 from '../portfolioImages/stefan2.jpeg'
import zavrsnaVerzija from '../portfolioImages/ZAVRSNAverzija.jpeg'

export default function Home() {
    return (
        <div className="home__container">
            <div className="home__container-image__container">
                <img src={zavrsnaVerzija} alt="" />
            </div>
            <div className="home__container-heading__container">
                <h1>Front-end Developer.</h1>
                <h3>Stefan Stevic</h3>
                <h4>Skills <span>HTML</span>  <span>CSS</span>  <span>JavaScript</span>  <span>React</span></h4>
                <div className="home__container-links">
                    <Link className="link link1" to='/about-me'>About me</Link>
                    <Link className="link link2" to='/projects'>Projects</Link>
                </div>
            </div>
        </div>
    )
}