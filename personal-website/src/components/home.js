import { React, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-page">
            <header className="header">
                <h1 className="title">Cameron Todd</h1>
                <h3 className="subtitle">An emerging web & UI designer with a passion for informed and human-centered design.</h3>
                <Link to="./works">portfolio link here</Link>
                <Link to="./about">what i believe in link here</Link>
            </header>
            <div className="photobox">
                <img></img>
                <p>text text</p>
            </div>
        </div>
    );
}

export default Home;