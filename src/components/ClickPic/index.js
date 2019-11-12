import React from "react";
import "./style.css";

const ClickPic = (props) => {
  return (
    <button className="img-container" onClick={props.onClick}>
        <img
          alt={props.name}
          src={props.image}
          key={props.id}
        />
    </button>
  );
}

export default ClickPic;
