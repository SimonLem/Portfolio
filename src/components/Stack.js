import React, { useState } from "react";

function Stack(props) {
  const [buttonIsVisible, setButtonIsVisible] = useState("1");
  var clickBackStack = () => {
    props.handleClickBackStack();
  };

  return (
    <div className="modal">
      <p
        className="text"
        style={{
          marginTop: "2%",
          marginBottom:"2%",
          fontWeight: "bold",
          fontSize:"calc(10px + 2vw + 2vh)"
        }}
      >
        My stack :
      </p>
      <div className="centered wrapper">
        <img src="../../JS.png" className="stackIcon" style={{marginLeft:"0"}}/>
        <p
          className="text textStack"
        >
          Javascript{" "}
        </p>{" "}
        <img
          src="../../HTML.png" className="stackIcon"
        />
        <p
          className="text textStack"
        >
          HTML{" "}
        </p>{" "}
        <img
          src="../../CSS.png"  className="stackIcon"
        />
        <p
          className="text  textStack"
        >
          CSS{" "}
        </p>{" "}
      </div>
      <div className="centered wrapper">
        <img
          src="../../logoReact.png" className="stackIcon" style={{marginLeft:"0"}}
        />
        <p
          className="text  textStack"
        >
          React/React Native :{" "}
        </p>{" "}
        <p
          className="text textStack"
          style={{ fontSize: "calc(6px + 0.8vw)"}}
        >
          Router DOM, Redux, Bootstrap, Spline{" "}
        </p>{" "}
      </div>
      <div className="centered wrapper">
        <img src="../../NODE.png" className="stackIcon" style={{marginLeft:"0"}}/>
        <p
          className="text textStack"
        >
          NodeJS/Express{" "}
        </p>{" "}
        <img
          src="../../MONGODB.png"  className="stackIcon"
        />
        <p
          className="text  textStack"
        >
          MongoDB{" "}
        </p>{" "}
      </div>
      <div
        className="button"
        id="buttonWelcome"
        style={{ opacity: buttonIsVisible, marginBottom: "2%",marginTop:"0" }}
        onClick={() => {
          clickBackStack();
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
  );
}

export default Stack;
