import React from "react";
import {Link } from 'react-router-dom';
import "./echantillon.css";

function Echantillon(props) {
  return (
    <div className="echantillon">
      <div className="img-container">
        <Link to={props.url}>
            <div className="infos"><span>Voir Plus ...</span></div>
            <img
                className="img-respensive"
                src={props.img}
                alt={props.description}
            />
        </Link>
      </div>
    </div>
  );
}
export default Echantillon;
