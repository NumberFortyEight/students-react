import React,{useEffect, useState} from 'react';
import './card.css';

function Card(props) {
  let [show, setShow] = useState(false);
  let [repository, setRepository] = useState([]);
  
  const getRepository = ( url ) =>{
    fetch(`http://10.3.0.105:8030/api${url}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        if(Array.isArray(data)){
            setRepository(props.create(data))
          }
      })
  }
  
  const showHandler = () => {
      if(show === false){
          setShow(cur=> !cur);
          getRepository(props.href);
      }else{
          setShow(cur=> !cur);
          setRepository([]);
      }
  }

  return (
      <li>
        <div className="card" onClick={showHandler}>
          <img className="card-img"src="./user.svg" width="28" height="28" alt="user"/>
          <p className="person" title={props.title}>{props.title}</p>
        </div>
        <ul className="sub-card">{repository}</ul>
      </li>
  );
}
export default Card;
