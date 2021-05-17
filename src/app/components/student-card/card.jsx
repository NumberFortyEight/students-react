import React,{useState} from 'react';
import './card.css';

function Card(props) {
  let [data, setData] = useState([]);
  let [show, setShow] = useState(false);

  const createHandler = () => {
        if(show === false){
            setData(props.create());
            setShow(cur=> !cur);
        }else{
            setData([]);
            setShow(cur=> !cur);
      }
  }
  return (
    <div>
      <li className="card" onClick={createHandler}>
        <img className="card-img"src="./user.svg" width="28" height="28"/>
        <p>student 1</p>
      </li>
      <ul className="sub-card">{data}</ul>
    </div>
  );
}
export default Card;
