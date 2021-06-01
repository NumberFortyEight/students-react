import React from 'react';
import './tree.css'

function Tree(props){
    const parsUrl = ( ) =>{
        let arrUrl = props.fileUrl.split('/');
        arrUrl.pop()
        arrUrl = arrUrl.join('/');

        if(arrUrl.includes('.git')){
            props.setData(arrUrl)
            fetch(`http://10.3.0.105:8030/api${arrUrl}?drop=all`)       
        }
    }

    return(
        <div className="Tree">
            <div style={{display:"block", width:"100%",height:"40px"}}>
                <button style={{float:'left'}} className="prev-Tree"onClick={parsUrl}>
                    <img src="./back.svg" alt="back" width="22" height="22"/>
                </button>
                <p className="commit-naming" title={props.commit}>Commit: {props.commit}</p>
            </div>
            {props.create(props.data, true)}
        </div>
    )
}

export default Tree;