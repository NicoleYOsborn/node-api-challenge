const express = require('express');
const router = express.Router();

const PHelpers = require('../data/helpers/projectModel')

router.get('/', (req, res)=>{
    // get a list of projects
})

router.get("/:id", (req, res)=>{
    // get requested project
})

router.get("/:id/actions", (req, res)=>{
    // get actions associated with a project
})

router.post("/", (req, res)=>{
    // post a new project
})

router.post("/:id/actions", (req, res)=>{
    // posts a new action to a project
})

router.put("/:id", (req, res)=>{
    // updates a project
})

router.put("/:id/actions", (req, res)=>{
    // updates an action
})

router.delete("/:id", (req, res)=>{
    // removes a project
})

router.delete("/:id/actions", (req, res)=>{
    // removes an action
})

module.exports = router;