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
          marginBottom:"2%"
        }}
      >
        My stack :
      </p>
      <div className="centered wrapper">
        <img src="../../JS.png" style={{ width: "calc(50px + 2vh + 2vw)" }} />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
        >
          Javascript{" "}
        </p>{" "}
        <img
          src="../../HTML.png"
          style={{ marginLeft: "4%", width: "calc(50px + 2vh + 2vw)" }}
        />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
        >
          HTML{" "}
        </p>{" "}
        <img
          src="../../CSS.png"
          style={{ marginLeft: "4%", width: "calc(50px + 2vh + 2vw)" }}
        />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
        >
          CSS{" "}
        </p>{" "}
      </div>
      <div className="centered wrapper">
        <img
          src="../../logoReact.png"
          style={{ width: "calc(50px + 2vh + 2vw)" }}
        />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "5%" }}
        >
          React/React Native :{" "}
        </p>{" "}
        <p
          className="text"
          style={{ fontSize: "calc(6px + 0.8vw)", marginLeft: "2%" }}
        >
          Router DOM, Redux, Bootstrap, Spline{" "}
        </p>{" "}
      </div>
      <div className="centered wrapper">
        <img src="../../NODE.png" style={{ width: "calc(50px + 2vh + 2vw)" }} />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "3%" }}
        >
          NodeJS/Express{" "}
        </p>{" "}
        <img
          src="../../MONGODB.png"
          style={{ marginLeft: "4%", width: "calc(50px + 2vh + 2vw)" }}
        />
        <p
          className="text"
          style={{ fontSize: "calc(15px + 1vw)", marginLeft: "3%" }}
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
