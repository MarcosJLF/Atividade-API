import db  from './db.json' assert {type : "json"}
import fs from 'fs'

const hello = async (req,res) => {
    res.status(200).json({"Hello":"World"})
}

const write = async (req,res) => {

    const dados = req.body

    db.produtos.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err){
            return res.status(500).sed({erro:'Erro no servidor'})
        }
    })

    res.status(200).json({"Status":"Foi"})
    /**
    databaseJson.produtos.push(dados)
    fs.writeFile('./db.json',JSON.stringify(databaseJson), (err) => {
        if(err){
            return res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(200).json({"Status":"Produto cadastro"})
    console.log("oi")
} 

     */



}

export default {hello,write}