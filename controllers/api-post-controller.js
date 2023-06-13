const Post = require('../models/post')
const createPath = require('../helpers/create-path')

const handleError = (res, error) => {
    res.status(500).send(error.message)
}

const getPost = (req, res) => {
    Post
        .findById(req.params.id)
        .then(post => res.status(200).json(post))
        .catch(e => handleError(res, e))
}

const editPost = (req, res) => {
    const { title, author, text } = req.body
    const { id } = req.params
    Post
        .findByIdAndUpdate(id, { title, author, text }, { new: true })
        .then((post) => res.status(200).json(post))
        .catch(e => handleError(res, e))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json(req.params.id))
        .catch(e => handleError(res, e))
}

const getPosts = (req, res) => {
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.status(200).json(posts))
        .catch(e => handleError(res, e))
}

const postPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text })

    post
        .save()
        .then((post) => res.status(200).json(post))
        .catch(e => handleError(res, e))
}

module.exports = {
    getPost,
    editPost,
    deletePost,
    getPosts,
    postPost,
}