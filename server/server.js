import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import apiHandler from "./api";

const server = express();
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../dist')));
server.use('/api', apiHandler);

export default server;