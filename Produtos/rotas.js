import controlador from "./controlador.js";
import express from 'express'
import validadorDeCookie from '../middlewares/validadorDeCookie.js'

const router = express.Router()


router.get('', validadorDeCookie, controlador.getlist)

router.get('/id/',validadorDeCookie, controlador.getId)

router.post('/write',validadorDeCookie, controlador.writeProdutos)

router.get('/delete/:',validadorDeCookie, controlador.deleteProduto)

router.post('/update/',validadorDeCookie, controlador.update)

export default router
