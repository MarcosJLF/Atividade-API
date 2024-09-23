import db from '../clientes/db-clientes.json' assert {type:"json"}
import fs from 'fs'

const login = async (req, res) => {

    const data = req.body

    console.log(data)

    try{
        if(!data.nome || !data.senha){
            res.status(200).json({"Erro":"Dados não inseridos"})
        } else {
            const dados = db.clientes
            const login = dados.find(dados => dados.nome == data.nome)
            res.status(200).json({"Status":"logado"})
        }
        /// const foundFruit = fruits.find(fruit => fruit.name === 'Banana');
    }catch(e) {
        res.status(404).json({e})
    }


}

export default {login}