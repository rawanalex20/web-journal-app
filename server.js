projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

app.get('/', function (req, res) {
    res.send('server running');
});

app.use(function(req, res, next) {
    res.status(404).send("404");
});

const port = 8080;

const server = app.listen(port, ()=>{console.log(`server running on port: ${port}`)});


