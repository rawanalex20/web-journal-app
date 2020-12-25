/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');
/* Start instance of app */
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
const cors = require('cors');

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

// Configure and start server
const port = 8000;
const server = app.listen(port, ()=>{console.log(`server running on port: ${port}`)});


/* post route on '/addData' path */
app.post('/addData', addData);

function addData(req, res){
  projectData = {
    temperature: req.body.temperature,
    date: req.body.date,
    userResponse: req.body.userResponse
  };
}

/* post route on '/getData' path */
app.get('/getData', (req, res)=>{
  res.send(projectData);
})


