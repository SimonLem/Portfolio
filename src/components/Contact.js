import React from "react";

function Contact(props) {
  var clickBackContact = () => {
    props.handleClickBackContact();
  };

  return (
    <div className="modal">
      <p className="text">Contact</p>
      <div className="row" style={{width:"100%", justifyContent:"center"}}>
        <div className="column" style={{marginRight:"5%", alignItems:"flex-end" }}>
          <p className="text" style={{marginBottom:"5%"}} >Phone :</p>
          <p className="text" style={{marginBottom:"5%"}}>Mail :</p>
          <p className="text" style={{marginBottom:"5%"}}>GitHub :</p>
        </div>
        <div className="column" style={{alignItems:"center"}}>
          <p className="text" style={{marginBottom:"5%"}}>06 69 67 36 05</p>
          <p className="text" style={{marginBottom:"5%"}}>sim.lemaitre@gmail.com</p>
          <p className="text" style={{marginBottom:"5%"}}>https://github.com/SimonLem</p>
        </div>
      </div>
      <div className="centered">
        <div
          className="button"
          id="buttonWelcome"
          onClick={() => {
            clickBackContact();
          }}
        >
          <div id="spin"></div>
          <p>Let's explore</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
