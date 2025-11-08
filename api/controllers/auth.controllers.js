import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

export const register = async (req,res)=>{
    const {username,email,password} = req.body;

    try{
    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        },
    });

    console.log(newUser);

    res.status(201).json({message: "User created successfully"});

    }catch(err) {
        console.log(err);
        res.status(500).json({message: "Failed to create user!"});
    }
};

export const login = (req,res)=>{
    const { username, password} = req.body;

    try{
    // check if the user exists

    //check if the password is correct

    //generate cookie token and send it to user
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to login!"})
        
    }
};

export const logout = (req,res)=>{
    
};