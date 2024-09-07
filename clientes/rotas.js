import controlador from "./controlador.js";
import express from 'express'

const routter = express.Router()


routter.get('', controlador.getlist)

routter.get('/id/', controlador.getId)

routter.post('/write', controlador.writeCliente)

routter.get('/delete/', controlador.deleteCliente)

routter.post('/update/', controlador.updateCliente)

export default routter