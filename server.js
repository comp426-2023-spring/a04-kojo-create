// Import required modules
const express = require('express');
const minimist = require('minimist');
const { rps, rpsls } = require('./lib/rpsls.js');

// Parse command-line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// Create Express app
const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/app', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res) => {
  res.status(200).send(rps());
});

app.get('/app/rpsls', (req, res) => {
  res.status(200).send(rpsls());
});

app.get('/app/rps/play', (req, res) => {
  res.status(200).send(rps(req.query.shot));
});

app.get('/app/rpsls/play', (req, res) => {
  res.status(200).send(rpsls(req.query.shot));
});

app.post('/app/rps/play/', (req, res) => {
  res.status(200).send(rps(req.body.shot));
});

app.post('/app/rpsls/play/', (req, res) => {
  res.status(200).send(rpsls(req.body.shot));
});

app.get('/app/rps/play/:shot', (req, res) => {
  res.status(200).send(rps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
  res.status(200).send(rpsls(req.params.shot));
});

app.get('*', (req, res) => {
  res.status(404).send('404 NOT FOUND');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
