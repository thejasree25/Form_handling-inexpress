import express from 'express'
import { userLogin, userSignup } from './controller.js'
const router=express.Router()
//two end points login and sign up
//if i create the middle ware here it will be applicable inside this midlle ware only router level middleware
router.get('/login',userLogin)
router.get('/signup',userSignup)
export default router;