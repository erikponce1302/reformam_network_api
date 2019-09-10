const express = require('express')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const app = express()
const Album = require('../models/album')
const { verificationToken } = require('../middelwares/autentication')

app.get('/albums', [verificationToken],(req, res) => {

    Album.find({})
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

app.get('/albums/:id', [verificationToken],(req, res) => {

    let id = req.params.id

    Album.find({id})
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

app.post('/albums', [verificationToken], function (req, res) {
    let body = req.body
    
    album = new Album({
        userId: req.userLogged._id,
        title: body.title
    })

    album.save((err, response) => {
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