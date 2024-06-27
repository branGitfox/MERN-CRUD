import express from 'express'
import {createUser, getUsers, deleteUser} from '../controllers/userController.js'
const route = express.Router()

route.post('/createUser', createUser)
route.get('/getUsers', getUsers)
route.delete('/deleteUser/:id', deleteUser)

export default route