
const express=require('express')
const router=express.Router()
const {jwtMiddleware}=require('./Athorization.Routes')



const {getAllUsers, getOneIdUser,deleteUser}=require('./Function.routes')

router.get('/',jwtMiddleware,getAllUsers)


router.get('/:id',jwtMiddleware,getOneIdUser)

router.delete('/:id',jwtMiddleware,deleteUser)

module.exports=router