const Post = require('../database/schemas/post.model')

exports.findAllPost = () => {
    return Post.find();
}
exports.createPost = (body)=>{
    const newPost = new Post(body);
    return newPost.save();
}