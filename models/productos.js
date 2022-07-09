const mongoose = require('mongoose');
const productos = new mongoose.Schema ({
    code:{
        type: String,
        trim:true,
        required:true
    },
    price:{
        type: Number,
        trim:true,
        required:true
    },
    desc:{
        type: String,
        trim:true,
        required:true
    },
    img:{
        type: String,
        trim:true,
        required:true
    }
    });
module.exports = mongoose.model('productos',productos)//team nombre de la colección
