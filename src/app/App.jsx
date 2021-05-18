import './app.css'
import React, {useState} from 'react';
import StudentsList      from './components/students-list/students.jsx'
import ViewRepository    from './components/view-repository/view.jsx'
import Card              from './components/student-card/card.jsx'
import SubCard              from './components/student-card/subcard.jsx'

function App() {
  let [students, setStudents] = useState([]);
  window.onload = function(){
      fetch('http://10.3.0.105:8030/api')
        .then(data => data.json())
        .then(data => setStudents(data));
  }
  
  const createKey = ( ) =>{
      return Math.floor(Date.now())+Math.random().toString()
  }
  const createRepository = ( data ) =>{
      console.log(data)
      return data.map(el=><SubCard key={createKey()} title={el.name}></SubCard>)
  }

  return (
    <section className="main-content">
      <StudentsList>
        {students.map(el=><Card key={createKey()} create={createRepository} title={el.name} href={el.href}/>)}
      </StudentsList>
      <ViewRepository/>
    </section>
  );
}

export default App;
