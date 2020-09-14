import React from 'react';

const Project = props =>{
    console.log(props)
    
    return(

        <div key={props.projects.id}>
            <h1>{props.projects.name}</h1>
            <h2>{props.projects.description}</h2>
        </div>
    );
};

export default Project;