import React, {useState} from 'react';
import StudentsList      from './components/students-list/students.jsx';
import ViewRepository    from './components/view-repository/view.jsx';
import Card              from './components/student-card/card.jsx';
import SubCard           from './components/student-card/subcard.jsx';
import ViewHeader        from './components/view-repository/view-components/header/header.jsx';
import Search            from './components/view-repository/view-components/search/search.jsx'
import Tree              from './components/view-repository/view-components/tree/tree.jsx';
import TreeCard          from './components/view-repository/view-components/tree/tree-components/tree-card.jsx';
import ViewCode          from './components/view-code/code.jsx'
import Filter            from './components/filter/filter.jsx'
import './app.css';

const serverURL          = 'http://10.3.105:8030/api';
const serverCommitUrl    = 'http://10.3.105:8030/commit';

function App() {
  let [students, setStudents] = useState([]);
  let [treeItems, setTreeItems] = useState([]);
  let [filesystemUrl, setFilesystemUrl] = useState('')
  let [showCode, setShowCode] = useState({display: 'none'});
  let [Href, setHref] = useState('');

  window.onload = function(){
      fetch(serverURL)
        .then(data => data.json())
        .then(data => setStudents(data));
  }
  const getTreeData = ( dataUrl, state ) =>{
    let mutableUrl = serverURL + dataUrl;
    fetch(mutableUrl)
      .then(data => data.json())
      .then(data => {
        if(data?.result){
          alert(data.result);
        }else{
          if(state !== false){
            setFilesystemUrl(dataUrl);
          }
          setTreeItems(data)
        }
      })
  }
  
  const createKey = ( ) =>{
      return Math.floor(Date.now())+Math.random().toString()
  }
  
  const createRepository = ( data ) =>{
      return data.map(el=><SubCard key={createKey()} title={el.name} click={getTreeData} href={el.href}></SubCard>)
  }
  
  const createTreeCard = ( data ) =>{
      return data.map(el=><TreeCard sethref={setHref} showCode={setShowCode} setFileUrl = {setFilesystemUrl} url={serverURL} key={createKey()} title={el.name} href={el.href} type={el.state} data={setTreeItems}/>);
  }
  return (
    <section className="main-content">
      <StudentsList>
        {students.map(el=><Card key={createKey()} create={createRepository} title={el.name} href={el.href}/>)}
      </StudentsList>
      <ViewRepository>
        <ViewHeader url={filesystemUrl}/>
        <Search href={filesystemUrl} creater={getTreeData} keyCreator={createKey} commitUrl={serverCommitUrl} url={filesystemUrl}/>
        <Filter />
        <section className="view-content">
          <Tree create={createTreeCard} url={serverURL} data={treeItems} setData={getTreeData} fileUrl ={filesystemUrl} setFileUrl = {setFilesystemUrl}></Tree>
        </section>
      </ViewRepository>
      <ViewCode style={showCode} showCode={setShowCode} href={Href}/>
    </section>
  );
}

export default App;
