import React from 'react';
import config from "../../../config.json";
function SubCard(props) {
  return (
      <li className="card" onClick={()=>{
          props.click(props.href)
          props.setParentHref(props.href)
      }}>
      <img className="card-img"src={config.img.puzzle} width="28" height="28" alt="task"/>
        <p>{props.title}</p>
      </li>
  );
}

export default SubCard;
