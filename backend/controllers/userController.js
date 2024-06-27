
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