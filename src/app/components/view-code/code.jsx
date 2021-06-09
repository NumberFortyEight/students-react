import React,{useState} from 'react';
import config from "../../../config.json";
import './code.css';

function ViewCode(props){
    let [code, setCode] = useState('');
    let [imgLoading, setImgLoading] = useState('');
    fetch(props.href)
        .then(data=> data.text())
        .then(data=> {
            let codeView = document.getElementById('code');
            let imgView = document.getElementById('img-Code')
            if(props.href.includes('.svg') === true || props.href.includes('.ico') === true || props.href.includes('.png') === true || props.href.includes('.jpg') === true){
                setImgLoading(props.href);
                setTimeout(()=>{
                    codeView.style.display = "none";
                    imgView.style.display = "block";
                }, 0)
            }else{
                setCode(data);
                setTimeout(()=>{
                    codeView.style.display = "block";
                    imgView.style.display = "none";
                }, 0)
            }
        })  
    return(
        <div className="bg-view" style={props.style}>
                <div className="ViewCode">
                <img className="closeBtn" onClick={()=>props.showCode({display:"none"})} src={config.img.close} alt="close" width="22" height="22" />
                <pre id="code" className="ViewContent">
                    {code}        
                </pre>
                <div className="ViewContentImg">
                <img id="img-Code" src={imgLoading} className="ViewImg--S" alt="view"/>
                </div>
            </div>
        </div>
    )
}

export default ViewCode;