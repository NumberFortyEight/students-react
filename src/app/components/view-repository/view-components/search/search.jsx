import  React, {useState} from 'react';
import './search.css';
import CommitTemplate from '../commits/commit-template.jsx';

function Search(props){
    let [commits, setCommits] = useState([]);
    let [visible, setVisible] = useState('none');
    let mutableCommitUrl = props.commitUrl + props.url;
    
    let formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    
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
        
        fetch(mutableCommitUrl)
        .then(data=>data.json())
        .then(data=>setCommits(()=>{
           return data.filter(el=>{
               return Math.round(new Date(event.target.value).getTime()/1000 + 86400) >= el.simpleDateFormat
            })
        }))
        .catch( err=>console.log('err'));
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

        if(commits.length === 0){
            console.log("Ничего не найдено")
        }
     }
    return(
        <>
            <section className="search">
                <input onChange={searchCommits} className="search-input" type="text" placeholder="Поиск"/>
                <div className="search-item">
                    <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                    <p className="text-item">
                    <input className="focusThis" type='date' onChange={getCommitsOnDate}/>
                    </p>
                </div>
                <div className="search-item" onClick={getCommits}>
                    <img className="search-img" src="./select.svg" alt="date" width="22" height="22"/>
                        <p className="text-item">
                            Выбрать коммит
                        </p>
                </div>
            </section>
            <CommitTemplate setDisplay={setVisible} href={props.href} creater={props.creater} url={props.url} display={visible} commits = {commits} keyCreator={props.keyCreator}></CommitTemplate>
        </>
    )
}

export default Search;
