// Dependencies
// =============================================================

const express = require("express");

// Sets up the Express App
// =============================================================

// EXPRESS Configuration

// Tells node that we are creating an "express" server
const app = express();

// Sets an intial port 
const PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER 
// Points our sever to a series of "route" files that give our server 
// a map of how to respond to data requests

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// Code to start our server

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




