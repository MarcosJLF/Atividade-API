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
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            return res.status(500).sed({erro:'Erro no servidor'})
        }
    })

    res.status(200).json({"Status":"Criado com sucesso"})

}

const deleteProduto = async (req,res) => {

    const _id = req.query.delete
    console.log(_id)

    const produto = db

    if(!_id){
        res.status(404).json({"Erro":"Digite um id valido"})
    
    }else{

        db.produtos = db.produtos.filter(product => product.id !== _id);
        fs.writeFile('./db.json', JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).send({ erro: 'Erro ao salvar o arquivo' });
            }
            res.status(200).json({ "Status": "Produto deletado com sucesso" });
        });

    }

    
}

export default {getlist,getId, writeProdutos, deleteProduto}