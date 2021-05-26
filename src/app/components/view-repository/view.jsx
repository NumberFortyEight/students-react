import React from 'react';
import './view.css';

function ViewRepository(props) {
  return (
    <section className="view">
          {props.children}
    </section>
  );
}

export default ViewRepository;
