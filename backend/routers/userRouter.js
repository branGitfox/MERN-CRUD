import express from 'express'
import {createUser, getUsers, deleteUser, updateUser,getUserInfo} from '../controllers/userController.js'

const route = express.Router()

route.post('/createUser', createUser)
route.get('/getUsers', getUsers)
route.get('/getOne/:id', getUserInfo)
route.delete('/deleteUser/:id', deleteUser)
route.put('/updateUser/:id', updateUser)

export default route