const express = require('express')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const app = express()
const Photo = require('../models/photo')
const { verificationToken } = require('../middelwares/autentication')

app.get('/photos', [verificationToken],(req, res) => {

    Photo.find({})
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

app.get('/photos/:id', [verificationToken],(req, res) => {

    let id = req.params.id

    Photo.find({id})
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

app.post('/photos', [verificationToken], function (req, res) {
    let body = req.body
    
    photos = new Photo({
        title: body.title,
        albumId: body.albumId,
        url: body.url,
        thumbnailUrl: body.thumbnailUrl
    })

    photo.save((err, response) => {
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