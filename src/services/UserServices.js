import { Error } from 'mongoose';
import userModel from '../db/models/UserModels';


export const findUser = async ()=>{
    try {
        const users = await userModel.find()
        return users
    } catch (error) {
        return Error
    }
}

export const findUserById = async (id)=>{
    try {
        const user = await userModel.findById(id)
        return user
    } catch (error) {
        return Error
    }
}

export const findUserByEmail = async (email)=>{
    try {
        const user = await userModel.findOne({email})
        return user
    } catch (error) {
        return Error
    }
        
    }

export const createUser = async (user)=>{
    try {
        const newUser = await userModel.create(user)
        return newUser
    } catch (error) {
        return Error
    }
}