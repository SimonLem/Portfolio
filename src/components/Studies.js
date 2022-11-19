import React from "react";

function Studies(props) {
  var clickBackStudies = () => {
    props.handleClickBackStudies();
  };

  return (
    <div className="page">
      <div style={{marginLeft:"5%"}}>
      <p className="text" style={{ marginBottom:"2%", marginLeft:"3%"}}>Education</p>
      <p className="text">RNCP Title level VI : Web and mobile development project manager</p>
      <p className="text" style={{fontSize: "calc(10px + 1vw)", marginLeft:"3%", marginBottom:"2%"}}>La Capsule </p>
      <p className="text">Dual Bachelor in Mathematics and Physics</p>
      <p className="text" style={{fontSize: "calc(10px + 1vw)"}}>University of Paris Sud</p>
      <p className="text">Diploma of computer sciences</p>
      <p className="text" style={{fontSize: "calc(10px + 1vw)"}}>UIT Paris Descartes</p>
      </div>
      <div className="centered">
        <div
          className="button"
          id="buttonWelcome"
          onClick={() => {
            clickBackStudies();
          }}
        >
          <div id="spin"></div>
          <p>Let's explore</p>
        </div>
      </div>
    </div>
  );
}

export default Studies;
