import React, { useState, useRef, useEffect } from "react";
import Welcome from "../components/Welcome.js";
import SecondWelcome from "../components/SecondWelcome.js";
import Stack from "../components/Stack.js";
import Ski from "../components/Ski.js";
import Studies from "../components/Studies.js";
import Fade from "../components/Fade.js";
import Spline from "@splinetool/react-spline";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [uiLoaded, setUiLoaded] = useState(false);
  const [openWelcome, setOpenWelcome] = useState(true);
  const [openStack, setOpenStack] = useState(false);
  const [openSki, setOpenSki] = useState(false);
  const [openStudies, setOpenStudies] = useState(false);
  const [blur, setBlur] = useState("blur(0px)");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audio = new Audio("../../SoulFood.mp3");

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

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

  var onClickBackStudies = () => {
    setOpenStudies(false);
    setTimeout(() => {
      setBlur("blur(0px)");
    }, 400);
  };

  const camera = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("Camera");
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    camera.current = obj;
  }

  function onMouseDown(e) {
    if (e.target.name === "Welcome") {
      setOpenWelcome(true);
    }
    if (e.target.name === "Stack") {
      setOpenStack(true);
      setBlur("blur(10px) hue-rotate(20deg)");
      console.log(camera.current.rotation.x);
    }
    if (e.target.name === "SkiPicture") {
      setOpenSki(true);
      transitionBlur();
    }
    if (e.target.name === "Studies") {
      setOpenStudies(true);
      setBlur("blur(10px)");
    }
    if (e.target.name === "Guitar") {
      setAudioPlaying(true);
    }
  }
  useEffect(() => {
    {
      audioPlaying ? audio.play() : audio.pause();
    }
  }, [audioPlaying]);

  function animateCamera() {
    var positionBefore = { x: -744.79, y: 900.27, z: 1985.70 };
    var positionAfter = { x: -1142.83, y: 869.10, z: 1825.66 };
    var rotationBefore = { x: -18.36, y: -16.55, z: -7.41 };
    var rotationAfter = { x: -18.97, y: -27.65, z: -11.06 };
    var iteration = 0;
    var maxIteration = 200;
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

  function transitionBlur() {
      var iterationSki = 0;
      console.log(iterationSki)
      var maxIterationSki = 100;
      while (iterationSki != maxIterationSki) {
        setTimeout(() => {
          console.log(iterationSki / 10);
          setBlur(
            `blur(${iterationSki / 10}px) hue-rotate(${iterationSki / 5}deg)`
          );
        }, 10 * iterationSki);
        iterationSki++;
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
      <Fade visible={openStudies}>
        <Studies handleClickBackStudies={onClickBackStudies} />
      </Fade>
      <div className="model">
        <Spline
          scene="https://prod.spline.design/ixHkjouYxH99PgEh/scene.splinecode"
          onMouseDown={onMouseDown}
          onLoad={onLoad}
          style={{ filter: blur, position: "absolute" }}
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

export default Home;
