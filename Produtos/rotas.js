import controlador from "./controlador.js";
import express from 'express'

const router = express.Router()


router.get('', controlador.getlist)

router.get('/id/',controlador.getId)

router.post('/write', controlador.writeProdutos)

router.get('/delete/:', controlador.deleteProduto)

router.post('/update/', controlador.update)

export default router
