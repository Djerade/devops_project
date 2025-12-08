const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
})
const  port = process.env.PORT || 5000;

app.listen(port,() => console.log('listening on port', port));