import  React from 'react';
import './search.css'
function Search(){
    return(
        <section className="search">
            <input className="search-input" type="text" placeholder="Search"/>
            <div className="search-item">
                <img className="search-img" src="./calendar.svg" alt="date" width="22" height="22"/>
                <p className="text-item">
                    Date 01.02.2021
                </p>
            </div>
            <div className="search-item">
                <img className="search-img" src="./commit.svg" alt="date" width="22" height="22"/>
                <p className="text-item">
                    View commits
                </p>
            </div>
            <div className="search-item">
                <img className="search-img" src="./select.svg" alt="date" width="22" height="22"/>
                    <p className="text-item">
                        Select commit
                    </p>
            </div>
        </section>
    )
}

export default Search;
