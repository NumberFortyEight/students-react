import  React, {useState} from 'react';
import './search.css';
import CommitTemplate from '../commits/commit-template.jsx';

function Search(props){
    let [commits, setCommits] = useState([]);
    let [visible, setVisible] = useState('none');
    let mutableCommitUrl = props.commitUrl + props.url;
    
    const getCommits = ( ) =>{
        if(visible === 'none'){
            fetch(mutableCommitUrl)
            .then(data=>data.json())
            .then(data=>setCommits(data))
            .catch(()=>console.log('err'));
            setVisible('block');
        }else{
            setVisible('none');
            setCommits([])
        }
    }
    
    const getCommitsOnDate = ( event ) =>{
        setVisible('block');
        // let date = document.getElementById('date-date');
        // let time = document.getElementById('time-date');
        // console.log(Date.parse(date.value,time.value)/1000-86400)
        // alert()        

    }

    const searchCommits = ( event ) =>{
        setVisible('block');

        fetch(mutableCommitUrl)
        .then(data=>data.json())
        .then(data=>setCommits(()=>{
           return data.filter(el=>{ 
               return el.message.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }))
        .catch( err=>console.log('err'));
        
        if(event.target.value.trim() === ''){
            setVisible('none')
        }
     }
    return(
        <>
            <section className="search">
                <input onChange={searchCommits} className="search-input" type="text" placeholder="Поиск"/>
                <div className="search-item">
                    <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                    <div className="text-item">
                        <input id="date-date" className='search-item_date' defaultValue="11.12.2021"type='text'/>
                        <input id="time-date" className='search-item_date' defaultValue="00:00:00" type='text'/>
                        <button className='search-item_date' onClick={getCommitsOnDate} >Поиск</button>
                    </div>
                </div>
                <div className="search-item search-item-i" onClick={getCommits}>
                    <img className="search-img" src="./select.svg" alt="date" width="22" height="22"/>
                    <p className="text-item">
                        Выбрать коммит
                    </p>
                </div>
            </section>
            <CommitTemplate  setCommitDate = {props.setCommitDate} setCommit={props.setCommit} setDisplay={setVisible} href={props.href} creater={props.creater} url={props.url} display={visible} commits = {commits} keyCreator={props.keyCreator}></CommitTemplate>
        </>
    )
}

export default Search;
