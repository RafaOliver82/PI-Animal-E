var express = require('express');
var router = express.Router();
const petsController = require("../controllers/petsController");
const servicosController = require("../controllers/servicosController");

router.get('/', (req, res) => {
    res.render("home");
})
router.get('/pets', petsController.index);

router.get('/produtoInterno', (req, res) => {
    res.render("produtoInterno")
});
router.get('/cadastro', (req, res) => {
    res.render("userCadLog")
});

router.get('/areadocliente', (req, res) => {
    res.render("userLogado")
});

router.get('/contatos', (req, res) => {
    res.render("home")
});

router.get('/produtos', (req, res) => {
    res.render("produtos")
});

module.exports = router;
