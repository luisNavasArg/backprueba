const mongoose = require('mongoose');
const datos = new mongoose.Schema ({
   
    user:{
        type: String,
        trim:true
    },

    nombre:{
        type: String,
        trim:true
    },
    apellido:{
        type: String,
        trim:true
    },
    mail:{
        type: String,
        trim:true
    },
    pass:{
        type: String,
        trim:true
    }

});
//establecemos el esquema y el modelo a la colección datos
module.exports = mongoose.model('datos',datos)
