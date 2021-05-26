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
        
        //  filter
        
        if(event.target.value.trim() === ''){
            setVisible('none')
        }
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
                    <p className="text-item">
                    <input placeholder="01.08.18" className="focusThis" type='text' onChange={getCommitsOnDate}/>
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
