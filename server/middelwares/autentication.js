const jwt = require('jsonwebtoken')

let verificationToken = (req, res, next) => {
    let token = req.get('Authorization')
    
    jwt.verify( token, 'reformam_network', (err, decoded) => {
        if( err ){
            return res.status(401).json({
                ok:false,
                err:{
                    message: 'Error token no valido'
                }
            })
        }

        req.userLogged = decoded.user
        next()
    })
}

module.exports = {verificationToken}