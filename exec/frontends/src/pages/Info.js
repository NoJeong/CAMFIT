import React, { Component } from "react";
import "./page.css";
import honey from "../component/Info/images/honey.jpg";
import Infocard from "../component/Info/InfoCard";



class Info extends Component {
  render() {
    return (
      <div className="Info myttf">
        <div
          style={{
            backgroundImage: `url("${honey}")`,
            height: "400px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            marginBottom: "50px",
            position: "relative",
          }}
          className="Infoouter"
        >
      
        </div>
        <Infocard />
      </div>
    );
  }
}

export default Info;
