import {Router} from 'express'
import {Empresa, Usuario} from '../models/index.js'
const router = Router()

router.get('/users/new', (req, res) => {
    res.json({
        success: true,
        data: new Usuario()
    })
})
router.get('/companies/new', (req, res) => {
    res.json({
        success: true,
        data: new Empresa()
    })
})
router.get('/user/company', (req, res) => {
    res.json({
        success: true,
        data: {
            user: new Usuario(),
            company: new Empresa()
        }
    })
})

export default router