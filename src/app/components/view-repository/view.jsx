import React from 'react';
import ViewHeader from './view-components/header/header.jsx';
import Search from './view-components/search/search.jsx'
import Tree from './view-components/tree/tree.jsx'
import './view.css';

function ViewRepository() {
  return (
    <section className="view">
      <ViewHeader url="Student 1/task/"/>
      <Search/>
      <section className="view-content">
        <Tree></Tree>
      </section>
    </section>
  );
}

export default ViewRepository;
