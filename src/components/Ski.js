import React, { useState } from "react";

function Ski(props) {
  const [buttonIsVisible, setButtonIsVisible] = useState("1");

  var clickBackSki = () => {
    props.handleClickBackSki();
  };

  return (
    <div className="modal">
      <div
        style={{
          display: "flex",
          marginTop: "2%",
        }}
      >
        <img
          src="../../Ski.jpg"
          style={{
            marginLeft: "2%",
            minWidth: "30vw",
            minHeight: "90vh",
            maxHeight: "90vh",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            marginLeft: "5%",
          }}
        >
          <div>
            <p
              className="text"
              style={{
                fontSize: "calc(20px + 2vw + 2vh)",
                marginTop:"5%",
                fontWeight: "bold"
              }}
            >
              It's me !
            </p>
            <p
              className="text"
              style={{
                fontSize: "calc(10px + 0.7vw)",
                marginTop:"2%"
              }}
            >
              I'm 25 years old and I live in Paris. In addition to computer
              science and developing, I enjoy :
            </p>
          </div>
          <div >
            <div className="wrapper">
              <p className="text textSkiTitle">- Mountains sports :</p>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconSki.png"
                  className="skiIcon"
                />
                <p className="text textSki">skiing</p>
              </div>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconClimbing.png"
                  className="skiIcon"
                />
                <p className="text textSki">climbing</p>
              </div>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconTrekking.png"
                  className="skiIcon"
                />
                <p className="text textSki">trekking</p>
              </div>
            </div>
            <div className="wrapper">
              <p className="text textSkiTitle">- Playing music :</p>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconGuitar.png"
                  className="skiIcon"
                />
                <p className="text textSki">guitar</p>
              </div>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconMic.png"
                  className="skiIcon"
                />
                <p className="text textSki">vocals</p>
              </div>
            </div>
            <div className="wrapper">
              <p className="text textSkiTitle">- And more ...</p>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconVideoGame.png"
                  className="skiIcon"
                />
                <p className="text textSki">videogames</p>
              </div>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconBook.png"
                  className="skiIcon"
                />
                <p className="text textSki">books</p>
              </div>
              <div className="skiCard">
                <img
                  src="../../passionsIcons/iconMovie.png"
                  className="skiIcon"
                />
                <p className="text textSki">movies</p>
              </div>
            </div>
          </div>
          <div className="centered">
            <div
              className="button"
              id="buttonWelcome"
              style={{ opacity: buttonIsVisible, marginTop: "0",marginLeft:"-15%" }}
              onClick={() => {
                clickBackSki();
                setButtonIsVisible("0");
                setTimeout(() => {
                  setButtonIsVisible("1");
                }, 800);
              }}
            >
              <div id="spin"></div>
              <p>Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ski;
