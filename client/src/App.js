import React, {useState, useEffect} from 'react';
import Project from './components/Project'
import axios from 'axios';

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    axios
    .get('http://localhost:8000/projects')
    .then(result=>{
      setProjects(result.data);
    })
  }, [])


  return (
    <div className="App">
     {projects.map(project=><Project projects={project}></Project>)}
      
    </div>
  );
}

export default App;
