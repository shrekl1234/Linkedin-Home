import React from 'react';
import './id.styles.css';

function Id({img="", name, designation}){
    return (
      <div className="col  idCard">
        <div className="row">
          <div className="col col-lg-2 col-md-2 col-sm-2 m-auto" style={{position: "relative",right:"10px"}}>
            <i class="fas fa-user-circle fa-3x "></i>
          </div>
          <div className="col col-lg-10 col-md-10 col-sm-10 m-auto pl-4 pt-3">
            <span>
              <strong>{name}</strong>
            </span>
            <p style={{ color: "#838383" }}>{designation}</p>
          </div>
        </div>
      </div>
    );
}


export default Id;
