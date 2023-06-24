import React, { useState } from 'react';
import './App.css'
import Student from "./Student"

function App() {

  const [students, setStudents] = useState([
    { name: 'John Doe', id: '16342424', department: "", blood: "O-" },
    { name: '', id: '1743532', department: "EEE", blood: "AB+" },
    { name: 'Tom Johnson', id: '15354224', department: "Law", blood: '' },
    { name: 'John Smith', id: '', department: "Mathematics", blood: "B-" },
  ]);

  return (
    <div>
        <h1>Student Cards</h1>
        <div className="container">
          {students.map((student, index) => (
            <Student
              key={index}
              name={student.name}
              id={student.id}
              department={student.department}
              blood={student.blood}
            />
          ))}
        </div>
    </div>
  );
}

export default App
