import                   './app.css';
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
import config from '../config.json'

const serverURL          =  config.url.serverURL;
const serverCommitUrl    =  config.url.commitURL;


function App() {
  let [students, setStudents] = useState([]);
  let [treeItems, setTreeItems] = useState([]);
  let [filesystemUrl, setFilesystemUrl] = useState('')
  let [showCode, setShowCode] = useState({display: 'none'});
  let [Href, setHref] = useState('');
  let [parentHref, setParentHref] = useState('');
  let [commit, setCommit] = useState('');

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
        if(data.result === 'Exception of load commit'){
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
      return data.map(el=>{
        return(  
            <SubCard 
              key={createKey()} 
              title={el.name} 
              click={getTreeData} 
              href={el.href}
              setParentHref={setParentHref}
            />
          )
      })
  }

  const getCommitName = ( commit ) =>{
    fetch(serverCommitUrl + parentHref + '/allcommits')
      .then(data=>data.json())
      .then(data=>{
        data.map(el=>{
          if(+el.simpleDateFormat === commit){
            setCommit(el.message)
          }
        })
      })
    } 

  const createTreeCard = ( data ) =>{
      return data.map((el)=>{
        return ( 
          <TreeCard 
            commitDate={el.commitTime}
            commit={getCommitName(el.commitTime)}
            sethref={setHref} 
            showCode={setShowCode} 
            setFileUrl = {setFilesystemUrl} 
            url={serverURL} 
            key={createKey()} 
            title={el.name} 
            href={el.href} 
            type={el.state} 
            data={setTreeItems}
          />
        )
    });
  }

  return (
    <section className="main-content">
      <StudentsList>
        {
          students.map(el=>{
              return (
                <Card 
                  key={createKey()} 
                  create={createRepository} 
                  title={el.name} 
                  href={el.href}
                />
              )
          })
        }
      </StudentsList>
      <ViewRepository>
        <ViewHeader url={filesystemUrl}/>
        <Search href={filesystemUrl} 
              creater={getTreeData} 
              keyCreator={createKey} 
              commitUrl={serverCommitUrl} 
              url={filesystemUrl}
        />
        <section className="view-content">
          <Tree create={createTreeCard} 
              url={serverURL} 
              commit={commit}
              data={treeItems} 
              setData={getTreeData} 
              fileUrl ={filesystemUrl} 
              setFileUrl = {setFilesystemUrl}
          />
        </section>
      </ViewRepository>
      <ViewCode style={showCode} showCode={setShowCode} href={Href}/>
    </section>
  );
}

export default App;
