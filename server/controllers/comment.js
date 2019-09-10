const express = require('express')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const app = express()
const Comment = require('../models/comment')
const { verificationToken } = require('../middelwares/autentication')

app.get('/comments', [verificationToken], (req, res) => {

    Comment.find({})
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

app.get('/comments/:id', [verificationToken], (req, res) => {

    let id = req.params.id

    Comment.find({id})
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

app.post('/comments', [verificationToken], function (req, res) {
    let body = req.body
    
    comment = new Comment({
        postId: body.postId,
        email: body.email,
        name: body.name,
        body: body.body
    })

    comment.save((err, response) => {
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