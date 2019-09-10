const express = require('express')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const app = express()
const Post = require('../models/post')
const { verificationToken } = require('../middelwares/autentication')

app.get('/posts', [verificationToken],(req, res) => {

    Post.find({})
        .exec((err, response) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                data: response
            })
        })
})

app.get('/posts/:id', [verificationToken],(req, res) => {

    let id = req.params.id

    Post.find({id})
        .exec((err, response) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                data: response
            })
        })
})

app.post('/posts', [verificationToken], function (req, res) {
    let body = req.body
    
    post = new Post({
        userId: req.userLogged._id,
        title: body.title,
        body: body.body
    })

    post.save((err, response) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            data: response
        })
    })

})

module.exports = app