
const mongoose = require('mongoose');
const { Schema } = mongoose;
 //creating a database
  const menSchema = new Schema({
     ranking:{
         type:Number,
         required:true,
         unique:true
     },
     name:{
        type:String,
        required:true,
        trim:true
     },
     dob:{
         type:Date,
         required:true,
         trim:true
     },
     country:{
         type:String,
         required:true,
         trim:true


     },
     score:{
         type:Number,
         required:true,
         trim:true
     },
     event:{
         type:String,
         default:"100m"
     }
    
  });


  //creating a collection
  const MensRanking = mongoose.model('MenRanking', menSchema);
  module.exports=MensRanking;