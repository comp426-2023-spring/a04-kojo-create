#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {playRps as PlayRps, playRpsls as PlayRpsls} from './lib/rpsls.js';

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

app.get('/app/rps', (req, res) => {
	res.status(200).send(PlayRps());
});

app.get('/app/rpsls', (req, res) => {
	res.status(200).send(PlayRpsls());
});


app.get('/app/rps/play', (req, res) => {
	res.status(200).send(PlayRps(req.query.shot));
});

app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(PlayRpsls(req.query.shot));
});



app.post('/app/rps/play/', (req, res) => {
	res.status(200).send(PlayRps(req.body.shot));
});

app.post('/app/rpsls/play/', (req, res) => {
	res.status(200).send(PlayRpsls(req.body.shot));
});


app.get('/app/rps/play/:shot', (req, res) => {
	res.status(200).send(PlayRps(req.params.shot));
});

app.get('/app/rpsls/play/:shot', (req, res) => {
	res.status(200).send(PlayRpsls(req.params.shot));
});


app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
	console.log(`Runnning on port ${port}`);
});