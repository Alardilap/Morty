
const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan= require("morgan");
const cors= require("cors")


app.use(cors());
app.use("/rickandmorty",router);
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, (res) => {
    
  console.log('Server raised in port: ' + PORT);
});



// app.get("/api", function (req, res) {
//     var obj = {
//       nombre: "prueba",
//       framework: "express",
//       ventaja: "serializó por nosotros",
//     };
//     res.json(obj);
//   }).listen(PORT)

// const getCharDetail= require("./controllers/getCharDetail");
// const getCharById= require("./controllers/getCharById");
// const http = require("http");


//  http.createServer((req,res)=>{
//       res.setHeader('Access-Control-Allow-Origin', '*')
//       console.log("estoy en ruta")
//       const id= req.url.split("/").at(-1)

// if(req.url.includes("onsearch")){
//     getCharById(res,id)
// }
// console.log("estoy en ruta 1")
// if(req.url.includes("detail")){
//  getCharDetail(res,id)
// }
// console.log("estoy en ruta 2")
//  }).listen(3001,"localhost")

 



