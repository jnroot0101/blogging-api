const Post = require("../models/post");

const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
}

const getPost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findById(id);

        if (!post) {
            res.status(404).json({message: "Post not found"});
        }

        res.status(200).json(post);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const updatePost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body);

        if (!post) {
            res.status(404).json({message: "Post not found"});
        }

        const updatedPost = await Post.findById(post.id);

        res.status(201).json(updatedPost);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            res.status(404).json({message: "Post not found"});
        }

        res.status(204).json({message: "Post deleted successfully"});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}