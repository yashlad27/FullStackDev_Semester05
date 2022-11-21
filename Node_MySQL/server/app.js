const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// create route
app.post('/insert', (request, response) => {

});

// read route
app.get('/getAll', (request, response) => {
    // console.log('test');
    response.json({
        success: true
    });
});

// update route

// delete route

// start local server:
app.listen(process.env.PORT, () => console.log('app is running!')); 