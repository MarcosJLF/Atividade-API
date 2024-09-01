import controlador from "./controlador.js";
import express from 'express'

const router = express.Router()


router.get('/', controlador.hello)

router.post('/write', controlador.write)


export default router
