import React from 'react';
import {Link} from "react-router-dom";
import Action from './Action';

const Project = props =>{
    console.log(props)
    const id = props.projects.id
    return(

        
        <div key={props.projects.id}>
            <h1>{props.projects.name}</h1>
            <h2>{props.projects.description}</h2>
             <Link to={`/projects/${props.projects.id}/actions`}><a>Actions</a></Link>
            
        </div> 
        
    );
};

export default Project;