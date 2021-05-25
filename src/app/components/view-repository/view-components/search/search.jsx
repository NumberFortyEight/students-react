import  React, {useState} from 'react';
import './search.css';
import CommitTemplate from '../commits/commit-template.jsx';

function Search(props){
    let [commits, setCommits] = useState([]);
    let [visible, setVisible] = useState('none');
    let [deg, setDeg] = useState(0);
    const getCommits = ( ) =>{
        let mutableCommitUrl = props.commitUrl + props.url;
        if(visible === 'none'){
            fetch(mutableCommitUrl)
            .then(data=>data.json())
            .then(data=>setCommits(data))
            .catch( err=>console.log('err'));
            setVisible('block');
            setDeg(180)
        }else{
            setVisible('none');
            setCommits([])
            setDeg(0)
        }
    }
    return(
        <>
            <section className="search">
                <input className="search-input" type="text" placeholder="Search"/>
                <div className="search-item">
                    <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                    <p className="text-item">
                        Select date
                    </p>
                </div>
                <div className="search-item" onClick={getCommits}>
                    <img className="search-img" src="./select.svg" style={{transform: `rotate(${deg}deg)`}} alt="date" width="22" height="22"/>
                        <p className="text-item">
                            Select commit
                        </p>
                </div>
            </section>
            <CommitTemplate  href={props.href} creater={props.creater} url={props.url} display={visible} commits = {commits} keyCreator={props.keyCreator}></CommitTemplate>
        </>
    )
}

export default Search;
