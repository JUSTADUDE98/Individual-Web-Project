const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 3000;

server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});

server.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data

    console.log(username);
    // Add validation logic here
    res.send('Form submitted successfully!');
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});