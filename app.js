const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submissions
app.post('/', (req, res) => {
  // Log form data to the terminal
  console.log('Form Data:', req.body);

  // Send a response to the user
  res.send(`<h1>Thank you, ${req.body.name}! Your message has been received.</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
