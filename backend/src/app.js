const express = require("express");
const app = express();
require("./db/conn");
const path = require("path");
const port = process.env.PORT || 3000;
//const  static_path = path.join(__) 

//app.use(express.static())
app.get("/",(req,res) => {
    res.send("Welcome to our wbsite ")
});
app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);

}) 