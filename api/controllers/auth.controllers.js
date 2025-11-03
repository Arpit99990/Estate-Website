import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

export const register = async (req,res)=>{
    const {username,email,password} = req.body;

    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });
};

export const login = (req,res)=>{
    
};

export const logout = (req,res)=>{
    
};