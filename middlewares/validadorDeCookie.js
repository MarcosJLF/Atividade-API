import jwt  from 'jsonwebtoken';

function validadorDeCookie  (req,res, next) {
    
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({error: 'Unauthorized'})
    }
    try{

        const decodificado = jwt.verify(token, 'two')
        next();
    }catch{
        return res.status(401).send({mensagem:'não autorizado'})
    }


/* 
const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

*/
}

export default  validadorDeCookie