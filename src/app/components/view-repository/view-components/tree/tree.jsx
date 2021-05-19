import React, {useState} from 'react';
import './tree.css'

function Tree(props){

    return(
        <div className="Tree">
            {props.create(props.data)}
        </div>
    )
}

export default Tree;