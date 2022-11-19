import React, { useState } from "react";

function Ski(props) {
  const [buttonIsVisible, setButtonIsVisible] = useState("1");

  var clickBackSki = () => {
    props.handleClickBackSki();
  };

  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src="../../Ski.jpg"
            style={{ width: "40%", objectFit: "cover"}}
          />
          <img src="../../arrowItsMe.png" style={{position:'absolute', width:"12vw", marginLeft:"19%",  transform:"rotate(18deg)"}} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginTop: "2%",
              marginLeft: "5%",
            }}
          >
            <p className="text">It's me !</p>
            <p
              className="text"
              style={{
                fontSize: "calc(10px + 1vw)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              I'm 25 years old and I live in Paris. In addition to computer science
              and developing, I enjoy :
            </p>
            <div className="wrapper">
              <p
                className="text"
                style={{
                  fontSize: "calc(10px + 1vw)",
                }}
              >
                - Mountains sports :
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconSki.png" height={"50vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "10%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  skiing
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img
                  src="../../passionsIcons/iconClimbing.png"
                  height={"50vh"}
                />
                <p
                  className="text"
                  style={{
                    marginLeft: "10%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  climbing
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconTrekking.png" height={"50vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "10%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  trekking
                </p>
              </div>
            </div>
            <div className="wrapper">
              <p
                className="text"
                style={{
                  marginRight: "3%",
                  fontSize: "calc(10px + 1vw)",
                }}
              >
                - Playing music :
              </p>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconGuitar.png" height={"50vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "15%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  guitar
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconMic.png" height={"45vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "15%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  vocals
                </p>
              </div>
            </div> <div className="wrapper">
              <p
                className="text"
                style={{
                  marginRight: "3%",
                  fontSize: "calc(10px + 1vw)",
                }}
              >
                - And more ... 
              </p>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconVideoGame.png" height={"50vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "15%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                 videogames
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconBook.png" height={"45vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "15%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  books
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding:"5%"
                }}
              >
                <img src="../../passionsIcons/iconMovie.png" height={"45vh"} />
                <p
                  className="text"
                  style={{
                    marginLeft: "15%",
                    fontSize: "calc(10px + 1vw)",
                  }}
                >
                  movies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3%" }}>
          <div
            className="button"
            id="buttonWelcome"
            style={{ opacity: buttonIsVisible }}
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
  );
}

export default Ski;
