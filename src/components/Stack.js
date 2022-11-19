import React, { useState } from "react";

function Stack(props) {
  const [buttonIsVisible, setButtonIsVisible] = useState("1");
  var clickBackStack = () => {
    props.handleClickBackStack();
  };

  return (
    <div className="modalContainer">
      <div className="modalContent"  >
        <p
          className="text"
          style={{
            marginTop: "2%",
          }}
        >
          My stack :
        </p>
        <div
          className="centered"
          style={{
            marginTop: "-2%",
          }}
        >
          <img src="../../JS.png" height={"40%"}/>
          <p
            className="text"
            style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
          >
            Javascript{" "}
          </p>{" "}
          <img
            src="../../HTML.png"
            height={"45%"}
            style={{ marginLeft: "4%" }}
          />
          <p
            className="text"
            style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
          >
            HTML{" "}
          </p>{" "}
          <img
            src="../../CSS.png"
            height={"40%"}
            style={{ marginLeft: "4%" }}
          />
          <p
            className="text"
            style={{ fontSize: "calc(15px + 1vw)", marginLeft: "4%" }}
          >
            CSS{" "}
          </p>{" "}
        </div>
        <div
          className="centered"
          style={{
            marginTop: "-2%",
          }}
        >
          <img src="../../logoReact.png" height={"50%"}/>
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
        <div
          className="centered"
          style={{
            marginTop: "-5%",
          }}
        >
          <img src="../../NODE.png" height={"60%"}/>
          <p
            className="text"
            style={{ fontSize: "calc(15px + 1vw)", marginLeft: "3%" }}
          >
            NodeJS/Express{" "}
          </p>{" "}
          <img
            src="../../MONGODB.png"
            height={"40%"}
            style={{ marginLeft: "4%" }}
            />
          <p
            className="text"
            style={{ fontSize: "calc(15px + 1vw)", marginLeft: "3%" }}
          >
            MongoDB{" "}
          </p>{" "}
        </div>
        <div style={{ marginTop: "-3%" }}>
          <div
            className="button"
            id="buttonWelcome"
            style={{ opacity: buttonIsVisible }}
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
      </div>
    </div>
  );
}

export default Stack;
