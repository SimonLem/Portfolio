import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline";


import Welcome from "./components/Welcome.js";
import SecondWelcome from "./components/SecondWelcome.js";
import Stack from "./components/Stack.js";
import Ski from "./components/Ski.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Fade from "./components/Fade.js";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [uiLoaded, setUiLoaded] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(true);
  const [openStack, setOpenStack] = useState(false);
  const [openSki, setOpenSki] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [blur, setBlur] = useState("blur(0px)");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [cursor, setCursor] = useState("default");
  const audio = new Audio("../../SoulFood.mp3");

  setTimeout(() => {
    setIsLoading(false);
  }, 8000);

  var onClickLetsGo = () => {
    setOpenWelcome(false);
    animateCamera();
    setTimeout(() => {
      setUiLoaded(true);
    }, 2000);
  };

  var onClickBackStack = () => {
    setOpenStack(false);
    setTimeout(() => {
      setBlur("blur(0px)");
    }, 400);
  };

  var onClickBackSki = () => {
    setOpenSki(false);
    setTimeout(() => {
      setBlur("blur(0px)");
    }, 400);
  };
  var onClickBackPortfolio = () => {
    setOpenPortfolio(false);
    setTimeout(() => {
      setBlur("blur(0px)");
    }, 400);
  };

  var onClickBackContact = () => {
    setOpenContact(false);
    setTimeout(() => {
      setBlur("blur(0px)");
    }, 400);
  };

  const camera = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Camera");
    camera.current = obj;
  }

  function onMouseDown(e) {
    if (e.target.name === "Welcome") {
      setOpenWelcome(true);
      setUiLoaded(true);
    }
    if (e.target.name === "Stack") {
      setOpenStack(true);
      setBlur("blur(10px) grayscale(30%)");
    }
    if (e.target.name === "SkiPicture") {
      setOpenSki(true);
      setBlur("blur(10px) grayscale(30%)");
    }
    if (e.target.name === "Portfolio") {
      setOpenPortfolio(true);
      setBlur("blur(10px) grayscale(30%)");
    }
    if (e.target.name === "Contact") {
      setOpenContact(true);
      setBlur("blur(10px) grayscale(30%)");
    }
    if (e.target.name === "Guitar") {
      setAudioPlaying(true);
    }
  }

  var timeout;

  function onMouseHover(e) {
    clearTimeout(timeout);
    if (
      e.target.name === "Welcome" ||
      e.target.name === "Stack" ||
      e.target.name === "SkiPicture" ||
      e.target.name === "Portfolio"||
      e.target.name === "Contact" ||
      e.target.name === "Guitar" ||
      e.target.name === "Moon" ||
      e.target.name === "Interrupteur"||
      e.target.name === "Laptop"
    ) {
      setCursor("pointer");
    }
    timeout = setTimeout(() => {
      setCursor("default");
    }, 200);
  }

  useEffect(() => {
    {
      audioPlaying ? audio.play() : audio.pause();
    }
  }, [audioPlaying]);

  function animateCamera() {
    var positionBefore = { x: -744.79, y: 900.27, z: 1985.7 };
    var positionAfter = { x: -1142.83, y: 869.1, z: 1825.66 };
    var rotationBefore = { x: -18.36, y: -16.55, z: -7.41 };
    var rotationAfter = { x: -18.97, y: -27.65, z: -11.06 };
    var iteration = 0;
    var maxIteration = 200;
    camera.current.position.x = -744.79;
    camera.current.position.y = 900.27;
    camera.current.position.z = 1985.7;
    while (iteration != maxIteration) {
      setTimeout(() => {
        camera.current.position.x -=
          (positionBefore.x - positionAfter.x) / maxIteration;
        camera.current.position.y -=
          (positionBefore.y - positionAfter.y) / maxIteration;
        camera.current.position.z -=
          (positionBefore.z - positionAfter.z) / maxIteration;
        camera.current.rotation.x -=
          (rotationBefore.x - rotationAfter.x) / maxIteration;
        camera.current.rotation.y -=
          (rotationBefore.y - rotationAfter.y) / maxIteration;
        camera.current.rotation.z -=
          (rotationBefore.z - rotationAfter.z) / maxIteration;
      }, 10 * iteration);
      iteration++;
    }
  }

  return (
    <div>
      <Fade visible={openWelcome}>
        {isLoading ? (
          <Welcome handleClickLetsGo={onClickLetsGo} />
        ) : (
          <SecondWelcome handleClickLetsGo={onClickLetsGo} />
        )}
      </Fade>
      <Fade visible={openStack}>
        <Stack handleClickBackStack={onClickBackStack} />
      </Fade>
      <Fade visible={openSki}>
        <Ski handleClickBackSki={onClickBackSki} />
      </Fade>
      <Fade visible={openPortfolio}>
        <Portfolio handleClickBackPortfolio={onClickBackPortfolio} />
      </Fade>
      <Fade visible={openContact}>
        <Contact handleClickBackContact={onClickBackContact} />
      </Fade>
      <div className="model">
        <Spline
          scene="https://prod.spline.design/delm5hZrddD4C17P/scene.splinecode" 
          onMouseDown={onMouseDown}
          onMouseHover={onMouseHover}
          onLoad={onLoad}
          style={{
            filter: blur,
            position: "absolute",
            cursor: cursor,
            pointerEvents: uiLoaded ? "" : "none",
          }}
        />
      </div>
      <Fade visible={uiLoaded}>
        <div className="UIcontainer" style={{ filter: blur }}>
          <div className="UI">
            <img
              src="../../arrows.png"
              height="70vh"
              style={{ marginBottom: "4%" }}
            />
            <p style={{ marginTop: "-2%" }}>
              Try to click and drag to look around.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default App;
