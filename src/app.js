import express from "express";
import cors from "cors";

const server = express()
server.use(cors())

// req -> recebe infos
// res -> envia infos

server.get("/tweets", (req, res) => {
  res.send("teste") 
})

server.listen(5000, () => {
    console.log('testando!')
})