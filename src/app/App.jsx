import './app.css'
import React, {useState} from 'react';
import StudentsList      from './components/students-list/students.jsx'
import ViewRepository    from './components/view-repository/view.jsx'
import Card              from './components/student-card/card.jsx'
import SubCard           from './components/student-card/subcard.jsx'

function App() {
  let [students, setStudents]     = useState([1,2,3,4]);
  let [repository, setRepository] = useState([1,2,3])

  const createRepository = ( ) =>{
      return repository.map(el=><SubCard key={createKey()}></SubCard>)
  }
  const createKey = ( ) =>{
      return Math.floor(Date.now())+Math.random().toString()
  }
  return (
    <section className="main-content">
      <StudentsList>
        {students.map(el=><Card key={createKey()} create={createRepository}></Card>)}
      </StudentsList>
      <ViewRepository/>
    </section>
  );
}

export default App;
