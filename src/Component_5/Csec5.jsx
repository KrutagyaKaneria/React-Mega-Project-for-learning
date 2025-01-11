import { useState, useEffect } from 'react';

function Csec5() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://testing-server-oum8.onrender.com/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <h1>Students List</h1>
      <ol>
        {students.map((student, index) => (
          <li key={index}>
            {Object.entries(student)
              .filter(([key]) => key !== '_id') 
              .map(([key, value]) => (
                <span key={key}>
                  <strong>{key}:</strong> {value} 
                </span>
              ))}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Csec5;