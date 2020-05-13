const express = require('express');
const multer = require('multer');
const PostContoller = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const uploadCOnfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadCOnfig);

routes.get('/posts', PostContoller.index);
routes.post('/posts', upload.single('image'), PostContoller.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;