import React from "react";
import "../Info/info.css";
import "./main.css"
import backgr from "./images/메인 이미지.jpg";

function MainTop(props) {


  return (
    <div>
      <div
        className="jb-wrap outer2 img contrast2"
        style={{
            backgroundImage: `url("${backgr}")`,
            height: "500px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            // position: "relative",
          }}
      ></div>

      <div className="bottomleft ttfex fontgra">
        <p style={{ fontSize:"40px" }}>Make Your Wonderful Body</p>
        <p style={{ color: "white" ,fontSize:"60px" }}>with "CAMFIT"</p>
      </div>
      
    </div>
  );
}

export default MainTop;
