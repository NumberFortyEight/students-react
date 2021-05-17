import React from 'react';
function ViewHeader(props) {
  return(
    <header className="view-header">
        <img className="view-img"src="./user.svg" width="28" height="28"/>
        <p>{props.url}</p>
    </header>
  )
}

export default ViewHeader;
