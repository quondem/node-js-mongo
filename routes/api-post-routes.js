const express = require('express')
const router = express.Router()
const { getPost,
    editPost,
    deletePost,
    getPosts,
    postPost, } = require('../controllers/api-post-controller')

//API
router.get('/api/posts', getPosts);
router.post('/api/post', postPost);
router.get('/api/post/:id', getPost);
router.delete('/api/post/:id', deletePost);
router.put('/api/post/:id', editPost);

module.exports = router