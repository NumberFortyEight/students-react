import  React from 'react';
import './search.css'
function Search(props){
    const getCommits = ( ) =>{
        let mutableCommitUrl = props.commitUrl + props.url;
        let mutableUrl = props.url + props.api
        fetch(mutableCommitUrl)
            .then(data=>data.json())
            .then(data=>console.log(data));
    }
    return(
        <section className="search">
            <input className="search-input" type="text" placeholder="Search"/>
            <div className="search-item">
                <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                <p className="text-item">
                    Select date
                </p>
            </div>
            <div className="search-item">
                <img className="search-img" src="./select.svg" alt="date" width="22" height="22"/>
                    <p className="text-item" onClick={getCommits}>
                        Select commit
                    </p>
            </div>
        </section>
    )
}

export default Search;
