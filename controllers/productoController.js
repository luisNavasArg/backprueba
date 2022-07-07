const Productos = require('../models/productos')
module.exports = {
    show:async(req,res)=>{
    try {
        const productos = await Productos.find();
        return res.status(200).send(productos);  
    } catch(err) {
        return res.status(500).send({message: 'Error fetcheado productoss', error: err})
    }
  },
  
  addProduct:async(req,res)=>{
    
        const prods = new Productos(req.body)
        await prods.save();
        return res.status(200).send(req.body)
  },
  updateProduct:async(req,res)=>{
    let prueba ='http://localhost:4000/productos/upProduct?id=62c4a64554a2fae34ca90463&code=tv32&price=3000&desc=Tv%20de%2032%20pulgadas&img=tv32.png'
    let data = await Productos.findById(req.params.id);
    console.log(req.params);
    return res.send(req.params)
  },
  showOne:(req,res)=>{
    Productos.findById(req.params.id)
    .then(data=>{return res.send(data)})
    .catch(err=>console.log(err))
  },
  processUpdate:async(req,res)=>{
    console.log(req.body);
    let data=req.query;
    let val ={
        code:data.code,
        price:data.price,
        desc:data.desc,
        img:data.img
    }
    let query={_id:data.id}
    await Productos.updateOne(query,val);
    return res.send(req.query)
  }

}