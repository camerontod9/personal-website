import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home-page">
        <header className="header">
            <h1>Cameron Todd</h1>
            <h3>An emerging web & UI designer with a passion for informed and human-centered design.</h3>
            <Link to="portfolio.js">portfolio link here</Link>          
            <Link to="about.js">what i believe in link here</Link>
        </header>
        <div className="body">
            <p>text text</p>
            <img></img>
        </div>
    </div>
    );
}

export default Home;