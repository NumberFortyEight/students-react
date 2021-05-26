import React from 'react';
import CommitCard from './commit-card/commit-card.jsx'
import './commit.css'

function CommitTemplate(props){
    let elements = props.commits;
    return(
        <section className="commitTemplate" style={{display: props.display}}>
            {elements.length > 0 ? elements.map(el=> {
                return  <CommitCard setDisplay={props.setDisplay} href={props.href} creater={props.creater} url={props.url} key={props.keyCreator()} message={el.message} date={el.simpleDateFormat}></CommitCard>
            }) : <p>Ничего не найдено!</p>}
        </section>
    )
}

export default CommitTemplate;