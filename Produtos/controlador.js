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

    const dados = req.body;

    if (!dados) {
      return res.status(400).json({ error: 'Dados do produto não fornecidos' });
    }
    
    const newProduct = {
      id: db.produtos.length + 1, 
      ...dados};
    
    db.produtos.push(newProduct);
    
    fs.writeFile('./Produtos/db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        //console.error(err);
        return res.status(500).json({ error: 'Erro no servidor' });
      } else {
        //console.log('Produto criado com sucesso!');
      }
    });
    
    res.status(201).json({ status: 'Criado com sucesso' });

}

const deleteProduto = async (req,res) => {

    const _id = req.query.delete;

    if (!_id) {
    return res.status(400).json({ message: 'ID não fornecido' });
    }

    const index = db.produtos.findIndex(obj => obj.id == _id);

    //console.log(`ID to delete: ${_id}`);

    if (index !== -1) {
    const deletedProduct = db.produtos.splice(index, 1);

    //console.log(`Deleted product: ${JSON.stringify(deletedProduct)}`);

    const updatedData = JSON.stringify(db, null, 2);
    fs.writeFile('./produtos/db.json', updatedData, (err) => {
        if (err) {
        //console.error(err);
        } else {
        //console.log('Database updated successfully!');
        }
    });

    return res.status(200).json({ message: 'Produto deletado com sucesso' });
    } else {
    return res.status(404).json({ message: 'Produto não encontrado' });
    }
}


const update = async (req, res) => {
    const _id = req.query.id;
    const dados = req.body;

    if (!_id) {
    return res.status(400).json({ error: 'ID do produto não fornecido' });
    }

    if (!dados) {
    return res.status(400).json({ error: 'Dados do produto não fornecidos' });
    }

    const index = db.produtos.findIndex(obj => obj.id == _id);

    if (index === -1) {
    return res.status(404).json({ error: 'Produto não encontrado' });
    }

    db.produtos[index] = { ...db.produtos[index], ...dados };

    fs.writeFile('./Produtos/db.json', JSON.stringify(db, null, 2), (err) => {
    if (err) {
        //console.error(err);
        return res.status(500).json({ error: 'Erro no servidor' });
    } else {
        //console.log('Produto atualizado com sucesso!');
    }
});

res.status(200).json({ status: 'Atualizado com sucesso' });

}


export default {getlist,getId, writeProdutos, deleteProduto, update}