const express = require('express');
const router = express.Router();

const PHelpers = require('../data/helpers/projectModel.js');
const AHelpers = require('../data/helpers/actionModel.js');

router.get('/', (req, res)=>{
    PHelpers.get()
    .then(projects =>{
        res.status(200).json(projects);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({message: 'error retrieving users'});
    })
    // get a list of projects
});

router.get("/:id", validateProjectId, (req, res)=>{
    res.status(200).json(req.project);
})

router.get("/:id/actions", validateProjectId, (req, res)=>{
    AHelpers.get(req.params.id)
    .then(actions =>{
        res.status(200).json(actions);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({message: 'error retrieving post'});
    })
    // get actions associated with a project
});

router.post("/", (req, res)=>{
    PHelpers.insert(req.body)
    .then(project =>{
        res.status(201).json(project);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({message: 'Error adding project'})
    })
    // post a new project
});

router.post("/:id/actions", validateProjectId, (req, res)=>{
    const actionInfo = {project_id: req.params.id, ...req.body};
    AHelpers.insert(actionInfo)
    .then(action =>{
        res.status(201).json(action);
    })
    .catch(error =>{
        console.log(error);
        res.status(500).json({message: 'error adding the action'});
    })
    // posts a new action to a project
});

router.put("/:id", validateProjectId, (req, res)=>{
    // updates a project
})

router.put("/:id/actions", validateProjectId, (req, res)=>{
    // updates an action
})

router.delete("/:id", validateProjectId, (req, res)=>{
    // removes a project
})

router.delete("/:id/actions", validateProjectId, (req, res)=>{
    // removes an action
})

// custom middleware
function validateProjectId(req, res, next) {
    const {id} = req.params;
    PHelpers.get(id)
      .then(project =>{
        if(project){
          req.project = project;
          next();
        }else{
          res.status(400).json({message: 'invalid project id'});
        }
      })
  }


module.exports = router;