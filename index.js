import express from 'express'
import bodyParser from 'body-parser'
import router from './Produtos/rotas.js'
import routter from './clientes/rotas.js'

const app = express()

app.use(bodyParser.json())

app.use('/produto',router)

app.use('/cliente',routter)


const porta = 8080

app.listen(porta, () => {
    console.log("API rodando na porta 8080")
})

export default app