import React from "react";
import './keep-in-touch.styles.css';
import Id from './id.component';

function KeepInTouch() {
    const [show, setShow] = React.useState(true);
    function handleClick() {
      setShow(!show);
      if (show) {
        {
          document.getElementById("keepInTouch").removeAttribute("hidden");
          document.getElementById("showKeepInTouchBtn").innerText =
            "Hide Keep In Touch";
        }
      } else {
        {
          document.getElementById("keepInTouch").setAttribute("hidden", "true");
          document.getElementById("showKeepInTouchBtn").innerText = "Show Keep In Touch";
        }
      }
    }
    return (
      <div className="keepInTouch" style={{ textAlign: "center" }}>
        <button
          id="showKeepInTouchBtn"
          className="btn btn-primary btn-sm"
          onClick={handleClick}
        >
          Show Keep In Touch
        </button>
        
        <div className="container" id="keepInTouch" hidden>
          <div className="row">
            <div
              className="col col-lg-12 col-md-12 col-sm-12 pt-2"
              style={{ textAlign: "center" }}
            >
              <h4 onClick={handleClick}>Keep In Touch</h4>
              <hr />
            </div>
          </div>
          <Id name="ASDASD" designation="India" />
          <Id name="sdkfhgsdf sdfjhg" designation="Pakistan" />
          <Id name="ASsdlfhbdDASD" designation="BanglaDesh" />
          <Id name="ASDA  SD" designation="Nepal" />
        </div>
      </div>
    ); 
}


export default KeepInTouch;
