import React from 'react';
import './tree-card.css'
function TreeCard(props){
    console.log(props.elem)
    let img;
    if(props.type === 'FOLDER' || props.type === "REPOSITORY"){
        img = <img src="./folder.svg" width="22" height="22"/>;
    }else{
        img = <img src="./file.svg" width="22" height="22"/>;
    }
    return(
        <div className="tree-card">
            {img}
            <p className="tree-card-item">{props.title}</p>
            <p className="tree-card-item"></p>
            <p className="tree-card-item">20.08.2021</p>
            <img className="tree-card-img" src="./calendar.svg" alt="date" width="22" height="22"/>
            <img className="tree-card-img" src="./select.svg" alt="date" width="22" height="22"/>
        </div>
    )
}

export default TreeCard;
