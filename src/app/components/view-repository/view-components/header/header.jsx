import React from 'react';
import './header.css';
import config from '../../../../../config.json';
function ViewHeader(props) {
  return(
    <header className="view-header">
        <img className="view-img"src={config.img.user} alt="user" width="28" height="28"/>
        <p>{props.url}</p>
    </header>
  )
}

export default ViewHeader;
