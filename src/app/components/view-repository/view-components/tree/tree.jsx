import React from 'react';
import './tree.css'
import config from "../../../../../config.json"
function Tree(props){
    const parsUrl = ( ) =>{
        let arrUrl = props.fileUrl.split('/');
        arrUrl.pop()
        arrUrl = arrUrl.join('/');

        if(arrUrl.includes('.git')){
            props.setData(arrUrl)
            fetch(`${config.url.serverURL}${arrUrl}?drop=all`)       
        }
    }

    return(
        <div className="Tree">
            <div style={{display:"block", width:"100%",height:"40px"}}>
                <button style={{float:'left'}} className="prev-Tree"onClick={parsUrl}>
                    <img src={config.img.back} alt="back" width="22" height="22"/>
                </button>
                <p className="commit-naming" title={props.commit}>Commit: {props.commit}</p>
            </div>
            {props.create(props.data, true)}
        </div>
    )
}

export default Tree;