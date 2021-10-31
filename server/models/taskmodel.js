const mongoose=require('mongoose');
const schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
const Taskschema=new schema({
// tasknumber:{type:Number,required:true,trim:true},
// title:{type:String,required:true},
// type:{type:String,default:'feauture',enum:["feauture","sub task","enhancemnet","bug","task"]},
// description:{type:String},
// accepetance_criteria:{type:String},
// status:{type:String},
// start_date:{type:Date},
// due_date:{type:Date},
// original_estimate:{type:String},
// assignee:{type:String},
// reporter:{type:String}	
tasknumber:{type:Number,trim:true,unique:true},
title:{type:String},
type:{type:String,default:'feauture',enum:["feauture","sub task","enhancemnet","bug","task"]},
description:{type:String},
accepetance_criteria:{type:String},
status:{type:String},
start_date:{type:Date},
due_date:{type:Date},
original_estimate:{type:String},
assignee:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
reporter:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
comments:{type:Array,default:[]}





});
autoIncrement.initialize(mongoose.connection)
Taskschema.plugin(autoIncrement.plugin,{
    model:"TaskSchema",
    field:"tasknumber",
    startAt:101,
    incrementBy:1
})
const Task=mongoose.model('task',Taskschema);
//const deletethis=mongoose.model('delete',Taskschema);
module.exports=Task;
//module.exports=deletethis;