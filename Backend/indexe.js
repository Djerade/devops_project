const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const { ApolloServer, gql } = require('apollo-server-express');
const { v4: uuidv4 } = require('uuid');

const app = express();

// MongoDB URI
const mongoURI = 'mongodb://localhost:27017/fileStorage';

app.get("/", (req, res) => {
  res.send("Hello World!");
})
const  port = 5000;

app.listen(port,() => console.log('listening on port', port));