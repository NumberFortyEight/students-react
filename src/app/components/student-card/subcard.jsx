import React from 'react';

function SubCard(props) {
  return (
      <li className="card" onClick={()=>{
          props.click(props.href)
          props.setParentHref(props.href)
      }}>
      <img className="card-img"src="./puzzle.svg" width="28" height="28" alt="task"/>
        <p>{props.title}</p>
      </li>
  );
}

export default SubCard;
