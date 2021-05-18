import React from 'react';
import './tree-card.css'
function TreeCard(){
    return(
        <div className="tree-card">
            <img src="./folder.svg" width="22" height="22"/>
            <p className="tree-card-item">index.html</p>
            <p className="tree-card-item">Add files via upload</p>
            <p className="tree-card-item">20.08.2021</p>
            <img className="tree-card-img" src="./calendar.svg" alt="date" width="22" height="22"/>
            <img className="tree-card-img" src="./select.svg" alt="date" width="22" height="22"/>
        </div>
    )
}

export default TreeCard;