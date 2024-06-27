
import User from '../models/userModel.js'

export const createUser = async (req,res, next) => {
    try{
        const userData = new User(req.body)
        if(!userData){
            return res.status(404).json({message:"no data sended"})
        }
        await userData.save()
        res.status(200).json({message:"successfully"})
    }catch(err){
        next(err)
    }

}

export const getUsers = async (req,res, next) => {
    try{
        const userData =await User.find()
        if(!userData){
            return res.status(404).json({message:"no user yet"})
        }
       
        res.status(200).json(userData)
    }catch(err){
        next(err)
    }

}


export const deleteUser = async (req,res, next) => {
    try{
        const id= req.params.id
        const userData =await User.findById(id)
        if(!userData){
            return res.status(404).json({message:" user doesn't exist"})
        }
       
        await User.findByIdAndDelete(id)
    }catch(err){
        next(err)
    }

}

