import React from 'react';

function CommitCard(props){
    var date = new Date(props.date*1000);

    let formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

    const fetchCommit = ( arg ) =>{
        let url = props.href+'?commit='+arg;
        props.creater(url, false);
        props.setDisplay('none');
    }  
    
    return(
        <div className="commitCard" onClick={()=>fetchCommit(props.date)}>
            <p className="commitMessage">{props.message}</p>
            <p className="commitDate">{formatter.format(date).replace(',', '')}</p>
        </div>
    )
}

export default CommitCard;