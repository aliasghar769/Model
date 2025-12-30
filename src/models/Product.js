import mongoose from "mongoose";

const porductSchema = new mongoose.Schema({

title : {type : String, required :true , trim : true},
description :{type :String , required : true , trim : true},
price : {type : Number , required: true , trim : true},
image :{type : String , required : true },


}, {timestamps : true});

export default mongoose.models.Product|| mongoose.model("Product", porductSchema)
