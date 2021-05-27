import React from 'react';
import './tree.css'

function Tree(props){
    const parsUrl = ( ) =>{
        let arrUrl = props.fileUrl.split('/');
        arrUrl.pop()
        arrUrl = arrUrl.join('/');

        if(arrUrl.includes('.git')){
            props.setData(arrUrl)
        }else{
            fetch('http://')
        }
        
    }

    return(
        <div className="Tree">
            <button className="prev-Tree"onClick={parsUrl}>
                <img src="./back.svg" alt="back" width="22" height="22"/>
            </button>
            {props.create(props.data, true)}
        </div>
    )
}

export default Tree;