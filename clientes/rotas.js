import controlador from "./controlador.js";
import express from 'express'

const routter = express.Router()


routter.get('', controlador.getlogin)

routter.post('/email', controlador.getEmail)

routter.post('/new', controlador.writeCliente)

routter.get('/delete/:', controlador.deleteCliente)


export default routter