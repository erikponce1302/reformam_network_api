const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let photoSchema = new Schema({
    albumId:{
        type:{ type: Schema.Types.ObjectId, ref: "albums"},
        required: [true, 'The album is necessary']
    },
    title:{
        type:String,
        required:[true, 'The title is necessary']
    },
    url:{
        type:String,
        required:[true, 'The url is necessary']
    },
    thumbnailUrl:{
        type:String,
        required:[true, 'The thumbnailUrl is necessary']
    }
})

photoSchema.plugin(uniqueValidator, {message: '{PATH} be unique'})

module.exports = mongoose.model('photos', photoSchema)