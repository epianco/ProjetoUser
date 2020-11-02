// const Produto = require('../models/produto');

// const status = require('http-status');

// exports.Insert = (req, res, next) => {
//     const produto = req.body.produto;
//     const descricao = req.body.descricao;
//     const quantidade = req.body.quantidade;
//     const valor = req.body.valor;
//     const ativo = req.body.ativo;

//     Produto.create({
//         produto: produto,
//         descricao: descricao,
//         quantidade: quantidade,
//         valor: valor,
//         ativo: ativo,
//     })

//     .then(produto =>{
//         if(produto){
//             res.status(status.OK).send(produto);
//         }else{
//             res.status(status.NOT_FOUND).send();
//         }
//     })

//     .catch(error => next(error));
// };