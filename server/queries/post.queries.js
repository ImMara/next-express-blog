const Post = require('../database/schemas/post.model')

exports.findAllPost = () => {
    return Post.find();
}