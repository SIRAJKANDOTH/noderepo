const Task=require('../models/taskmodel');
const { roles } = require('../roles');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.addtask=async(req,res,next)=>{
    try{    console.log(req.body);
        const{tasknumber,title,type,description,accepetance_criteria,status,start_date,due_date,original_estimate,assignee,reporter}=req.body;
        const newtask=new Task({tasknumber,title,type:type||"feauture",description,accepetance_criteria,status,start_date,due_date,original_estimate,assignee,reporter});
        await newtask.save();
        res.json({
            data:newtask,
            messsage:"task added succesfully"
        })
    }
    catch(error){
        next(error)
    }

}