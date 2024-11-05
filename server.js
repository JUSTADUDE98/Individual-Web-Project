const express = require('express');
const server = express();
const port = 3000;

server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});

server.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here
    res.send(`Username is $dtran28`);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});