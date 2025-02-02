const errorHandler= require("../utils/error")
const bcryptjs=require('bcryptjs')
const User=require('../models/user.model')

exports.updateUser=async(req,res,next)=>
{
    if(req.user.id!=req.params.userId)
    {
        return next(errorHandler(403,'You are not allow to update this user'));
    }

    if(req.body.password)
    {
     if(req.body.password.length<6)
        {
            return next(errorHandler(400,'Password must be atleast 6 characters'))
        }
        req.body.password=bcryptjs.hashSync(req.body.password,10)
    }

if(req.body.username)
    {

        if(!req.body.username.match(/^[a-zA-Z0-9]+$/))
        {
            return next(errorHandler(400,'Username can only contain letters'));
        }
}
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture,
                    password:req.body.password,
                }
            },{new:true});
            const{password,...rest}=updatedUser._doc;
            res.status(200).json(rest);
}        
        catch(error)
        {
            next(error)
        }
}

exports.deleteUser=async(req,res,next)=>{
        if(!req.user.isAdmin && req.user.id !==req.params.userId)
        {
            return next(errorHandler(403,'You are not allow to delete this user')) 
        }
        try{
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json('User has been deleted')
        }
        catch(error)
        {
        return res.status(404).json({
            success:false,
            message:"Error in delete Api"
        })
        }
}

exports.signout=async(req,res,next)=>{
    try{
        res.clearCookie('access_token').status(200).json('User has been signed out')
    }
    catch(error)
    {
        next(error)
    }
}

exports.getusers=async(req,res,next)=>{

  if(!req.user.isAdmin)
  {
    return next(errorHandler(403,'You are not allowed to see all users'))
  }
  
    try{
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const sortDirection=req.query.sort === 'asc' ? 1 : -1

    const users=await User.find()
    .sort({createdAt:sortDirection})
    .skip(startIndex)
    .limit(limit)

    const usersWithoutPassword = users.map((user)=>{
    const{password,...rest}=user._doc;
    return rest;
    })

    const totalUsers=await User.countDocuments()

    const now=new Date()

    const oneMonthAgo=new Date(
        now.getFullYear(),
        now.getMonth()-1,
        now.getDate()
    )

    const lastMonthUsers= await User.countDocuments({
        createdAt:{$gte:oneMonthAgo}
    })

    res.status(200).json({
        users:usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
    })

    }
    catch(error)
    {
        next(error)
    }
  }

  exports.getUser = async(req,res,next)=>
  {
   try{
    const user = await User.findById(req.params.userId)
    if(!user)
    {
     return next(errorHandler(404,'User not found'))
    }
    const{password,...rest}=user._doc;
    res.status(200).json(rest);
   }
   catch(error)
   {
    next(error)
   }
  }

