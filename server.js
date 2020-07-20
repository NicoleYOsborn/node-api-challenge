const express = require("express");
const server = express();
const projectsRouter = require("./projects/projects-router.js");

server.get("/", (req, res) => {
    res.send(`
    
    <p>Welcome to my API</p>
  `);
});


server.use(express.json());
server.use("/projects", projectsRouter);

module.exports = server;