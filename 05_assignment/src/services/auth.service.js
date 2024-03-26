import User from "../models/user.schema.js";
import { ErrorWithStatus } from "../exceptions/error-with-status.exception.js";
import bcrypt from "bcryptjs";

export const register = async (name, email, password, confirmPassword) =>{
    const user = await User.findOne({email});
    if(user){
        throw new ErrorWithStatus("User already exists", 400);
    }
    password = await bcrypt.hash(password, 10);
    const newUser = new User({name, email, password, confirmPassword});
    await newUser.save();
    delete newUser.password;
    return newUser;
}
