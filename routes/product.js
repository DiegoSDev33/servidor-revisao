const express = require ("express")
const products = require("../repositories/products")
const mycards = require('../VIEWS/card')

const productRepo = require('../repositories/products')

const router = express.Router()


router.post('/add-product', (req, res) =>{
    res.send("finalizando")
})

router.post('edit-product', (req, res) =>{
    res.send("Todos os produtos")
})


router.post('/delete-products', (req, res) =>{
    res.send("finalizando")
})

router.get('/product', async (req, res) =>{
    
    const allProds = await productRepo.getAll();

   console.log( req.session.userId)


  res.send(mycards({content:allProds}))

})

router.get('bla', (req, res) => {

    res.send("OK")
})




module.exports = router