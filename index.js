import express from 'express'
import bodyParser from 'body-parser'
import router from './Produtos/rotas.js'

const app = express()

app.use(bodyParser.json())

app.use('/produto',router)


const porta = 8080

app.listen(porta, () => {
    console.log("API rodando na porta 8080")
})