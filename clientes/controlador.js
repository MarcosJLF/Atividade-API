import db  from './db-login.json' assert {type : "json"}
import fs from 'fs'


const getlogin = async (req,res) => {
    res.status(200).json({db})
}


const getEmail = async (req,res) => {

    const naame = req.body

    const produto = db.login

    const name = naame.nome

    if(!name){
        res.status(404).json({"Erro":"Digite um nome valido"})
    }else{
        const result = produto.find(produto => produto.nome == name)
        res.status(200).json({"Status":"funcionando"})
    }
}

const writeCliente = async (req,res) => {

    const dados = req.body
    
    db.login.push(dados)
    fs.writeFile('./Produtos/cliente/db-login.json', JSON.stringify(db), (err) => {
        if(err){
            return res.status(500).sed({erro:'Erro no servidor'})
        }
    })

    res.status(200).json({"Status":"Criado com sucesso"})

}

const deleteCliente = async (req,res) => {

    const _id = req.query.delete
    console.log(_id)

    const id = _id

    const produto = db.login

    const index = db.login.find(produto => produto.id == id);
    
        
    if (index !== -1) {
        db.login.splice(index, 1);
         res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }

}

export default {getlogin,getEmail,writeCliente,deleteCliente}