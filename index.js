import express from 'express'
import bodyParser from 'body-parser'
import router from './Produtos/rotas.js'
import routter from './clientes/rotas.js'
<<<<<<< HEAD
import row from './auth/rotas-auth.js'


import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerDocument = YAML.load('./docs/documentacao.yaml')
=======
import rrouter from './login/rotas-login.js'
import cookieParser from "cookie-parser"
>>>>>>> e437afbf4ae4f07b7ff074e3f09ceb8eaea990dd

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produto',router)

app.use('/cliente',routter)

<<<<<<< HEAD
app.use('/logar',row ) 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
=======
app.use('/login', rrouter)
>>>>>>> e437afbf4ae4f07b7ff074e3f09ceb8eaea990dd

const porta = 8080

app.listen(porta, () => {
    console.log("API rodando na porta 8080")
})

export default app