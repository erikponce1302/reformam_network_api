process.env.NODE_ENV = process.env.NODE_ENV || 'local'

if (process.env.NODE_ENV === 'local'){
//===========================================
// Entorno Local
//===========================================
    process.env.PORT = 3000
    process.env.URLDB = 'mongodb://localhost:27017/reformam_network'
    process.env.CADUCIDAD_TOKEN = 60 * 60 * 3
    process.env.SEED = 'reforman_network'
} else {
//===========================================
// Entorno PrepProd
//===========================================
    process.env.PORT = process.env.PORT
    process.env.URLDB = 'mongodb+srv://reformam_network:reformam_network@cluster0-jcele.mongodb.net/reformam_network'
    process.env.CADUCIDAD_TOKEN = 60 * 60 * 3
    process.env.SEED = process.env.SEED
}
//===========================================
// Entorno Prod
//===========================================
