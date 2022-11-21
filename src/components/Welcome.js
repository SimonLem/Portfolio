import React, { useState } from "react";

function Welcome(props) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  var clickLetsGo = () => {
    props.handleClickLetsGo();
  };

  return (
    <div className="page">
      <p className="textWelcome">Hi, my name is</p>
      <p
        className="textWelcome"
        style={{
          fontSize: "calc(20px + 3vw)",
          color: "#f2a5ff",
          fontWeight: "bold",
          marginTop: "-2%",
        }}
      >
        Simon Lemaitre.
      </p>
      <p className="textWelcome" style={{ marginTop: "-1%" }}>
        I'm a junior web developer based in Paris
        <br />
        and this is my website.
      </p>
      <div className="centered">
        {isLoading ? (
          <div className="centered" style={{ flexDirection: "column" }}>
            <img
              src="../../loader.gif"
              style={{ width: "10%"}}
            />
            <p
              className="text"
              style={{ fontSize: "calc(5px + 0.6vw)", marginTop: "-2%" }}
            >
              Loading infinity and beyond ...
            </p>
          </div>
        ) : (
          <div
            className="button"
            id="buttonWelcome"
            onClick={() => {
              clickLetsGo();
            }}
          >
            <div id="spin"></div>
            <p>Explore</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
