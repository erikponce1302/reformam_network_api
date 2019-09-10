const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let postSchema = new Schema({
    userId:{ type: Schema.Types.ObjectId, ref: 'users' },
    title:{
        type:String,
        required:[true, 'The title is necessary']
    },
    body:{
        type:String,
        required:[true, 'The body is necessary']
    }
})

postSchema.plugin(uniqueValidator, {message: '{PATH} be unique'})

module.exports = mongoose.model('posts', postSchema)