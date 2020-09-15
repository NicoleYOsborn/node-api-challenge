import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


const Action = () =>{
    const [actions, setActions] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:8000/projects/${id}/actions`)
        .then(response=>{
            console.log("in the actions call", response.data.actions)
            setActions(response.data.actions)
        })
        .catch(error=>{
            console.log(error);
        })
    }, [id]);

    return(
        <div>
            {actions.map(action=>(
                <p key={action.id}>{action.description}</p>
            ))}
        </div>
    )
}

export default Action;
