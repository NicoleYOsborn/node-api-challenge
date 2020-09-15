const express = require("express");
const projectsRouter = require("./projects/projects-router.js");
const server = express();
const cors = require('cors');


server.use(express.json());
server.use(cors());
server.use("/projects", projectsRouter);


module.exports = server;