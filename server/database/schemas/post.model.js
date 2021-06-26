const mongoose = require('mongoose');

const {Schema} = mongoose;
mongoose.Promise = global.Promise;

const postSchema = Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    description:{
        type:String
    }

})

let Post;
function modelAreadyDeclared () {
    try {
        mongoose.model('post')  // it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    Post = mongoose.model('post', postSchema)
}else{
    Post = mongoose.model('post')
}

module.exports = Post ;