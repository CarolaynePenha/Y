import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
  const body = req.body;
  const user = {
    username: body.username,
    avatar: body.avatar,
  };
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const body = req.body;
  const userN = users.find((user) => {
    console.log("user: ", user);
    return user.username === body.username;
  });
  console.log("userN: ", userN);
  const tweet = {
    username: body.username,
    tweet: body.tweet,
    avatar: userN.avatar,
  };
  console.log(tweet);
  tweets.push(tweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweets.slice(-10));
});

app.listen(5000);
