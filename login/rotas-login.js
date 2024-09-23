import routter from '../clientes/rotas.js'
import login from './login.js'
import express from 'express'


const rrouter = express.Router()


rrouter.post('', login.login)


export default rrouter