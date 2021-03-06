import React, { useEffect, useState } from 'react';
import '../styles/tachyons.min.css';
import '../styles/index.css';
import '../styles/headnfoot.css';
import '../styles/buttons.css';
import '../styles/mobile.css';
import Pattern from "../images/pattern2x.png"
import Plugin from "../images/bigplugin.png"
import Canvas from "../images/bigcanvas.png"
import Logo from "../images/logo.png"


function Index() {

  const [date, setDate] = useState(null);
  const getNow = (e) => {
    e.preventDefault();
    console.log("CLICKED");
     document.location.href = "https://gumroad.com/l/kmTUVI";
  }

  const openModal = () => {
    this.setState({isOpen: true})
  }

  const getTweet = (e) => {
    e.preventDefault();
    console.log("CLICKED");
     document.location.href = "https://gum.co/kmTUVI";
  }

  const getContact = (e) => {
    e.preventDefault();
    console.log("CLICKED");
     document.location.href = "https://gum.co/kmTUVI";
  }

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <header>
        <div className="flex__container">
        <img id="logo" src={Logo} /> <h3>Easy Units</h3>
        </div>
        <div className="header__buttons">

          <a href="https://twitter.com/intent/tweet?text=This%20Figma%20plugin%20helps%20you%20to%20modify%20Figma%20objects%20in%20units%20such%20as%20inches%20and%20centimeters%20👾%20👉http%3A%2F%2Ftinytools.com">
            <button className="button__primary">Tweet this</button>
          </a>

          <a href="mailto:hello@tinyfactories.space">
            <button className="button__secondary">Contact us</button>
          </a>

        </div>
      </header>

      <div className="hero">
        <div className="hero__text">
          <h1>The only unit converter for Figma</h1>
          <p>Convert your shapes from pixels to inches, rem, cm, and ft.</p>
          <div className="hero__buttons">
              <button onClick={getNow} className="button__primary">
              <div>Get it now for $4</div>
              </button>

              <a href="https://www.figma.com/community/plugin/835063877729335093/Easy-Units">
            <button className="button__secondary">View plugin page</button>
          </a>
          </div>
        </div>

        <div className="hero__banner">
          <div className="hero__banner__gradient">
            <img src={Canvas} alt="pattern" className="hero__banner__canvas"/>
            <img src={Plugin} alt="pattern" className="hero__banner__plugin"/>
          </div>
        </div>
      </div>

      <div className="patterns">
        <img src={Pattern} alt="pattern" className="patterns p0"/>
        <img src={Pattern} alt="pattern" className="patterns p1"/>
        <img src={Pattern} alt="pattern" className="patterns p2"/>
      </div>

      <footer >
        <span>This is a tiny tool, created by friends at  <a href="http://tinyfactories.space" className="link no-underline"> Tiny Factories</a></span>
      </footer>

    </main>
  );
}

export default Index;
