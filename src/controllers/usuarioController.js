// Define a utilização do model usuario e a dependência http-status
const Usuario = require('../models/usuario');

const status = require('http-status');

//cria o metodo Insert, obtendo os dados da request 
exports.Insert = (req,res,next) =>{
    const nome = req.body.nome;
    const salario = req.body.salario;
    const dataNascimento = req.body.dataNascimento;
    const ativo = req.body.ativo;

    //Popula cada um dos campos do model  com os campos recebido na request

    Usuario.create({
        nome: nome,
        salario: salario,
        dataNascimento: dataNascimento,
        ativo: ativo,
    })

    //then = registra o que queremos  que aconteça quando a promise for resolvida
    .then(usuario =>{
        if(usuario) {
            res.status(status.OK).send(usuario);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    
    //catch = registra o que queremos que aconteça quando a Promise falhar
    .catch(error => next(error));
};