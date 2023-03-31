 const e = require("express");
const mongoose = require("mongoose");

const er = mongoose.connect("mongodb://localhost:27017//firstdatabase");
console.log(er);
// mongoose.connect("mongodb://localhost:27017/firstdatabase", { 

//     useNewurlParser:true
//     //useUnifiedTopology:true,
//     //useCreateIndex:true,
// }).then(() => {
//     console.log('connection Sucessful');
// }).catch((e) => {
//      console.log('Connection Failed');
// })
// console.log(e);