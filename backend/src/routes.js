const express = require('express');
const multer = require('multer');
const PostContoller = require('./controllers/PostController');
const uploadCOnfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadCOnfig);

routes.post('/posts', upload.single('image'), PostContoller.store);

module.exports = routes;