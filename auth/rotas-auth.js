import controlador from './controlador-auth.js'
import express from 'express'

const row = express.Router()

row.post('', controlador.login)

export default row

