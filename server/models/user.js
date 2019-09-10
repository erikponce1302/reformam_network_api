const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema

let userSchema = new Schema({
    name:{
        type:String,
        required: [true, 'The name is necessary']
    },
    email:{
        type:String,
        unique: true,
        required:[true, 'The email is necessary']
    },
    username:{
        type:String,
        unique: true,
        required:[true, 'The username is necessary']
    },
    address:{
        street:{type:String,require:[true, 'The street is necessary']},
        suite:{type:String,require:[true, 'The suite is necessary']},
        city:{type:String,require:[true, 'The city is necessary']},
        zipcode:{type:String,require:[true, 'The zipcode is necessary']},
        geo:{
            lat:{type:Number,require:[true, 'The latitud is necessary']},
            lng:{type:Number,require:[true, 'The longitud is necessary']}
        }
    },
    phone:{
        type:String,
        required:[true, 'The phone is necessary']
    },
    website:{
        type:String,
        required: [true, 'The website is necessary']
    },
    company:{
        name:{type:String,require:[true, 'The name company is necessary']},
        catchPhrase:{type:String,require:[true, 'The catchPhrase is necessary']},
        bs:{type:String,require:[true, 'The bs is necessary']}
    }
})


userSchema.plugin(uniqueValidator, {message: '{PATH} be unique'})

module.exports = mongoose.model('users', userSchema)