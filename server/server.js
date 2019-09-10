const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')

require('./config/config')

//configuracion para el login y las urls 
const corsOptions = {
  "methods":["POST","GET","PUT","DELETE"],
  "preflightMaxAge": 5, // Optional
  "origins": [ "http://localhost:3000" ],
  "allowHeaders": [ "Authorization", "X-Requested-With", "Content-Type", "Accept", "Origin", "authorization", "content-type" ],
  "credentials": true
};

app.use( cors(corsOptions) );
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

app.use(bodyParse.urlencoded({extende:false}))
app.use(bodyParse.json())

app.use(require('./routes/index'))

mongoose.connect(process.env.URLDB, { useFindAndModify: false }, (err) => {
  if(err) throw err
  console.log('Se conecto a la base de datos')
  
});


app.listen(process.env.PORT , () => {
  console.log(`Escuchando al servidor en el puerto 3000`)
})