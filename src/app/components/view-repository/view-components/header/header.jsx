import React from 'react';
import './header.css';
function ViewHeader(props) {
  return(
    <header className="view-header">
        <img className="view-img"src="./user.svg" alt="user" width="28" height="28"/>
        <p>{props.url}</p>
    </header>
  )
}

export default ViewHeader;
