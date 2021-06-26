const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postSchema = schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },

    description:{
        type:String
    }

})

const post = mongoose.model('post', postSchema)
module.exports = post;