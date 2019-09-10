const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let commentSchema = new Schema({
    postId:{
        type:{ type: Schema.Types.ObjectId, ref: "posts"},
        required: [true, 'The user is necessary']
    },
    email:{
        type:String,
        required:[true, 'The postId is necessary']
    },
    name:{
        type:String,
        required:[true, 'The name is necessary']
    },
    body:{
        type:String,
        required:[true, 'The body is necessary']
    }
})

commentSchema.plugin(uniqueValidator, {message: '{PATH} be unique'})

module.exports = mongoose.model('comments', commentSchema)