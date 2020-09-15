import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from './components/Project';
import Action from './components/Action';
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
    <Router>

    <div className="App">
      <Switch>
        <Route exact path = "/projects">
        {projects.map(project=><Project projects={project}></Project>)}
        </Route>

        <Route path="/projects/:id/actions">
        <Action />
        </Route>

    {/*   */}

      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
