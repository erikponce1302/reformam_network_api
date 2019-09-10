const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const User = require('../models/user')

app.post('/login',(req, resp) => {
    let body = req.body

    User.findOne({username: body.username}, (err, response) => {

        if (err){
            return resp.status(500).json({
                ok: false,
                err
            })
        }

        if(!response){
            return resp.status(400).json({
                ok: false,
                err:{
                    message: 'username no encontrado'
                }
            })
        }

        let token = jwt.sign({user:response},'reformam_network',{expiresIn: 60 * 60 * 24 * 3})

        resp.json({
            ok:true,
            data:response,
            token
        })
    })
})

module.exports = app