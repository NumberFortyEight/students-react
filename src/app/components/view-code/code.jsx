import React,{useState} from 'react';
import './code.css';

function ViewCode(props){
    let [code, setCode] = useState('');
    fetch(props.href)
    .then(data=> data.text())
    .then(data=> { 
        setCode(data) 
    })    
    return(
        <div className="bg-view" style={props.style}>
               <div className="ViewCode">
               <img className="closeBtn" onClick={()=>props.showCode({display:"none"})} src="./close.svg" alt="close" width="22" height="22" />
                <pre id="code" className="ViewContent">
                    {code}        
                </pre>
            </div>
        </div>
    )
}

export default ViewCode;