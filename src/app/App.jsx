import './app.css'
import React, {useState} from 'react';
import StudentsList      from './components/students-list/students.jsx'
import ViewRepository    from './components/view-repository/view.jsx'
import Card              from './components/student-card/card.jsx'
import SubCard           from './components/student-card/subcard.jsx'
import ViewHeader        from './components/view-repository/view-components/header/header.jsx';
import Search            from './components/view-repository/view-components/search/search.jsx'
import Tree              from './components/view-repository/view-components/tree/tree.jsx'
import TreeCard          from './components/view-repository/view-components/tree/tree-components/tree-card.jsx';

const serverURL = 'http://10.3.105:8030/api';
const serverCommitUrl = 'http://10.3.105:8030/commit'
let filesystemUrl;
function App() {
  let [students, setStudents] = useState([]);
  let [treeItems, setTreeItems] = useState([]);

  window.onload = function(){
      fetch(serverURL)
        .then(data => data.json())
        .then(data => setStudents(data));
  }
  const getTreeData = ( dataUrl ) =>{
    let mutableUrl = serverURL + dataUrl;
    fetch(mutableUrl)
      .then(data => data.json())
      .then(data => {
        filesystemUrl = dataUrl;
        setTreeItems(data)
      }).catch(el=> console.log(el)) 
  }
  const createKey = ( ) =>{
      return Math.floor(Date.now())+Math.random().toString()
  }
  const createRepository = ( data ) =>{
      return data.map(el=><SubCard key={createKey()} title={el.name} click={getTreeData} href={el.href}></SubCard>)
  }
  const createTreeCard = ( data ) =>{
      return data.map(el=><TreeCard key={createKey()} title={el.name} type={el.state} elem={el}/>);
  }
  return (
    <section className="main-content">
      <StudentsList>
        {students.map(el=><Card key={createKey()} create={createRepository} title={el.name} href={el.href}/>)}
      </StudentsList>
      <ViewRepository>
        <ViewHeader url={filesystemUrl}/>
        <Search/>
        <section className="view-content">
          <Tree create={createTreeCard} data={treeItems}></Tree>
        </section>
      </ViewRepository>
    </section>
  );
}

export default App;
