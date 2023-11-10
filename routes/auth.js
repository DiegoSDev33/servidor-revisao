const express = require ("express")

const router = express.Router()

const userRepo = require('../repositories/user')
const prodRepo = require('../repositories/products')

const screenSignup = require('../VIEWS/signup')
const screenLogin = require('../VIEWS/login')
const screenLayout = require('../VIEWS/prod-layout')



router.post('/login',async (req, res) => {

    const user = await userRepo.getOneBy({email, password})
    req.session.userId = user.id
    if(user){
        res.send("usuario encotrado")
    }else{
        res.send("usuario nao encontrado")
    }
})

router.get("/sair", (req, res) => {
    req.session = null;
    res.send("sessao finalizada ...")
})

router.post('/add-login', (req, res) => {
    //devolver uma tela com produtos feitos
    // verificar user
    res.send("finalizando")
})

router.get('/login', (req, res) => {
    res.send(screenLogin())
})



router.post('/add-signup', (req, res) => {

  
    userRepo.create(req.body)


    /* PEGAR OS DADOS QUE VEM DE JAON (EMAIL, NOME E SENHA) 
    E SALVAR EM UM ARQUIVO JSON*/

    /*1 - Importar fs
   2 - fazer o metodo create - criar o user */




    res.send("cadastro criado")
})


router.get('/signup', (req, res) => {
    res.send(screenSignup())
})

router.post('/prod-layout', (req, res) => {

  
    prodRepo.create(req.body)

    res.send("cadastro criado")
})



module.exports = router