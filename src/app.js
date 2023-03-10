import express from "express";
import cors from "cors";

const server = express()
server.use(express.json())
server.use(cors())


const PORT = 5000;
const users = []; // array user
const tweets = []; // array tweets

// req -> recebe infos
// res -> envia infos

server.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body; // receber pelo body da request o username e o avatar
  const userData = {username, avatar};
  users.push(userData); // salvar o usuário na array de usuarios
  console.log(users); 
  res.status(201).send("OK"); //mensagem de ok
})

server.post("/tweets", (req, res) => {
  const tweet  = req.body;
  
  const user = users.find(user => user.username === tweet.username);
  console.log(user)

  if(user) {
    tweet.avatar = user.avatar;
    tweets.push(tweet);
    res.status(201).send("OK")
    }else {
      return res.status(401).send("UNAUTHORIZED");
    }
   
  })

server.get("/tweets", (req, res) => {
  if (tweets.length > 10) {
    const lastMsg = tweets.slice(-10);
    res.send(lastMsg);
  } else {
    res.send(tweets);
  }
})


server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})