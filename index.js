import express from 'express'
import bodyParser from 'body-parser'
import router from './Produtos/rotas.js'
import routter from './clientes/rotas.js'
import row from './auth/rotas-auth.js'


import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

const app = express()

app.use(bodyParser.json())

app.use('/produto',router)

app.use('/cliente',routter)

app.use('/logar',row ) 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const porta = 8080

app.listen(porta, () => {
    console.log("API rodando na porta 8080")
})

export default app