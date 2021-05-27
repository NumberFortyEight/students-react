import React from 'react';
import './tree-card.css'
function TreeCard(props){
    let img;
    let settings;
    let mutableUrl = props.url+props.href;
    if(props.type === 'FOLDER' || props.type === "REPOSITORY"){
        img = <img src="./folder.svg" width="22" height="22"/>;
        settings = '';
    }else{
        img = <img src="./file.svg" width="22" height="22"/>;
        settings = <img onClick={()=>{
            props.showCode({display: 'flex'})
            props.sethref(mutableUrl)
        }} className="tree-card-img" src="./code.svg" alt="date" width="22" height="22"/>;
    }
    const getNewData = ( ) =>{
        if(props.type !== 'FOLDER' && props.type !== "REPOSITORY"){
            window.open(mutableUrl);
        }else{
            fetch(mutableUrl)
                .then(data => data.json())
                .then(data => {
                    props.data(data)
                    props.setFileUrl(props.href);
                })
        }
    }
    return(
        <div className="tree-card">
            {img}
            <p className="tree-card-item" onClick={getNewData}>{props.title}</p>
            <p className="tree-card-item" title={props.commitName}>{props.commitName}</p>
            <p className="tree-card-item">{props.commitDate}</p>
            {settings}
        </div>
    )
}

export default TreeCard;
