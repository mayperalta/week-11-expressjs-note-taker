const express = require('express');
const path = require('path');
// makes html routes available
const html = require('./routes/html');

const api = require('./routes/api.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
// lets to work on http and https environments 
app.use(express.urlencoded({ extended: true }));
//localhost:3001/api enables api.js 
app.use('/api', api);
// we start the server which has a base URL of local host 3001 
// enable routes in HTML file (https://localhost:3001/)
app.use('/', html)
// frontend assets or static assets use the public folder 
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
