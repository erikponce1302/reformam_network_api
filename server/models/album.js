const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let albumSchema = new Schema({
    userId:{
        type:{ type: Schema.Types.ObjectId, ref: "users"},
        required: [true, 'The user is necessary']
    },
    title:{
        type:String,
        required:[true, 'The title is necessary']
    }
})

albumSchema.plugin(uniqueValidator, {message: '{PATH} be unique'})

module.exports = mongoose.model('albums', albumSchema)