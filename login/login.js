import db from '../clientes/db-clientes.json' assert {type : "json"}
import jwt from 'jsonwebtoken'



const login = async (req, res) => {

    const data = req.body

    const clientes = db.clientes

    const email = clientes.find(clientes => clientes.Email === data.Email);

    const senha = clientes.find(clientes => clientes.senha === data.senha);
    let a = false

    if(!senha || !email){
        res.status(404).json({"Status":"Not found"})
    }else{
        a = true
    }

   if(a == true){

    const payload = {
        email:data.email,
        senha:data.senha
    };

    const secretKey = 'two-key';

    const token = jwt.sign(payload, secretKey, { expiresIn: 1000});

    res.cookie("token", token,{
        httpOnly: true,
        maxAge: 3600000
    } )
    res.status(200).json({auth:true,token:token})



   }

   /*
   const jwt = require('jsonwebtoken');

const payload = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com'
};
const secretKey = 'your-secret-key';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log(token);
   */
    // console.log(data.id)
}


export default {login}