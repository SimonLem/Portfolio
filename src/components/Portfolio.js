import React, { useState } from "react";

function Portfolio(props) {
  const [slider, setSlider] = useState("slider1");
  var clickBackPortfolio = () => {
    props.handleClickBackPortfolio();
  };

  return (
    <div className="modal">
      <p
        className="text"
        style={{
          fontSize: "calc(20px + 1.5vw + 1.5vh)",
          marginTop: "2%",
          fontWeight: "bold",
        }}
      >
        Portfolio
      </p>
      <div className={slider}>
        <div className="siteCabinet">
          <div className="containerImg">
            <a href="https://www.cabinetdeneuropsychologie.fr/" target="_blank">
              <img
                src="../../NeuropsychologieScreen.png"
                className="portfolioImg"
              />
            </a>
          </div>{" "}
          <div
            style={{
              width: "40%",
              marginLeft: "3%",
            }}
          >
            <p className="text" style={{ marginBottom: "4%" }}>
              www.cabinetdeneuropsychologie.fr
            </p>
            <p
              className="text textSki"
              style={{ marginLeft: "8%", marginBottom: "2%" }}
            >
              Features :
            </p>
            <p className="text textSki">
              - presentation of Nathalie and her medical office
            </p>
            <p className="text textSki">- booking a session</p>
            <p className="text textSki">- online payment using Stripe</p>
            <p className="text textSki">
              - backoffice to create and manage sessions
            </p>
            <p className="text textSki">- contact form using Nodemailer</p>
            <p className="text textSki">- localisation with GoogleMaps</p>
          </div>
        </div>
        <div className="siteCabinet">
          <div className="containerImg">
            <a href="https://www.cabinetdeneuropsychologie.fr/" target="_blank">
              <img
                src="../../NeuropsychologieScreen.png"
                className="portfolioImg"
              />
            </a>
          </div>{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5%",
        }}
      >
        <img
          src="../../arrowSlider.png"
          className="arrow"
          onClick={() => {
            setSlider("slider1");
          }}
        />
        <p className="text textSki" style={{ marginLeft: "2vw" }}>
          See more
        </p>
        <img
          src="../../arrowSlider.png"
          className="arrow"
          style={{ marginLeft: "2vw", rotate: "180deg" }}
          onClick={() => {
            setSlider("slider2");
          }}
        />
      </div>
      <div className="centered">
        <div
          className="button"
          id="buttonWelcome"
          style={{ marginBottom: "2%", marginTop: "0" }}
          onClick={() => {
            clickBackPortfolio();
          }}
        >
          <div id="spin"></div>
          <p>Back</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
