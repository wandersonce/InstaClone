const express = require('express');
const multer = require('multer');
const PostContoller = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();

routes.post('/posts', upload.single('image'), PostContoller.store);

module.exports = routes;