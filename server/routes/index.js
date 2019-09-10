const express = require('express')
const app = express()

app.use(require('../controllers/login'))
app.use(require('../controllers/user'))
app.use(require('../controllers/post'))
app.use(require('../controllers/comment'))
app.use(require('../controllers/album'))
app.use(require('../controllers/photo'))

module.exports = app