const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    category: String,
    tags: [String],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;