const express = require('express')
const router = express.Router()
const createPath = require('../helpers/create-path')
const { getPost,
    getEditPost,
    putEditPost,
    deletePost,
    getPosts,
    postPost,
    getAddPost } = require('../controllers/post-controller')

router.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
});

router.get('/posts/:id', getPost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', putEditPost);
router.delete('/posts/:id', deletePost);
router.get('/posts', getPosts);
router.post('/add-post', postPost);
router.get('/add-post', getAddPost);

module.exports = router