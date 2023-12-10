import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import headshot from '../content/unknown.png'
import './css/home.css';

function Home() {
    return(
        <div className="home-page">
            <header className="header">
                <Link to="./works" className="works-link header-link">portfolio link here</Link>
                <h1 className="title">Cameron Todd</h1>
                <Link to="./about" className="header-link about-link">what i believe in link here</Link>
            </header>
            <h3 className="subtitle">A web developer & UI designer with a passion for informed and human-centered design.</h3>
            <div className="photobox">
                <img src={headshot} alt="Me!"></img>
                <p>text text</p>
            </div>
        </div>
    );
}

export default Home;