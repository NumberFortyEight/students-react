import  React, {useState} from 'react';
import  './search.css';
import  CommitTemplate from '../commits/commit-template.jsx';
import moment from 'moment';

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
        let time = document.getElementById('time-date');
        let date = document.getElementById('date-date');
        let customDate = date.value+' '+time.value+':59';
        let originDate = moment(customDate, 'DD/MM/YYYY HH:mm:ss').format('DD.MM.YYYY HH:mm:ss');

        if(originDate !== 'Invalid date' && time.value.length < 6 && date.value.length < 11){
            let unixtime = moment(originDate, 'DD.MM,YYYY HH:mm:ss').format('X');
            console.log(unixtime)
            fetch(mutableCommitUrl+'?unixTime='+unixtime)
                .then(data=>data.json())
                .then(data=>setCommits(data))
            
        }else{
            setVisible('none');
            alert('Дата или время, указано не правильно!')
            time.value = '00:00';
            date.value = moment(new Date(), 'DD/MM/YYYY').format('DD.MM.YYYY');
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
        .catch( err=>console.log(err));
        
        if(event.target.value.trim() === ''){
            setVisible('none')
        }
    }

    return(
        <>
            <section className="search">
                <input onChange={searchCommits} className="search-input" type="text" placeholder="Поиск"/>
                <div className="search-item search-item__item">
                    <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                    <div className="text-item">
                        <input id="date-date" className='search-item_date' defaultValue="31.12.2021"type='text'/>
                        <input id="time-date" className='search-item_date' defaultValue="00:00" type='text'/>
                        <button className='search-item_date btn-date' onClick={getCommitsOnDate}>Поиск</button>
                    </div>
                </div>
                <div className="search-item search-item-i" onClick={getCommits}>
                    <img className="search-img" src="./select.svg" alt="date" width="22" height="22"/>
                    <p className="text-item">
                        Выбрать коммит
                    </p>
                </div>
            </section>
            <CommitTemplate  
                setCommitDate = {props.setCommitDate} 
                setCommit={props.setCommit} 
                setDisplay={setVisible} 
                href={props.href} 
                creater={props.creater} 
                url={props.url} 
                display={visible} 
                commits = {commits} 
                keyCreator={props.keyCreator}
            />
        </>
    )
}

export default Search;
