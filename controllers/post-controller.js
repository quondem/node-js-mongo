const Post = require('../models/post')
const createPath = require('../helpers/create-path')

const getPost = (req, res) => {
    const title = 'Post';
    Post
        .findById(req.params.id)
        .then(post => {
            res.render(createPath('post'), { title, post });
        })
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const getEditPost = (req, res) => {
    const title = 'Edit';
    Post
        .findById(req.params.id)
        .then(post => {
            res.render(createPath('edit-post'), { title, post });
        })
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const putEditPost = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(() => {
            res.redirect(`/posts/${id}`)
        })
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200)
        })
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const getPosts = (req, res) => {
    const title = 'Posts';
    Post
        .find()
        .sort({ createdAt: -1 })
        .then(posts => {
            res.render(createPath('posts'), { title, posts });
        })
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const postPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text })

    post
        .save()
        .then((result) => res.redirect('/posts'))
        .catch(e => {
            console.log(e)
            res.render(createPath('error'), { title: 'Error' })
        })
}

const getAddPost = (req, res) => {
    const title = 'Add Post';
    res.render(createPath('add-post'), { title });
}

module.exports = {
    getPost,
    getEditPost,
    putEditPost,
    deletePost,
    getPosts,
    postPost,
    getAddPost
}