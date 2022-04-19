var express = require('express');
var router = express.Router();
const petsController = require("../controllers/petsController");
// const servicosController = require("../controllers/servicosController");
// const userCadLogController = require("../controllers/userLoginController")

router.get('/', (req, res) => {
    res.render("home");
})
router.get('/pets', petsController.index);

router.get('/produtoInterno', (req, res) => {
    res.render("produtoInterno")
});

router.get('/contatos', (req, res) => {
    res.render("home")
});

router.get('/userCad', (req, res) => {
    res.render("userCad")


});

router.get('/userLogin', (req, res) => {
    res.render("userLogin")

    
});

router.get('/userLogado', (req, res) => {
    res.render("userLogado")
});

module.exports = router;
