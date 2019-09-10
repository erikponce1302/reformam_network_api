const express = require('express')
const bcrypt = require('bcrypt')
const _ = require('underscore')
const app = express()
const User = require('../models/user')
const { verificationToken } = require('../middelwares/autentication')

app.get('/users', [verificationToken], (req, res) => {

    User.find({})
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

app.get('/users/:id', [verificationToken], (req, res) => {

    let id = req.params.id

    User.find({id})
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

app.post('/users', function (req, res) {
    let body = req.body
    
    user = new User({
        name: body.name,
        username: body.username,
        email: body.email,
        address: {
            street: body.street,
            suite: body.suite,
            city: body.city,
            zipcode: body.zipcode,
            geo: {
                lat: body.lat,
                lng: body.lng
            }
        },
        phone: body.phone,
        website: body.website,
        company: {
            name:body.name_company,
            catchPhrase: body.catchPhrase,
            bs: body.bs
        }
    })

    user.save((err, response) => {
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