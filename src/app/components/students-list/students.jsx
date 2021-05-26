import React from 'react';
import './students.css';

function StudentsList(props) {
  return (
    <section className="students-list">
      <h2 className="title">Список студентов</h2>
      <ul className="all-students">{props.children}</ul>
    </section>
  );
}

export default StudentsList;
