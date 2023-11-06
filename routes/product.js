const express = require ("express")

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

router.get('/product', (req, res) =>{
    res.send("Todos os produtos")
})





module.exports = router