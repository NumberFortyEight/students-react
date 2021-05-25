import React from 'react';
import './tree.css'

function Tree(props){
    const parsUrl = ( ) =>{
        let arrUrl = props.fileUrl.split('/');
        arrUrl.pop()
        arrUrl = arrUrl.join('/');
        if(arrUrl.includes('.git')){
            props.setData(arrUrl)
        }
    }

    return(
        <div className="Tree">
            <button className="prev-Tree"onClick={parsUrl}>
                назад
            </button>
            {props.create(props.data, true)}
        </div>
    )
}

export default Tree;