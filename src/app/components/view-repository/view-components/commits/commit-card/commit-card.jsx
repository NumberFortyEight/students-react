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
        console.log(props.href)
        props.creater(url, false);
        props.setDisplay('none');
        alert(`Коммит  ${props.message}  применен!`)
    }  
    return(
        <div className="commitCard" onClick={()=>fetchCommit(props.date)}>
            <p className="commitMessage">{props.message}</p>
            <p className="commitDate">{formatter.format(date).replace(',', '')}</p>
        </div>
    )
}

export default CommitCard;