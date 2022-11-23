import React from "react";

function Contact(props) {
  var clickBackContact = () => {
    props.handleClickBackContact();
  };

  return (
    <div className="modal">
      <p
        className="text"
        style={{
          marginTop: "2%",
          fontSize: "calc(10px + 2vw + 2vh)",
          fontWeight: "bold",
        }}
      >
        Contact
      </p>
      <div className="row" style={{ width: "100%", justifyContent: "center" }}>
        <div
          className="column"
          style={{ marginRight: "5%", alignItems: "flex-end" }}
        >
          <div
            className="row "
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "15%",
            }}
          >
            <p className="text">Phone </p>
            <img
              src="../../passionsIcons/iconPhone.png"
              className="contactIcon"
            />
            <p className="text"> :</p>
          </div>
          <div
            className="row"
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: "15%",
            }}
          >
            <p className="text">Mail</p>
            <img
              src="../../passionsIcons/iconMail.png"
              className="contactIcon"
            />
            <p className="text"> : </p>
          </div>
          <div
            className="row "
            style={{ justifyContent: "space-around", alignItems: "center" }}
          >
            <p className="text">GitHub </p>
            <img
              src="../../passionsIcons/iconGit.png"
              className="contactIcon"
            />
            <p className="text"> :</p>
          </div>
        </div>
        <div className="column" style={{ alignItems: "center" }}>
          <p className="text" style={{ marginBottom: "11%", marginTop: "2%" }}>
            06 69 67 36 05
          </p>
          <p className="text" style={{ marginBottom: "11%" }}>
            sim.lemaitre@gmail.com
          </p>
          <p className="text">https://github.com/SimonLem</p>
        </div>
      </div>
      <div className="centered">
        <div
          className="button"
          id="buttonWelcome"
          style={{ marginBottom: "2%", marginTop: "0" }}
          onClick={() => {
            clickBackContact();
          }}
        >
          <div id="spin"></div>
          <p>Back</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
