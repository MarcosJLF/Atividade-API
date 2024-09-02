import db  from './db.json' assert {type : "json"}
import fs from 'fs'

const getlist = async (req,res) => {
    res.status(200).json({db})
}

const getId = async (req,res) => {

    const _id = req.query.id

    const produto = db.produtos

    if(!_id){
        res.status(404).json({"Erro":"Digite um id valido"})
    }else{
        const result = produto.find(produto => produto.id == _id)
        res.status(200).json({result})
    }
}

const writeProdutos = async (req,res) => {

    const dados = req.body
    
    db.produtos.push(dados)
    fs.writeFile('./Produtos/db.json', JSON.stringify(db), (err) => {
        if(err){
            return res.status(500).sed({erro:'Erro no servidor'})
        }
    })

    res.status(200).json({"Status":"Criado com sucesso"})

}

const deleteProduto = async (req,res) => {

    const _id = req.query.delete
    console.log(_id)

    const id = _id

    const produto = db


    const index = db.produtos.find(produto => produto.id === id);
    
        
    if (index !== -1) {
        db.produtos.splice(index, 1);
         res.status(200).json({ message: 'Produto deletado com sucesso' });
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }

}


export default {getlist,getId, writeProdutos, deleteProduto}